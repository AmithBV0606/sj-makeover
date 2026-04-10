"use client";

import { motion } from "framer-motion";
import { Scissors, Sparkles, Crown, Heart } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Bridal Makeup",
    desc: "HD, Airbrush, Traditional & Contemporary Bridal Looks",
  },
  {
    icon: Crown,
    title: "Makeup",
    desc: "Pre-Wedding Makeup, Engagement Makeup, Party & Occasion Makeup,  Fashion & Editorial Makeup",
  },
  {
    icon: Heart,
    title: "Hairstyle",
    desc: "Hairstyling & Draping Services.",
  },
  {
    icon: Scissors,
    title: "Trails",
    desc: "Makeup Trials & Consultations",
  },
];

const ServicesSection = () => {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <a href="#pricing" className="btn-outline">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

// Bridal Makeup – HD, Airbrush, Traditional & Contemporary Bridal Looks
// Pre-Wedding & Engagement Makeup
// Party & Occasion Makeup
// Fashion & Editorial Makeup
// Hairstyling & Draping Services
// Makeup Trials & Consultations
