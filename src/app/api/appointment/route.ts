import { Resend } from "resend";
import { treatments } from "@/lib/treatments";

const ENQUIRY_EMAIL = "makeupbysru@gmail.com";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { firstName, lastName, phone, treatment, message } = (body ??
    {}) as Record<string, unknown>;

  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof phone !== "string" ||
    typeof treatment !== "string" ||
    (message !== undefined && typeof message !== "string")
  ) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const first = firstName.trim();
  const last = lastName.trim();
  const trimmedMessage = (message ?? "").trim();
  const treatmentEntry = treatments.find((t) => t.value === treatment);

  if (phone.replace(/\D/g, "").length < 10) {
    return Response.json(
      { error: "Please enter a valid phone number (at least 10 digits)." },
      { status: 400 }
    );
  }
  if (!first || !last || !treatmentEntry) {
    return Response.json(
      { error: "Please fill in your name and select a treatment." },
      { status: 400 }
    );
  }
  if (trimmedMessage.length > 2000) {
    return Response.json(
      { error: "Message is too long (max 2000 characters)." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return Response.json(
      { error: "Failed to send enquiry. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "Srujana Jois Studio <onboarding@resend.dev>",
    to: ENQUIRY_EMAIL,
    subject: `New appointment enquiry from ${first} ${last}`,
    text: [
      "New appointment enquiry",
      "",
      `Name: ${first} ${last}`,
      `Phone: ${phone.trim()}`,
      `Treatment: ${treatmentEntry.label}`,
      `Message: ${trimmedMessage || "(none)"}`,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: "Failed to send enquiry. Please try again." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
