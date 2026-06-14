"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Crown,
  WandSparkles,
  Camera,
  Shirt,
  X,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Bridal Makeup & Styling",
    desc: "Timeless, camera-ready bridal looks with complete styling for your special day.",
  },
  {
    icon: Crown,
    title: "Luxury Party Makeup",
    desc: "Glamorous, statement-making makeup for parties and celebrations.",
  },
  {
    icon: Camera,
    title: "Editorial & Fashion Makeup",
    desc: "Bold, creative looks crafted for runways, shoots, and editorials.",
  },
  {
    icon: WandSparkles,
    title: "HD & Airbrush Makeup",
    desc: "Flawless, long-lasting HD and Airbrush finishes for every occasion.",
  },
  {
    icon: Scissors,
    title: "Hair Styling & Saree Draping",
    desc: "Elegant hairstyling paired with expert saree draping.",
  },
  {
    icon: Shirt,
    title: "Groom Styling",
    desc: "Complete grooming and styling so the groom looks his sharpest.",
  },
];

const moreServices = [
  "Bridal Jewellery Rental",
  "Nail Art & Nail Extensions",
  "Mehendi (Henna Art)",
  "Floral Art",
  "Pre-Pleating Services",
  "Saree Draping Workshop",
  "Self-Makeup Workshops",
  "Professional Makeup & Hair Courses",
  "Advance Masterclasses",
  "Portfolio & Brand Shoot Makeup",
];

const ServicesSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="services" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-subtitle">Get Beautiful With Us</span>
          <h2 className="section-title mt-3 mb-6">What We Offer</h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            Discover our range of premium beauty services designed to enhance
            your natural glow and leave you feeling confident and radiant.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-background p-8 rounded-sm hover:bg-brown-dark transition-all duration-500 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-cream-dark group-hover:bg-cream/10 flex items-center justify-center mb-6 transition-colors">
                <service.icon
                  size={24}
                  className="text-brown-dark group-hover:text-cream transition-colors"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-brown-dark group-hover:text-cream mt-2 mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-cream/60 font-body text-sm leading-relaxed transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="btn-outline"
          >
            View All Services
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brown-dark/60 backdrop-blur-sm p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="More services"
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-background rounded-sm p-8 sm:p-10"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-5 right-5 text-brown-dark/60 hover:text-brown-dark transition-colors"
              >
                <X size={22} />
              </button>

              <span className="section-subtitle">Explore Everything</span>
              <h3 className="section-title mt-3 mb-8">More Services</h3>

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {moreServices.map((name) => (
                  <li
                    key={name}
                    className="flex items-start gap-3 py-1 font-body text-brown-dark"
                  >
                    <Sparkles size={16} className="text-olive shrink-0 mt-1" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
