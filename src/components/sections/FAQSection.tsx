"use client";
import { useState } from "react";
import { faqItems } from "@/data/faq";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQItem from "@/components/ui/FAQItem";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <SectionWrapper id="faq">
      <div className="container-custom">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with us."
        />

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
