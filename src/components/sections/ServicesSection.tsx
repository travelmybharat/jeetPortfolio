"use client";
import { services } from "@/data/services";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

export default function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <div className="container-custom">
        <SectionHeading
          title="What We Do"
          subtitle="Design, development, and growth — everything your brand needs to dominate online, under one roof."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
