"use client";

import { COMMITMENT_ITEMS } from "@/constants";
import { Text, ServiceItem } from "../common";
import { FramerProvider } from "@/providers";
import { useTranslations } from "next-intl";

export default function CommitmentSection() {
  const t = useTranslations("Commitment");
  const items = [
    {
      icon: COMMITMENT_ITEMS[0].icon,
      title: t("items.speed.title"),
      description: t("items.speed.description")
    },
    {
      icon: COMMITMENT_ITEMS[1].icon,
      title: t("items.support.title"),
      description: t("items.support.description")
    },
    {
      icon: COMMITMENT_ITEMS[2].icon,
      title: t("items.scalable.title"),
      description: t("items.scalable.description")
    }
  ];

  return (
    <FramerProvider>
      <section className="border-y py-20 px-4 xl:px-0" id="commitment">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Text
              as="h2"
              size="textGeist"
              className="text-emerald-500 uppercase"
            >
              {t("title")}
            </Text>

            <Text size="titleMedium" className="max-w-3xl">
              <span className="text-zinc-950">{t("main_title")}</span>{" "}
              {t("main_title_highlight")}.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
              <ServiceItem
                key={index}
                Icon={item.icon}
                title={item.title}
                description={item.description}
                className={
                  index === 2
                    ? "sm:col-span-2 sm:max-w-86 md:max-w-121 sm:mx-auto lg:col-auto lg:max-w-full lg:mx-0"
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>
    </FramerProvider>
  );
}
