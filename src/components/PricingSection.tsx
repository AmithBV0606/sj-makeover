"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const treatments = [
  {
    name: "Pre-Bridal Skin Prep",
    desc: "Skin priming and care to get your complexion wedding-ready",
  },
  {
    name: "Hydrating Facial",
    desc: "Deep-hydration facial for a fresh, radiant glow",
  },
  {
    name: "Lash Lift & Tint",
    desc: "Curl and tint for fuller-looking, defined lashes",
  },
  {
    name: "Brow Shaping & Tinting",
    desc: "Precision shaping and tint for perfectly framed brows",
  },
  {
    name: "Skin Polishing & Cleanup",
    desc: "Gentle exfoliation and cleanup for smooth, even skin",
  },
];

const TreatmentsSection = () => {
  return (
    <section id="treatments" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-full"
          >
            <div className="relative min-h-[650px] w-full">
              <Image
                src="/pricing-bg.jpg"
                alt="Beauty treatment"
                fill
                className="object-cover object-[center_25%] rounded-sm"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-brown-dark/90 backdrop-blur-sm p-8">
                <div className="text-center">
                  <span className="text-5xl font-display font-bold text-cream">
                    10+
                  </span>
                  <h3 className="text-cream font-display text-xl mt-2">
                    Years Experience
                  </h3>
                  <p className="text-cream/60 font-body text-sm mt-2">
                    Delivering excellence in beauty and personal styling.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pricing List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-subtitle">Treatments</span>
            <h2 className="section-title mt-3 mb-10">
              Because being beautiful should never harm you
            </h2>

            <div className="space-y-0">
              {treatments.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="py-5 border-b border-border group cursor-pointer"
                >
                  <h3 className="font-display text-lg font-semibold text-brown-dark group-hover:text-olive transition-colors">
                    {t.name}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm">
                    {t.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
