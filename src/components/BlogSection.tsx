"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    img: "/blog-1.jpg",
    title: "Chic & Glam: Your Daily Dose of Beauty Inspiration",
    date: "Mar 15, 2026",
  },
  {
    img: "/blog-2.jpg",
    title: "Top 10 Skincare Routines for Radiant Skin This Season",
    date: "Mar 10, 2026",
  },
  {
    img: "/blog-3.jpg",
    title: "Bridal Beauty: Timeless Looks for Your Special Day",
    date: "Mar 5, 2026",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="section-subtitle">Article & News</span>
            <h2 className="section-title mt-3">Latest News</h2>
          </div>
          <a href="#" className="btn-outline">
            More Articles
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-sm mb-5 relative h-56">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-muted-foreground font-body text-xs uppercase tracking-wider mb-2">
                {post.date}
              </p>
              <h3 className="font-display text-xl font-semibold text-brown-dark group-hover:text-olive transition-colors leading-snug">
                {post.title}
              </h3>
              <span className="inline-flex items-center gap-2 text-olive text-sm font-body font-medium mt-3 group-hover:gap-3 transition-all">
                Read More <ArrowRight size={14} />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
