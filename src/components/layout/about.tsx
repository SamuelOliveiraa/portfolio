"use client";

import { FramerProvider } from "@/providers";
import { Text } from "../common";
import { AboutListItem } from "./components";
import { useAboutStacks } from "@/content";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  const stacks = useAboutStacks();
  return (
    <FramerProvider>
      <section className="border-y py-20 px-4 xl:px-0" id="about">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col md:justify-center gap-4">
            <Text size="textGeist" className="text-emerald-500 uppercase">
              {t("title_tag")}
            </Text>

            <Text size="titleMedium" className="max-w-3xl">
              <span className="text-zinc-950">{t("title")}</span>{" "}
              {t("highlight")}
            </Text>

            <Text size="textSmall" className="text-zinc-500 max-w-md">
              {t("description1")}
            </Text>

            <Text size="textSmall" className="text-zinc-500 max-w-md">
              {t("description2")}
            </Text>
          </div>

          <div className="flex flex-col gap-6 border md:border-0 md:border-l p-4 md:pl-8 md:pr-0 md:py-0">
            <Text size="textGeist" className="text-emerald-500 uppercase">
              {t("stacks_title")}
            </Text>

            {stacks.map((stack, index) => (
              <div className="flex flex-col gap-3" key={`${stack}-${index}`}>
                <Text size="textGeist" className="text-zinc-500 uppercase">
                  {stack.title}
                </Text>

                <ul className="flex flex-wrap gap-2">
                  {stack.stacks.map((item, index) => (
                    <AboutListItem key={`${stack.title}-${index}`}>
                      {item}
                    </AboutListItem>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FramerProvider>
  );
}
