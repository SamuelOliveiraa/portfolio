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
  link2: string;
}

export default function ProjectItem({
  src,
  title,
  description,
  techs,
  link,
  link2
}: ProjectItemProps) {
  const techsToShow = techs.slice(0, 6);
  return (
    <div className="border rounded-md">
      <div className="w-full relative aspect-video group overflow-hidden rounded-tl-md rounded-tr-md">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          <Image
            className="w-full scale-105 hover:scale-110 transition-all duration-300"
            src={src}
            alt={`Image of project ${title}`}
            width={300}
            height={200}
          />
        </Link>
      </div>

      <div className="flex flex-col gap-4 p-6">
        <Text as="h2" size="titleSmall">
          {title}
        </Text>
        <Text as="p" size="textSmall" className="text-zinc-500">
          {description}
        </Text>
        <div className="flex items-center gap-2 flex-wrap">
          {techsToShow.map((tech, index) => (
            <TagTech key={`item-${tech}-${index}`}>{tech}</TagTech>
          ))}
          {techs.length > 6 && (
            <TagTech>+ {techs.length - techsToShow.length}</TagTech>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Text
            asChild
            size="textSmall"
            className="text-emerald-500 w-fit mt-4 block"
          >
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Ver projeto
              <ExternalLink className="size-4" />
            </Link>
          </Text>

          <Text
            asChild
            size="textSmall"
            className="text-emerald-500 w-fit mt-4 block"
          >
            <Link
              href={link2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Github
              <ExternalLink className="size-4" />
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
}
