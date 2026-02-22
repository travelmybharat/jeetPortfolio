"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";

const services = [
  "Web Design",
  "Web Development",
  "E-commerce",
  "SEO Optimization",
  "UI/UX Design",
  "Other",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "travelmybharat2024@gmail.com",
    href: "mailto:travelmybharat2024@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9779766740",
    href: "tel:+919779766740",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dehradun, India",
    href: "https://maps.google.com/?q=Dehradun,India",
  },
];

export default function ContactSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `*New Project Inquiry*`,
      `*Name:* ${formState.name}`,
      `*Email:* ${formState.email}`,
      `*Phone:* ${formState.phone}`,
      formState.company ? `*Company:* ${formState.company}` : "",
      selectedService ? `*Service:* ${selectedService}` : "",
      formState.message ? `*Details:* ${formState.message}` : "",
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/919779766740?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 scroll-mt-20">
      <div className="container-custom">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind? Share the details and we'll get back to you within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info — Left Side */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:border-accent-500/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 group-hover:bg-accent-500/20 transition-colors">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider font-medium">
                      {item.label}
                    </p>
                    <p className="text-foreground font-medium mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Schedule Call CTA */}
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-accent-500/20 bg-gradient-to-br from-accent-900/20 via-card to-accent-800/10 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-[60px]" />
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-2 relative z-10">
                Let&apos;s Find a Time to{" "}
                <span className="gradient-text">Connect</span>
              </h3>
              <p className="text-sm text-muted mb-4 relative z-10">
                Book a free 30-minute consultation to discuss your project.
              </p>
              <GradientButton href="tel:+919779766740">
                Book a Call <ArrowRight className="h-4 w-4" />
              </GradientButton>
            </motion.div>
          </motion.div>

          {/* Contact Form — Right Side */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted block mb-2">
                  Full Name <span className="text-accent-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500/50 transition-all duration-200"
                />
              </div>
              <div>
                <label className="text-sm text-muted block mb-2">
                  Email Address <span className="text-accent-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500/50 transition-all duration-200"
                />
              </div>
            </div>

            {/* Phone & Company Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted block mb-2">
                  Phone Number <span className="text-accent-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500/50 transition-all duration-200"
                />
              </div>
              <div>
                <label className="text-sm text-muted block mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formState.company}
                  onChange={(e) =>
                    setFormState({ ...formState, company: e.target.value })
                  }
                  placeholder="Your Company"
                  className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500/50 transition-all duration-200"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="text-sm text-muted block mb-3">
                What service are you interested in?
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() =>
                      setSelectedService(
                        selectedService === service ? null : service
                      )
                    }
                    className={`rounded-full px-4 py-2.5 sm:py-2 text-sm font-medium border transition-all duration-200 cursor-pointer ${
                      selectedService === service
                        ? "border-accent-500 bg-accent-500/15 text-accent-300"
                        : "border-border bg-card text-muted hover:border-accent-500/50 hover:text-foreground"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-muted block mb-2">
                Project Details
              </label>
              <textarea
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                placeholder="Tell us about your project, goals, and timeline..."
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500/50 transition-all duration-200 resize-none"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 hover:bg-accent-600 px-8 py-3.5 text-white font-semibold transition-colors duration-200"
            >
              Send Message
              <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
