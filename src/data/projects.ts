import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Travel My Bharat",
    description:
      "A full-featured travel agency platform with curated tour packages, Char Dham Yatra bookings, helicopter reservations, hotel listings, and taxi services across India.",
    category: "websites",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    image: "/images/projects/travelmybharat.png",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    link: "https://www.travelmybharat.com/",
  },
  {
    id: "2",
    title: "The Ganga Story",
    description:
      "Premium resort website for a luxury riverside property in Rishikesh — featuring room bookings, Ayurvedic wellness packages, adventure activities, and event hosting.",
    category: "websites",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    image: "/images/projects/thegangastory.png",
    tags: ["Web Design", "Booking System", "UI/UX"],
    link: "https://www.thegangastory.com/",
  },
  {
    id: "3",
    title: "Tour My Uttarakhand",
    description:
      "B2B travel and DMC platform offering pilgrimage packages, adventure tours, wildlife safaris, and customized group tours with end-to-end logistics across Uttarakhand.",
    category: "websites",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    image: "/images/projects/tourmyuttarakhand.png",
    tags: ["Next.js", "CMS", "SEO"],
    link: "https://www.tourmyuttarakhand.in/",
  },
];

export const categories = [
  { label: "All", value: "all" },
  { label: "Websites", value: "websites" },
];
