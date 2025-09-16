import { NextResponse } from "next/server";
export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: "Server email not configured" }, { status: 500 });
    }
    const from = process.env.RESEND_FROM || "onboarding@resend.dev";
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: ["olga@aifashionartists.com"],
        reply_to: email,
        subject: `New inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    const data = (await response.json()) as { id?: string; error?: { message?: string } };
    if (!response.ok) {
      return NextResponse.json({ ok: false, error: data?.error?.message || response.statusText }, { status: 500 });
    }
    return NextResponse.json({ ok: true, id: data.id ?? null });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}


