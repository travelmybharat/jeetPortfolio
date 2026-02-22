"use client";
import { Github, Linkedin, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/data/navigation";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/919779766740", label: "WhatsApp" },
];

const servicesList = [
  "Web Design",
  "Web Development",
  "E-commerce",
  "SEO Optimization",
  "UI/UX Design",
  "Maintenance",
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-accent-500 flex items-center justify-center">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-white">
                  P
                </span>
              </div>
              <span className="font-[family-name:var(--font-display)] text-lg font-bold">
                Pixelcraft
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              A Dehradun-based web development agency building websites
              and web apps that look great and actually convert.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-12 w-12 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-card border border-border text-muted hover:text-accent-400 hover:border-accent-500/50 transition-all duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] font-semibold mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {servicesList.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted hover:text-foreground transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] font-semibold mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted">
                <Mail size={16} className="text-accent-500 shrink-0" />
                <a href="mailto:travelmybharat2024@gmail.com" className="hover:text-foreground transition-colors duration-200">
                  travelmybharat2024@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <Phone size={16} className="text-accent-500 shrink-0" />
                <a href="tel:+919779766740" className="hover:text-foreground transition-colors duration-200">
                  +91 9779766740
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted">
                <MapPin size={16} className="text-accent-500 shrink-0 mt-0.5" />
                Dehradun, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Pixelcraft Studio. All rights
            reserved.
          </p>
          <p className="text-sm text-muted">
            From pixels to performance
          </p>
        </div>
      </div>
    </footer>
  );
}
