import HeaderSection from "@/components/HeaderSection";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="flex flex-col gap-6 md:gap-12" id="projects">
      <HeaderSection
        title="Projetos"
        description="Alguns dos projetos notáveis ​​que construí:"
      />

      <ProjectCard
        tags={[
          "React.Js",
          "Next.Js",
          "TypeScript",
          "Tailwind CSS",
          "Contentlayer",
          "Shadcn/UI",
          "Next-Intl"
        ]}
        title="Site.set"
        image="/site-blog.png"
        link="https://site-blog-rho.vercel.app/pt"
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut mollitia aliquam. Sequi,"
        }
      />

      <ProjectCard
        tags={[
          "React.Js",
          "Next.Js",
          "TypeScript",
          "Tailwind CSS",
          "Contentlayer",
          "Shadcn/UI",
          "Next-Intl"
        ]}
        title="Site.set"
        image="/site-blog.png"
        link="https://site-blog-rho.vercel.app/pt"
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut mollitia aliquam. Sequi,"
        }
        invert
      />
      <ProjectCard
        tags={[
          "React.Js",
          "Next.Js",
          "TypeScript",
          "Tailwind CSS",
          "Contentlayer",
          "Shadcn/UI",
          "Next-Intl"
        ]}
        title="Site.set"
        image="/site-blog.png"
        link="https://site-blog-rho.vercel.app/pt"
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut mollitia aliquam. Sequi,"
        }
      />
    </section>
  );
}
