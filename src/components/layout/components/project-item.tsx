import { Text } from "@/components/common";
import Image from "next/image";
import TagTech from "./tag-tech";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectItemProps {
  src: string;
  title: string;
  description: string;
  techs: string[];
  link: string;
}

export default function ProjectItem({
  src,
  title,
  description,
  techs,
  link
}: ProjectItemProps) {
  return (
    <div className="border">
      <div className="w-full group overflow-hidden">
        <Image
          className="w-full h-full object-fill group-hover:scale-105 transition-all duration-300"
          src={src}
          alt={`Image of project ${title}`}
          width={300}
          height={200}
        />
      </div>

      <div className="flex flex-col gap-4 p-6">
        <Text as="h2" size="titleSmall">
          {title}
        </Text>
        <Text size="textSmall" className="text-zinc-500">
          {description}
        </Text>
        <div className="flex items-center gap-2 flex-wrap">
          {techs.map(tech => (
            <TagTech key={tech}>{tech}</TagTech>
          ))}
        </div>

        <Text size="textSmall" className="text-emerald-500 w-fit mt-4 block">
          <Link href={link} className="flex items-center gap-2">
            Ver Projeto
            <ExternalLink className="size-4" />
          </Link>
        </Text>
      </div>
    </div>
  );
}
