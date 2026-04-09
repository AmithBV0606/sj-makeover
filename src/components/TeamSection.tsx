"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const InstagramIcon = ({ size = 14 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 14 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 14 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const team = [
  { name: "Tiana", role: "Founder & Hair Styler", img: "/team-1.jpg" },
  { name: "Sofia", role: "Co-Founder & Fashion Styler", img: "/team-2.jpg" },
  { name: "Efrina", role: "Makeup Artist", img: "/team-3.jpg" },
  { name: "Nita", role: "Makeup Styler", img: "/team-4.jpg" },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-subtitle">Our Team</span>
          <h2 className="section-title mt-3">Professional cosmetologists</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-sm mb-5 h-80">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/40 transition-all duration-500 flex items-end justify-center pb-6">
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="w-9 h-9 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-olive transition-colors text-cream">
                      <InstagramIcon />
                    </span>
                    <span className="w-9 h-9 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-olive transition-colors text-cream">
                      <FacebookIcon />
                    </span>
                    <span className="w-9 h-9 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-olive transition-colors text-cream">
                      <TwitterIcon />
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold text-brown-dark">
                {member.name}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
