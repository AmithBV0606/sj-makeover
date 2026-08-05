import { MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./icons";

const ADDRESS =
  "3, Second Floor, Outer Ring Road, Dr Puneeth Rajkumar Rd, Sarakki Signal, JP Nagar 6th Phase, Bengaluru, Karnataka 560078";

// Exact place pin from the studio's Google Maps listing
// (https://maps.app.goo.gl/6icm6ngiV6cuejNS9).
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Srujana%20Jois%20Makeup%20Studio%20and%20Academy%2C%20JP%20Nagar%2C%20Bengaluru&ll=12.9064879,77.5741696&z=17&output=embed";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/makeupbysru/",
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/makeupbysru/",
    Icon: FacebookIcon,
  },
];

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Book Appointment", href: "#appointment" },
];

const Footer = () => {
  return (
    <footer className="bg-brown-dark pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-cream mb-4">
              <span className="italic">S</span>rujana Jois
            </h3>
            <p className="text-cream/50 font-body text-sm leading-relaxed mb-6">
              Experience the art of beauty transformation with our expert
              stylists and premium services tailored just for you.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:bg-olive hover:border-olive transition-all text-cream"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-display text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/50 hover:text-olive font-body text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream font-display text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-olive shrink-0 mt-1" />
                <span className="text-cream/50 font-body text-sm">
                  {ADDRESS}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-olive shrink-0" />
                <a
                  href="tel:+919986160243"
                  className="text-cream/50 hover:text-olive font-body text-sm transition-colors"
                >
                  +91 99861 60243
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-olive shrink-0" />
                <a
                  href="mailto:makeupbysru@gmail.com"
                  className="text-cream/50 hover:text-olive font-body text-sm transition-colors"
                >
                  makeupbysru@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location Map */}
          <div>
            <h4 className="text-cream font-display text-lg font-semibold mb-4">
              Location Map
            </h4>
            <iframe
              src={MAP_EMBED_URL}
              title="Srujana Jois Makeup Studio location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full h-56 border border-cream/20"
            />
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center">
          <p className="text-cream/40 font-body text-sm">
            &copy; 2026 Srujana Jois Makeup Studio &amp; Academy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
