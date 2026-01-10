import { env } from './env';

/**
 * Navigates to the Tally form in the same tab
 * Falls back to contact section if Tally URL is not configured
 */
export const openTallyForm = () => {
  const tallyUrl = env.tallyFormUrl;

  if (tallyUrl) {
    // Navigate to Tally form in same tab
    window.location.href = tallyUrl;
  } else {
    console.warn('Tally form URL not configured. Please set VITE_TALLY_FORM_URL');
    // Fallback: scroll to contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
