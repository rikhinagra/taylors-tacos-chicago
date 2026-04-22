import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const scriptUrl = process.env.CONTACT_FORM_URL;
    if (!scriptUrl) {
      return NextResponse.json({ error: "Script URL not configured" }, { status: 500 });
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await response.text();
    return NextResponse.json({ success: true, result: text });

  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
