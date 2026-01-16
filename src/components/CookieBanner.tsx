import { useState, useEffect, useRef } from "react";
import { Settings2, Cookie, ChevronDown } from "lucide-react";
import {
  useCookieConsent,
  COOKIE_BANNER_ENABLED,
  type CookieCategory,
} from "@/lib/cookies";
import { cn } from "@/lib/utils";

interface CategoryToggleProps {
  id: CookieCategory;
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

function CategoryToggle({
  id,
  label,
  description,
  checked,
  onChange,
  disabled,
}: CategoryToggleProps) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-border/50 last:border-0">
      <div className="flex-1 min-w-0">
        <label
          htmlFor={id}
          className={cn(
            "block font-serif text-base text-foreground cursor-pointer",
            disabled && "cursor-default"
          )}
        >
          {label}
        </label>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
          {description}
        </p>
      </div>
      <button
        id={id}
        role="switch"
        aria-checked={checked}
        aria-label={`${label}: ${checked ? "włączone" : "wyłączone"}`}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={cn(
          "relative inline-flex h-6 w-11 flex-shrink-0 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          checked ? "bg-primary" : "bg-muted",
          disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
        )}
      >
        <span
          className={cn(
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
            checked ? "translate-x-5" : "translate-x-0.5",
            "mt-0.5"
          )}
        />
      </button>
    </div>
  );
}

export default function CookieBanner() {
  const {
    showBanner,
    acceptAll,
    rejectAll,
    acceptSelected,
    hasInteracted,
  } = useCookieConsent();

  const [showDetails, setShowDetails] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [categories, setCategories] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const bannerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Handle visibility with animation
  useEffect(() => {
    if (showBanner && !hasInteracted) {
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    } else if (!showBanner) {
      setIsVisible(false);
    }
  }, [showBanner, hasInteracted]);

  // Focus management for accessibility
  useEffect(() => {
    if (isVisible && firstFocusableRef.current) {
      firstFocusableRef.current.focus();
    }
  }, [isVisible]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        handleReject();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  const handleAccept = () => {
    setIsExiting(true);
    setTimeout(() => {
      acceptAll();
      setIsExiting(false);
    }, 300);
  };

  const handleReject = () => {
    setIsExiting(true);
    setTimeout(() => {
      rejectAll();
      setIsExiting(false);
    }, 300);
  };

  const handleSavePreferences = () => {
    setIsExiting(true);
    setTimeout(() => {
      acceptSelected(categories);
      setIsExiting(false);
    }, 300);
  };

  if (!COOKIE_BANNER_ENABLED || !showBanner || hasInteracted) {
    return null;
  }

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      className={cn(
        "fixed bottom-4 right-4 z-[9999] w-[calc(100%-2rem)] sm:w-[420px] transition-all duration-500 ease-out",
        isVisible && !isExiting
          ? "translate-y-0 translate-x-0 opacity-100"
          : "translate-y-8 translate-x-4 opacity-0 pointer-events-none"
      )}
    >
      <div className="bg-card rounded-xl shadow-2xl border border-border/50 overflow-hidden">
        {/* Decorative top accent */}
        <div className="h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

        <div className="p-5">
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Cookie className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <div className="flex-1 min-w-0">
              <h2
                id="cookie-banner-title"
                className="font-serif text-lg text-foreground mb-1"
              >
                Pliki cookie
              </h2>
              <p
                id="cookie-banner-description"
                className="text-sm text-muted-foreground leading-relaxed"
              >
                Używamy cookies dla lepszego doświadczenia.
              </p>
            </div>
          </div>

          {/* Expandable details */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              showDetails ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="border-t border-border/50 pt-4 mb-4">
              <CategoryToggle
                id="necessary"
                label="Niezbędne"
                description="Wymagane do działania strony."
                checked={categories.necessary}
                onChange={() => {}}
                disabled
              />
              <CategoryToggle
                id="analytics"
                label="Analityczne"
                description="Pomagają ulepszać stronę."
                checked={categories.analytics}
                onChange={(checked) =>
                  setCategories((prev) => ({ ...prev, analytics: checked }))
                }
              />
              <CategoryToggle
                id="marketing"
                label="Marketingowe"
                description="Personalizacja reklam."
                checked={categories.marketing}
                onChange={(checked) =>
                  setCategories((prev) => ({ ...prev, marketing: checked }))
                }
              />
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            {/* Buttons */}
            <div className="flex gap-2">
              {showDetails ? (
                <>
                  <button
                    onClick={handleReject}
                    className="flex-1 px-4 py-2.5 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Odrzuć
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 px-4 py-2.5 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Zapisz
                  </button>
                </>
              ) : (
                <>
                  {/* GDPR Compliant: Equal prominence for Accept and Reject */}
                  <button
                    ref={firstFocusableRef}
                    onClick={handleReject}
                    className="flex-1 px-4 py-2.5 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Odrzuć
                  </button>
                  <button
                    onClick={handleAccept}
                    className="flex-1 px-4 py-2.5 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Akceptuję
                  </button>
                </>
              )}
            </div>

            {/* Settings toggle & Privacy link */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>{showDetails ? "Ukryj" : "Dostosuj"}</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    showDetails && "rotate-180"
                  )}
                />
              </button>
              <a
                href="/polityka-prywatnosci"
                className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
              >
                Polityka prywatności
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Small button to reopen cookie settings (optional, for footer)
export function CookieSettingsButton() {
  const { openSettings } = useCookieConsent();

  if (!COOKIE_BANNER_ENABLED) return null;

  return (
    <button
      onClick={openSettings}
      className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
      aria-label="Otwórz ustawienia plików cookie"
    >
      <Cookie className="w-4 h-4" />
      <span>Ustawienia cookies</span>
    </button>
  );
}
