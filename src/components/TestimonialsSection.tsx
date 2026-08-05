"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns-1";

// Real Google reviews for Srujana Jois Makeup Studio and Academy,
// excerpted verbatim (fetched 5 Aug 2026; 4.9 stars across 21 reviews).
const testimonials: Testimonial[] = [
  {
    text: "She was one of the first people I trusted for my engagement — saree draping, hairstyle, and makeup — everything was flawless. Since then, she has been part of more than 15 occasions in our family. For any big occasion, you can trust Srujana completely.",
    name: "Kavitha Gowda",
    role: "Client for 11+ years",
    rating: 5,
  },
  {
    text: "She dolled me up for my marriage and did an absolutely amazing job. The makeup was natural glam, felt extremely lightweight, and stayed flawless all day without caking. I received so many compliments and highly recommend her to anyone!",
    name: "Manasa Ravishankar",
    role: "Bridal client",
    rating: 5,
  },
  {
    text: "I recently attended the Self Makeup Workshop, and I must say it was an amazing experience from start to finish. What impressed me the most was Srujana's incredible patience. She explained every single step in detail, ensuring that everyone understood the techniques.",
    name: "Mansi Jain",
    role: "Self-makeup workshop",
    rating: 5,
  },
  {
    text: "Extremely professional, punctual and a joy to work with. They took the time to understand my skin type and preferences, and the final look was absolutely flawless. They are very hygienic with their products and tools as well.",
    name: "Swathi S",
    role: "Makeup client",
    rating: 5,
  },
  {
    text: "Her makeup is completely flawless — glowy, elegant, and long-lasting. She has been doing makeup and saree draping for our entire family for over 10 to 12 years now. Whether it's a big event or a family function, we wouldn't trust anyone else.",
    name: "Gowri Rao",
    role: "Family client, 10+ years",
    rating: 5,
  },
  {
    text: "The makeup looked flawless and well-blended. The foundation matched the skin tone perfectly, and the eye makeup enhanced the overall look without appearing overdone. The finish was smooth, natural, and long-lasting. Loved it!",
    name: "Harshitha Tabeli",
    role: "Makeup client",
    rating: 5,
  },
  {
    text: "The saree draping session was truly wonderful and very informative. Your teaching style was clear, patient, and easy to follow, which made learning the art of saree draping an enjoyable experience.",
    name: "Sushmitha M",
    role: "Saree draping workshop",
    rating: 5,
  },
  {
    text: "She explains each and every step in detail until you understand it well. She is very polite and at the same time very professional. If you wish to learn any type of saree draping and makeover, I would highly recommend her to everyone.",
    name: "Ranjumanju Minchu",
    role: "Saree draping class",
    rating: 5,
  },
  {
    text: "I was really happy about your work. Makeup was long lasting and waterproof. I will definitely recommend my friends and family. I am one of your happy customers!",
    name: "Shruthi Suresh",
    role: "Makeup client",
    rating: 5,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title mt-3">What Our Clients Say</h2>
          <p className="mt-5 text-muted-foreground font-body text-sm flex items-center gap-2">
            <span className="flex gap-0.5">
              {new Array(5).fill(0).map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </span>
            Rated 4.9 from 21 reviews on Google
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-14 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
