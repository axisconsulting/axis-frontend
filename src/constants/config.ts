// Controls configuration constants for the application such as:
// - Hiring periods (active/inactive)
// - Feature toggles
// - Event toggles

export const HIRING_CONFIG = {
   HIRING_ACTIVE: false,
} as const;

export const EVENT_CONFIG = {
   ODYSSEY_REGISTRATION_TOGGLE: false,
   REVOLVE_REGISTRATION_TOGGLE: false,
} as const;

export const CONFIG_STRINGS = {
   HIRING_MSG: HIRING_CONFIG.HIRING_ACTIVE ? "Apply Now!" : "Applications are Closed",
   ODYSSEY_REGISTRATION_MSG: EVENT_CONFIG.ODYSSEY_REGISTRATION_TOGGLE
      ? "Register Now"
      : "Registration is currently Closed",
   REVOLVE_REGISTRATION_MSG: EVENT_CONFIG.REVOLVE_REGISTRATION_TOGGLE
      ? "Register Now"
      : "Registration is currently Closed",
} as const;
