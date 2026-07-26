"use client";

import { Text, ServiceItem } from "@/components/common";
import { FramerProvider } from "@/providers";
import { useServicesItems } from "@/content";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");
  const items = useServicesItems();
  return (
    <FramerProvider>
      <section className="border-y py-20 px-4 xl:px-0" id="services">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Text size="textGeist" className="text-emerald-500 uppercase">
              {t("eyebrow")}
            </Text>
            <Text size="titleMedium" className="max-w-3xl">
              <span className="text-zinc-950">{t("title")}</span>{" "}
              {t("highlight")}
            </Text>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, index) => (
              <ServiceItem
                key={index}
                Icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </FramerProvider>
  );
}
