"use client";

import { FramerProvider } from "@/providers";
import { Text } from "@/components/common";
import { TestimonialsItems } from "./components";
import { useTestimonialItems } from "@/content";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const items = useTestimonialItems();
  return (
    <FramerProvider>
      <section className="border-y py-20 px-4 xl:px-0" id="testimonials">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col md:justify-center gap-4">
            <Text
              as="h3"
              size="textGeist"
              className="text-emerald-500 uppercase"
            >
              {t("eyebrow")}
            </Text>
            <Text as="h2" size="titleMedium" className="max-w-3xl">
              <span className="text-zinc-950">{t("title")}</span>{" "}
              {t("highlight")}
            </Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {items.map((item, index) => (
              <TestimonialsItems key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </FramerProvider>
  );
}
