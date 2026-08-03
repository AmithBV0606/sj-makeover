"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { treatments } from "@/lib/treatments";

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    treatment: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (status === "success") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();
    const message = formData.message.trim();

    // Validate phone: keep digits only and require a plausible length.
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      setError("Please enter a valid phone number (at least 10 digits).");
      return;
    }
    if (!firstName || !lastName || !formData.treatment) {
      setError("Please fill in your name and select a treatment.");
      return;
    }
    setError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          phone: formData.phone.trim(),
          treatment: formData.treatment,
          message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        treatment: "",
        message: "",
      });
    } catch (err) {
      setStatus("idle");
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send. Please try again."
      );
    }
  };

  return (
    <section id="appointment" className="py-24 bg-brown-dark border-b-2 border-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-olive text-xs uppercase tracking-[0.3em] font-body font-medium">
              Book Appointment
            </span>
            <h2 className="text-cream font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 mb-6 leading-tight">
              Bringing the joy of creativity!
            </h2>
            <p className="text-cream/60 font-body leading-relaxed">
              Book your appointment today and let our expert team transform your
              look. We offer personalized consultations to ensure you get exactly
              what you envision.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name *"
                required
                value={formData.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
                className="w-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 px-5 py-3 font-body text-sm focus:outline-none focus:border-olive transition-colors"
              />
              <input
                type="text"
                placeholder="Last Name *"
                required
                value={formData.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
                className="w-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 px-5 py-3 font-body text-sm focus:outline-none focus:border-olive transition-colors"
              />
            </div>
            <input
              type="tel"
              placeholder="Telephone *"
              required
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className="w-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 px-5 py-3 font-body text-sm focus:outline-none focus:border-olive transition-colors"
            />
            <select
              required
              value={formData.treatment}
              onChange={(e) => updateField("treatment", e.target.value)}
              className="w-full bg-cream/10 border border-cream/20 text-cream/70 px-5 py-3 font-body text-sm focus:outline-none focus:border-olive transition-colors"
            >
              <option value="" className="text-brown-dark">
                Select Treatment *
              </option>
              {treatments.map((t) => (
                <option
                  key={t.value}
                  value={t.value}
                  className="text-brown-dark"
                >
                  {t.label}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={(e) => updateField("message", e.target.value)}
              className="w-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 px-5 py-3 font-body text-sm focus:outline-none focus:border-olive transition-colors resize-none"
            />
            {error && (
              <p className="text-destructive-foreground bg-destructive/80 px-4 py-2 font-body text-sm">
                {error}
              </p>
            )}
            {status === "success" && (
              <p className="text-cream bg-olive/80 px-4 py-2 font-body text-sm">
                Thank you! Your enquiry has been sent — we&apos;ll get back to
                you shortly.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-accent w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending..." : "Book Appointment"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
