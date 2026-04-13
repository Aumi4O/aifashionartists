/** Default: Calendly. Override with NEXT_PUBLIC_BOOK_CALL_URL in env. */
export const BOOK_CALL_URL =
  process.env.NEXT_PUBLIC_BOOK_CALL_URL?.trim() ||
  "https://calendly.com/aumi4-support/30-minute-meeting-clone";
