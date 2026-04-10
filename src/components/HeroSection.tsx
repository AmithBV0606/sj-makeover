"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-brown-dark">
        <Image
          src="/new-hero-image.png"
          alt="Fabulux Beauty"
          fill
          className="object-cover md:object-fill"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-dark/80 via-brown-dark/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="section-subtitle text-cream/80">
              Welcome to Srujana Jois Makeup Studio & Academy
            </span>
            <span className="w-16 h-px bg-cream/40" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-cream leading-[1.1] mb-6">
            We Can Create
            <br />
            What You
            <br />
            <span className="italic font-normal">Imagine.</span>
          </h1>

          <p className="text-cream/70 font-body text-base md:text-lg max-w-md mb-10 font-light leading-relaxed">
            Experience the art of beauty transformation with our expert stylists
            and premium services tailored just for you.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            {/* <a href="#about" className="btn-primary">
              DISCOVER MORE
            </a> */}

            {/* Phone : */}
            <div className="flex items-center gap-3">
              <Link
                href="https://wa.me/919986160243"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 rounded-full border-2 border-cream/30 flex items-center justify-center">
                  <Phone size={18} className="text-cream" />
                </div>
              </Link>
              <div>
                <p className="text-cream/60 text-xs uppercase tracking-[0.15em] font-body">
                  Make Appointment
                </p>
                <p className="text-cream font-display text-lg">
                  +91 9986160243
                </p>
              </div>
            </div>

            {/* Instagram :  */}
            <div className="flex items-center gap-3">
              <Link
                href={"https://www.instagram.com/makeupbysru"}
                target="_blank"
              >
                {" "}
                <div className="w-12 h-12 rounded-full border-2 border-cream/30 flex items-center justify-center">
                  <FaInstagram size={18} className="text-cream" />
                </div>
              </Link>
              <div>
                <p className="text-cream/60 text-md tracking-[0.15em] font-body">
                  @makeupbysru
                </p>
                <p className="text-cream font-display text-lg">
                  +91 9986160243
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
