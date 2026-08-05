"use client";

import React from "react";
import { Star } from "lucide-react";

export type Testimonial = {
  text: string;
  name: string;
  role: string;
  rating: number;
};

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <div
        className="flex flex-col gap-6 pb-6 animate-marquee-up hover:[animation-play-state:paused]"
        style={{ animationDuration: `${props.duration || 10}s` }}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role, rating }, i) => (
                <div
                  className="p-8 rounded-sm border border-border bg-background shadow-lg shadow-brown-dark/5 max-w-xs w-full"
                  key={i}
                >
                  <div className="flex gap-1" aria-label={`Rated ${rating} out of 5`}>
                    {new Array(rating).fill(0).map((_, s) => (
                      <Star key={s} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground font-body leading-relaxed">
                    {text}
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-brown-dark flex items-center justify-center font-display text-sm text-cream">
                      {initials(name)}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-display font-semibold tracking-tight leading-5 text-brown-dark">
                        {name}
                      </div>
                      <div className="leading-5 text-muted-foreground text-xs font-body mt-0.5">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </div>
    </div>
  );
};
