/**
 * Contact form delivery — runs on the server only.
 *
 * The message is sent through Resend's REST API (no SDK needed) to the
 * inbox in CONTACT_TO_EMAIL. Reply-To carries the prospect's own address,
 * so hitting "Reply" in Gmail answers them directly.
 *
 * Required environment variable: RESEND_API_KEY.
 */
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "adnccorp@gmail.com";
// Resend's shared sender works with no domain setup, but only delivers to
// the address that owns the Resend account. Once adncgroup.com is verified
// there, set CONTACT_FROM_EMAIL to something like "site@adncgroup.com".
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "ADNC Group <onboarding@resend.dev>";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  phone: z.string().trim().max(40).optional().default(""),
  company: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(1, "Please describe your project").max(5000),
  // Hidden field: humans leave it empty, bots fill it in.
  website: z.string().max(0).optional().default(""),
});

export type ContactInput = z.input<typeof contactSchema>;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: ContactInput) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot tripped — pretend it worked so the bot doesn't retry.
    if (data.website) return { ok: true as const };

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is missing — contact message not sent");
      throw new Error("Email is not configured yet. Please write to us directly.");
    }

    const company = data.company || "—";
    const phone = data.phone || "—";
    const request = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: data.email,
        subject: `New project enquiry — ${data.name}${data.company ? ` (${data.company})` : ""}`,
        text: [
          `Name:    ${data.name}`,
          `Email:   ${data.email}`,
          `Phone:   ${phone}`,
          `Company: ${company}`,
          "",
          data.message,
        ].join("\n"),
        html: [
          `<p><strong>Name:</strong> ${escapeHtml(data.name)}</p>`,
          `<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>`,
          `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>`,
          `<p><strong>Company:</strong> ${escapeHtml(company)}</p>`,
          `<p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
        ].join(""),
      }),
    });

    let response: Response;
    try {
      response = await request;
    } catch (cause) {
      // Network-level failure — keep the raw reason out of the page.
      console.error("Could not reach Resend", cause);
      throw new Error("We couldn't send your message. Please try again in a moment.");
    }

    if (!response.ok) {
      // Log the provider's reason server-side; never expose it to the page.
      console.error("Resend rejected the contact message", response.status, await response.text());
      throw new Error("We couldn't send your message. Please try again in a moment.");
    }

    return { ok: true as const };
  });
