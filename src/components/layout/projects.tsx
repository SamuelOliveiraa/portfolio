"use client";

import { FramerProvider } from "@/providers";
import { Text } from "../common";
import ProjectItem from "./components/project-item";
import { useTranslations } from "next-intl";
import { useProjectsItems } from "@/content";

export default function Projects() {
  const t = useTranslations("Projects");
  const items = useProjectsItems();
  return (
    <FramerProvider>
      <section className="border-y py-20 px-4 xl:px-0" id="services">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {items.map((item, index) => (
              <ProjectItem
                key={index}
                title={item.title}
                description={item.description}
                link={item.link}
                techs={item.techs}
                src={item.src}
              />
            ))}
          </div>
        </div>
      </section>
    </FramerProvider>
  );
}
