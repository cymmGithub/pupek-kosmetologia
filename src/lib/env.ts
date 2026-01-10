/**
 * Environment configuration helper
 * Provides type-safe access to environment variables
 */

export const env = {
  tallyFormUrl: import.meta.env.VITE_TALLY_FORM_URL || '',
} as const;

/**
 * Validates that all required environment variables are set
 */
export const validateEnv = () => {
  if (!env.tallyFormUrl) {
    console.warn('VITE_TALLY_FORM_URL is not configured. Consultation form will not work.');
    return false;
  }
  return true;
};
