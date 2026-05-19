// ============================================================
// EDIT THIS FILE TO SWAP MOCKUPS
// Replace the `image` import or path to update what's shown.
// To add a new project: copy an entry and add to the array.
// ============================================================
import mockupHero from "@/assets/mockup-hero.jpg";
import mockupFitness from "@/assets/mockup-fitness.jpg";
import mockupFood from "@/assets/mockup-food.jpg";
import mockupEcommerce from "@/assets/mockup-ecommerce.jpg";

export type Mockup = {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
};

export const heroMockup = {
  image: mockupHero,
  alt: "ADNC Group flagship mobile application mockup",
};

export const mockups: Mockup[] = [
  {
    id: "fitness",
    title: "Pulse — Adaptive Fitness Coaching",
    client: "Confidential / Sports tech",
    category: "iOS · Android · Wearables",
    year: "2025",
    description:
      "A coaching platform that adapts workouts in real time using on-device ML and HealthKit/Health Connect signals.",
    image: mockupFitness,
    tags: ["React Native", "CoreML", "HealthKit"],
  },
  {
    id: "food",
    title: "Tablée — Hyperlocal Food Delivery",
    client: "Tablée",
    category: "Cross-platform mobile",
    year: "2024",
    description:
      "Sub-second map clustering, offline-first ordering, and a driver dispatch engine built for dense urban areas.",
    image: mockupFood,
    tags: ["Flutter", "Mapbox", "Realtime"],
  },
  {
    id: "ecommerce",
    title: "Maison Noir — Luxury Commerce",
    client: "Maison Noir",
    category: "Native iOS",
    year: "2024",
    description:
      "A high-end commerce experience with cinematic product reveals, Apple Pay, and a custom checkout funnel.",
    image: mockupEcommerce,
    tags: ["Swift", "SwiftUI", "Stripe"],
  },
];
