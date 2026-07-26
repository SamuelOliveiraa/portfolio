"use client";

import { useTranslations } from "next-intl";
import type { TestimonialsItemProps } from "@/components/layout/components/testimonials-items";

export function useTestimonialItems() {
  const t = useTranslations("Testimonials");
  return t.raw("items") as TestimonialsItemProps[];
}
