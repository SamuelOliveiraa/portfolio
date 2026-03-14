import { useTranslations } from "next-intl";
import HeaderSection from "@/components/HeaderSection";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const t = useTranslations("ProjectsSection");
  return (
    <section className="flex flex-col gap-6 md:gap-12" id="projects">
      <HeaderSection title={t("tagText")} description={t("title")} />

      <ProjectCard
        tags={t("project1.tags").split("|")}
        title={t("project1.title")}
        image={t("project1.image")}
        project_link={t("project1.project_link")}
        github_link={t("project1.github_link")}
        description={t("project1.description")}
      />

      <ProjectCard
        tags={t("project2.tags").split("|")}
        title={t("project2.title")}
        image={t("project2.image")}
        project_link={t("project2.project_link")}
        github_link={t("project2.github_link")}
        description={t("project2.description")}
        invert
      />

      <ProjectCard
        tags={t("project3.tags").split("|")}
        title={t("project3.title")}
        image={t("project3.image")}
        project_link={t("project3.project_link")}
        github_link={t("project3.github_link")}
        description={t("project3.description")}
      />

      <ProjectCard
        tags={t("project4.tags").split("|")}
        title={t("project4.title")}
        image={t("project4.image")}
        project_link={t("project4.project_link")}
        github_link={t("project4.github_link")}
        description={t("project4.description")}
        invert
      />

      <ProjectCard
        tags={t("project5.tags").split("|")}
        title={t("project5.title")}
        image={t("project5.image")}
        project_link={t("project5.project_link")}
        github_link={t("project5.github_link")}
        description={t("project5.description")}
      />
    </section>
  );
}
