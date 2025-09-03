import HeaderSection from "@/components/HeaderSection";
import ProjectCard from "@/components/ProjectCard";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("ProjectsSection");
  return (
    <section className="flex flex-col gap-6 md:gap-12" id="projects">
      <HeaderSection title={t("tagText")} description={t("title")} />

      <ProjectCard
        tags={t("project1.tags").split("|")}
        title={t("project1.title")}
        image={t("project1.image")}
        link={t("project1.link")}
        description={t("project1.description")}
      />

      <ProjectCard
        tags={t("project2.tags").split("|")}
        title={t("project2.title")}
        image={t("project2.image")}
        link={t("project2.link")}
        description={t("project2.description")}
        invert
      />
    </section>
  );
}
