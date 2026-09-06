/**
 * WhatsApp deep links — one number, one place.
 *
 * Used by the floating button and by the per-segment CTAs on the Solutions
 * page, each with its own prefilled message so we know which offer the
 * conversation started from.
 */
export const WHATSAPP_NUMBER = "212609996687";

/** wa.me link that opens a chat with the message already typed. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
