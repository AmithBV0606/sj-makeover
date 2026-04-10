"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-subtitle">Know More About Us</span>
            <h2 className="section-title mt-3 mb-6">
              There is a kind of beauty in imperfection
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              I&apos;m Srujana Jois, a certified professional makeup artist
              (MakeupBySru) based in Bangalore. I began my journey in 2018 and
              have since had the privilege of working on over 1,000 weddings.
            </p>

            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Whether you envision a classic, traditional, or modern bridal
              look, our studio is dedicated to bringing your dream to life. I
              truly believe that every individual is naturally beautiful, and
              our goal is to enhance that charm in a way that makes you feel
              confident and radiant.
            </p>

            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              At SJ Academy, my team and I use our expertise and artistry to
              create elegant, personalized looks—ensuring you receive undivided
              attention and look your absolute best on your special occasion.
            </p>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-80 w-full">
                  <Image
                    src="/about-1.png"
                    alt="Beauty salon"
                    fill
                    className="object-cover rounded-sm"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="bg-brown-dark p-6 rounded-sm">
                  <h3 className="text-cream font-display text-xl mb-2">
                    There is a kind of beauty
                  </h3>
                  <p className="text-cream/60 font-body text-sm leading-relaxed">
                    We bring out the best version of you with care and
                    precision.
                  </p>
                </div>
              </div>
              <div className="pt-12">
                <div className="relative h-96 w-full">
                  <Image
                    src="/about-2.png"
                    alt="Makeup products"
                    fill
                    className="object-cover rounded-sm"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
