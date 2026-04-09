"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    treatment: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your appointment request has been submitted.");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      treatment: "",
      message: "",
    });
  };

  return (
    <section id="appointment" className="py-24 bg-brown-dark">
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
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 px-5 py-3 font-body text-sm focus:outline-none focus:border-olive transition-colors"
              />
              <input
                type="text"
                placeholder="Last Name *"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 px-5 py-3 font-body text-sm focus:outline-none focus:border-olive transition-colors"
              />
            </div>
            <input
              type="tel"
              placeholder="Telephone *"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 px-5 py-3 font-body text-sm focus:outline-none focus:border-olive transition-colors"
            />
            <select
              required
              value={formData.treatment}
              onChange={(e) =>
                setFormData({ ...formData, treatment: e.target.value })
              }
              className="w-full bg-cream/10 border border-cream/20 text-cream/70 px-5 py-3 font-body text-sm focus:outline-none focus:border-olive transition-colors"
            >
              <option value="" className="text-brown-dark">
                Select Treatment *
              </option>
              <option value="cinematic" className="text-brown-dark">
                Cinematic Makeup
              </option>
              <option value="fashion" className="text-brown-dark">
                Fashion Makeup
              </option>
              <option value="bridal" className="text-brown-dark">
                Bridal Makeup
              </option>
              <option value="hair" className="text-brown-dark">
                Hair Style
              </option>
              <option value="facial" className="text-brown-dark">
                Facial & Massage
              </option>
            </select>
            <textarea
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 px-5 py-3 font-body text-sm focus:outline-none focus:border-olive transition-colors resize-none"
            />
            <button type="submit" className="btn-accent w-full sm:w-auto">
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
