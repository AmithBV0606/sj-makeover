"use client";

import { motion } from "framer-motion";
import { Shield, Star, Palette } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Shield,
    title: "Hygiene and Safety",
    desc: "We maintain the highest standards of cleanliness and use sterilized, premium-quality tools.",
  },
  {
    icon: Star,
    title: "Professional Services",
    desc: "Our certified cosmetologists deliver personalized treatments with years of expertise.",
  },
  {
    icon: Palette,
    title: "Stylish Makeovers",
    desc: "From subtle enhancements to dramatic transformations, we create looks that turn heads.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-subtitle">The Best Beauty Rituals</span>
            <h2 className="section-title mt-3 mb-10">
              We care for the perfectionist in you.
            </h2>

            <div className="space-y-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex gap-5"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-cream-dark flex items-center justify-center">
                    <f.icon size={20} className="text-brown-dark" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-brown-dark mb-2">
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[600px] w-full">
              <Image
                src="/choose-us.jpg"
                alt="Professional makeup artist"
                fill
                className="object-cover rounded-sm"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
