import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server misconfigured." }, { status: 500 });
  }

  const res = await fetch("https://buttondown.email/api/emails/embed-subscribe/peaklab", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Token ${apiKey}`,
    },
    body: new URLSearchParams({ email }),
  });

  // Buttondown returns 400 even on success — it sends a verification email.
  // We treat any non-500 response as success (verification email will be sent).
  if (res.status === 500) {
    return NextResponse.json({ error: "Could not subscribe. Try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
