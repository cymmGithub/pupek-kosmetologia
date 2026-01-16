import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

// ============================================
// CONFIGURATION - Change this to enable/disable the cookie banner
// ============================================
export const COOKIE_BANNER_ENABLED = false;
// ============================================

export type CookieCategory = "necessary" | "analytics" | "marketing";

export interface CookieConsent {
  necessary: boolean; // Always true, cannot be disabled
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

interface CookieConsentContextType {
  consent: CookieConsent | null;
  hasInteracted: boolean;
  showBanner: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  acceptSelected: (categories: Partial<CookieConsent>) => void;
  openSettings: () => void;
  isConsentGiven: (category: CookieCategory) => boolean;
}

const STORAGE_KEY = "cookie-consent";

const CookieConsentContext = createContext<CookieConsentContextType | null>(
  null
);

function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Invalid JSON, ignore
  }
  return null;
}

function storeConsent(consent: CookieConsent): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // Storage unavailable
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [settingsRequested, setSettingsRequested] = useState(false);

  // Load stored consent on mount
  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setConsent(stored);
      setHasInteracted(true);
    } else if (COOKIE_BANNER_ENABLED) {
      // Show banner after a brief delay for smooth page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = useCallback((newConsent: CookieConsent) => {
    const consentWithTimestamp = { ...newConsent, timestamp: Date.now() };
    setConsent(consentWithTimestamp);
    storeConsent(consentWithTimestamp);
    setHasInteracted(true);
    setShowBanner(false);
    setSettingsRequested(false);
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: 0,
    });
  }, [saveConsent]);

  const rejectAll = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: 0,
    });
  }, [saveConsent]);

  const acceptSelected = useCallback(
    (categories: Partial<CookieConsent>) => {
      saveConsent({
        necessary: true, // Always required
        analytics: categories.analytics ?? false,
        marketing: categories.marketing ?? false,
        timestamp: 0,
      });
    },
    [saveConsent]
  );

  const openSettings = useCallback(() => {
    setSettingsRequested(true);
    setShowBanner(true);
  }, []);

  const isConsentGiven = useCallback(
    (category: CookieCategory): boolean => {
      if (!COOKIE_BANNER_ENABLED) return true; // If banner disabled, assume consent
      if (!consent) return category === "necessary";
      return consent[category] ?? false;
    },
    [consent]
  );

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasInteracted,
        showBanner: showBanner || settingsRequested,
        acceptAll,
        rejectAll,
        acceptSelected,
        openSettings,
        isConsentGiven,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent must be used within CookieConsentProvider"
    );
  }
  return context;
}

// ============================================
// UTILITY: Use this to conditionally load scripts
// ============================================
// Example usage for Google Analytics:
//
// import { useCookieConsent } from '@/lib/cookies';
//
// function GoogleAnalytics() {
//   const { isConsentGiven } = useCookieConsent();
//
//   useEffect(() => {
//     if (isConsentGiven('analytics')) {
//       // Load GA script here
//       const script = document.createElement('script');
//       script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID';
//       script.async = true;
//       document.head.appendChild(script);
//     }
//   }, [isConsentGiven]);
//
//   return null;
// }
// ============================================
