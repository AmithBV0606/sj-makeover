"use client";

import { motion } from "framer-motion";
import { Heart, Palette, Gem, Shield, Clock, Smile } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Heart,
    title: "1000+ Happy Brides & Clients",
    desc: "A thriving community of brides and clients who've trusted us with their most cherished moments.",
  },
  {
    icon: Palette,
    title: "Personalized Makeup",
    desc: "Every look is thoughtfully curated to suit your skin type, outfit, and the essence of your occasion.",
  },
  {
    icon: Gem,
    title: "Premium, High-End Products",
    desc: "Only internationally acclaimed, luxury makeup brands that deliver a flawless, lasting finish.",
  },
  {
    icon: Shield,
    title: "Hygiene & Safety First",
    desc: "Sanitized tools, single-use applicators, and rigorous hygiene practices for every single client.",
  },
  {
    icon: Clock,
    title: "On-Time Professional Service",
    desc: "Punctual arrivals and meticulous preparation, so your big day flows effortlessly from start to finish.",
  },
  {
    icon: Smile,
    title: "Calm & Stress-Free Experience",
    desc: "A warm, friendly atmosphere that lets you relax, smile, and truly enjoy every moment of your special day.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
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
            <h2 className="section-title mt-3 mb-10">Why Choose Us</h2>

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
            <div className="relative h-[650px] w-full">
              <Image
                src="/why-us.png"
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
