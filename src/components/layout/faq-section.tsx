"use client";

import { FramerProvider } from "@/providers";
import { Text } from "@/components/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../ui/accordion";
import { useFaqItems } from "@/content";
import { useTranslations } from "next-intl";

export default function FaqSection() {
  const t = useTranslations("Faq");
  const items = useFaqItems();
  return (
    <FramerProvider>
      <section className="border-y py-20 px-4 xl:px-0" id="faq">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
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
          <Accordion defaultValue={["item-1"]}>
            {items.map(item => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border py-2 px-6"
              >
                <AccordionTrigger className="cursor-pointer">
                  {item.trigger}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-500 max-w-2xl">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </FramerProvider>
  );
}
