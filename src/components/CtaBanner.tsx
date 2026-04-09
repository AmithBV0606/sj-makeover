"use client";

import { motion } from "framer-motion";

const CtaBanner = () => {
  return (
    <section className="bg-brown-dark py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="text-olive text-xs uppercase tracking-[0.2em] font-body font-semibold">
              Discount 20%
            </span>
            <h2 className="text-cream font-display text-2xl md:text-3xl font-semibold mt-2">
              Bringing the joy of creativity!
            </h2>
          </div>
          <a href="#appointment" className="btn-accent">
            Book An Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
