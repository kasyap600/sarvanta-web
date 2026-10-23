import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, company, email, phone, product, quantity, packaging, message } = body;

  if (!name || !email || !product || !quantity) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // If RESEND_API_KEY is set, send via Resend — otherwise log and return success
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Sarvanta Website <noreply@sarvantaglobal.in>",
        to: ["info@sarvantaglobal.in"],
        reply_to: email,
        subject: `New Inquiry: ${product} — ${name}${company ? ` (${company})` : ""}`,
        html: `
          <h2>New Quote Inquiry — Sarvanta Global</h2>
          <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
            <tr><td style="font-weight:bold;background:#f5f0e8">Name</td><td>${name}</td></tr>
            ${company ? `<tr><td style="font-weight:bold;background:#f5f0e8">Company</td><td>${company}</td></tr>` : ""}
            <tr><td style="font-weight:bold;background:#f5f0e8">Email</td><td>${email}</td></tr>
            ${phone ? `<tr><td style="font-weight:bold;background:#f5f0e8">Phone</td><td>${phone}</td></tr>` : ""}
            <tr><td style="font-weight:bold;background:#f5f0e8">Product</td><td>${product}</td></tr>
            <tr><td style="font-weight:bold;background:#f5f0e8">Quantity</td><td>${quantity}</td></tr>
            ${packaging ? `<tr><td style="font-weight:bold;background:#f5f0e8">Packaging</td><td>${packaging}</td></tr>` : ""}
            ${message ? `<tr><td style="font-weight:bold;background:#f5f0e8">Message</td><td>${message}</td></tr>` : ""}
          </table>
        `,
      }),
    });

    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      console.error("Resend error:", res.status, errBody);
      return NextResponse.json({ error: "Email failed", detail: errBody }, { status: 500 });
    }
  } else {
    console.log("Inquiry received (no RESEND_API_KEY configured):", { name, company, email, product, quantity });
  }

  return NextResponse.json({ success: true });
}
