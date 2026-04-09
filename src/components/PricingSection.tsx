"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const treatments = [
  {
    name: "Face Treatments",
    desc: "Complete facial care and rejuvenation",
    price: "$50",
  },
  {
    name: "Facial & Massage",
    desc: "Relaxing facial with therapeutic massage",
    price: "$50",
  },
  {
    name: "Hair Treatment",
    desc: "Deep conditioning and hair restoration",
    price: "$50",
  },
  {
    name: "Manicure & Pedicure",
    desc: "Complete nail care and styling",
    price: "$50",
  },
  {
    name: "Hand/Nail Moisturizer",
    desc: "Premium hand and nail care treatment",
    price: "$50",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/pricing-bg.jpg"
                alt="Beauty treatment"
                fill
                className="object-cover rounded-sm"
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
            <span className="section-subtitle">Treatment & Prices</span>
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
                  className="flex items-center justify-between py-5 border-b border-border group cursor-pointer"
                >
                  <div>
                    <h3 className="font-display text-lg font-semibold text-brown-dark group-hover:text-olive transition-colors">
                      {t.name}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm">
                      {t.desc}
                    </p>
                  </div>
                  <span className="text-2xl font-display font-bold text-brown-dark shrink-0 ml-4">
                    {t.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
