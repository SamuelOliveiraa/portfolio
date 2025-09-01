import HeaderSection from "@/components/HeaderSection";
import SkillCardIcon from "@/components/SkillCardIcon";
import { FaNode } from "react-icons/fa";
import {
  SiAndroidstudio,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

export default function Skills() {
  return (
    <section
      className="flex flex-col items-center justify-center max-w-6xl mx-auto gap-12 my-24 px-2"
      id="skills"
    >
      <HeaderSection
        title="Skills"
        description="The skills, tools and technologies I am really good at:"
      />

      <div className="flex flex-wrap gap-x-10 gap-y-6 md:gap-20 items-center justify-center">
        <SkillCardIcon
          Icon={SiHtml5}
          title="HTML5"
          className="text-orange-600 w-16 h-16"
        />

        <SkillCardIcon
          Icon={SiCss3}
          title="CSS3"
          className="text-blue-500 w-16 h-16"
        />

        <SkillCardIcon
          Icon={SiJavascript}
          title="JavaScript"
          className="text-yellow-400 w-16 h-16"
        />

        <SkillCardIcon
          Icon={SiTypescript}
          title="TypeScript"
          className="text-blue-600 w-16 h-16"
        />

        <SkillCardIcon
          Icon={SiReact}
          title="React"
          className="text-cyan-400 w-16 h-16"
        />

        <SkillCardIcon
          Icon={SiNextdotjs}
          title="Next.js"
          className="text-black dark:text-white w-16 h-16"
        />

        <SkillCardIcon
          Icon={SiTailwindcss}
          title="TailwindCSS"
          className="text-cyan-500 w-16 h-16"
        />

        <SkillCardIcon
          Icon={SiSqlite}
          title="SQLite"
          className="text-blue-400 w-16 h-16"
        />

        <SkillCardIcon
          Icon={FaNode}
          title="Node.js"
          className="text-green-600 w-16 h-16"
        />

        <SkillCardIcon
          Icon={SiExpress}
          title="Express"
          className="text-gray-700 dark:text-gray-200 w-16 h-16"
        />

        <SkillCardIcon
          Icon={SiGit}
          title="Git"
          className="text-orange-500 w-16 h-16"
        />

        <SkillCardIcon
          Icon={SiGithub}
          title="GitHub"
          className="text-black dark:text-white w-16 h-16"
        />

        <SkillCardIcon
          Icon={SiPostman}
          title="Postman"
          className="text-orange-500 w-16 h-16"
        />

        <SkillCardIcon
          Icon={SiAndroidstudio}
          title="Android Studio"
          className="text-green-600 w-16 h-16"
        />
      </div>
    </section>
  );
}
