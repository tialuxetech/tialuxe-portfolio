const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
});
const services = new Set(["WordPress or a custom platform", "Commerce or online store", "React or Next.js front end", "Something else"]);

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return json({ error: "Request not allowed." }, 403);
  if (Number(request.headers.get("content-length") || 0) > 12000) return json({ error: "Message is too long." }, 413);

  let form;
  try { form = await request.formData(); } catch { return json({ error: "Please check your details and try again." }, 400); }
  const field = (name) => typeof form.get(name) === "string" ? form.get(name).trim() : "";
  const name = field("name");
  const email = field("email");
  const service = field("service");
  const message = field("message");
  if (field("website")) return json({ ok: true });
  if (!name || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !services.has(service) || message.length < 10 || message.length > 5000) {
    return json({ error: "Please complete each field with valid details." }, 400);
  }
  if (!env.RESEND_API_KEY || !env.CONTACT_FROM_EMAIL || !env.CONTACT_TO_EMAIL) {
    return json({ error: "The contact form is being set up. Please email me directly for now." }, 503);
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "authorization": `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL,
        to: [env.CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `Portfolio enquiry: ${service}`,
        text: `Name: ${name}\nEmail: ${email}\nInterest: ${service}\n\n${message}`,
      }),
    });
    if (!response.ok) {
      console.error("Contact delivery failed", response.status, await response.text());
      return json({ error: "Your message could not be sent right now." }, 502);
    }
    return json({ ok: true });
  } catch (error) {
    console.error("Contact delivery failed", error);
    return json({ error: "Your message could not be sent right now." }, 502);
  }
}
