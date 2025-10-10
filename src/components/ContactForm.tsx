"use client";
import { useMemo, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [error, setError] = useState<string>("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Project Inquiry — AUMI4");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    return `mailto:olga@aifashionartists.com?subject=${subject}&body=${body}`;
  }, [name, email, message]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || res.statusText || "Failed to send");
      setStatus("sent");
      setName(""); setEmail(""); setMessage("");
    } catch (err: any) {
      setStatus("error");
      const msg = String(err?.message || "Failed to send");
      setError(msg);
      // Graceful fallback: open user's mail client on any failure
      try { location.href = mailto; } catch {}
    }
  }

  return (
    <form className="mt-8 grid gap-4" onSubmit={onSubmit}>
      <label className="grid gap-2">
        <span className="text-sm text-neutral-700">Name</span>
        <input
          className="rounded-md border px-3 py-2 bg-white text-black"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm text-neutral-700">Email</span>
        <input
          className="rounded-md border px-3 py-2 bg-white text-black"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@brand.com"
          required
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm text-neutral-700">Message</span>
        <textarea
          className="rounded-md border px-3 py-2 bg-white text-black min-h-36"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Launch date, platforms, product links..."
          required
        />
      </label>
      <div className="flex items-center gap-3 mt-2">
        <button type="submit" className="rounded-md bg-black text-white px-4 py-2" disabled={status==="sending"}>
          {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : "Send"}
        </button>
        <a href={mailto} className="rounded-md border px-4 py-2">Email directly</a>
        {status === "error" && <span className="text-sm text-red-600">{error} — opening your email app…</span>}
        {status === "sent" && <span className="text-sm text-green-700">Thanks — I’ll reply shortly.</span>}
      </div>
    </form>
  );
}


