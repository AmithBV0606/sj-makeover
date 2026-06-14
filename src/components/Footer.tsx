import { MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "./icons";

const Footer = () => {
  return (
    <footer className="bg-brown-dark pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-cream mb-4">
              <span className="italic">F</span>abulux
            </h3>
            <p className="text-cream/50 font-body text-sm leading-relaxed mb-6">
              Premium makeup and personal styling services crafted to enhance
              your natural beauty.
            </p>
            <div className="flex gap-3">
              {[InstagramIcon, FacebookIcon, TwitterIcon].map((Icon, i) => (
                <span
                  key={i}
                  className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center cursor-pointer hover:bg-olive hover:border-olive transition-all text-cream"
                >
                  <Icon />
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-display text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Treatments", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-cream/50 hover:text-olive font-body text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-cream font-display text-lg font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Cinematic Makeup",
                "Fashion Makeup",
                "Bridal Makeup",
                "Hair Styling",
                "Facial & Massage",
              ].map((s) => (
                <li key={s}>
                  <span className="text-cream/50 font-body text-sm">{s}</span>
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
                  123 Beauty Street, New York, NY 10001
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-olive shrink-0" />
                <span className="text-cream/50 font-body text-sm">
                  +123 456 789
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-olive shrink-0" />
                <span className="text-cream/50 font-body text-sm">
                  info@fabulux.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center">
          <p className="text-cream/40 font-body text-sm">
            &copy; 2026 Fabulux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
