import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Tag";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  invert?: boolean;
};

export default function ProjectCard({
  image,
  title,
  description,
  link,
  tags,
  invert
}: ProjectCardProps) {
  return (
    <div className="mx-auto">
      <div
        className={`max-w-6xl flex flex-col md:flex-row ${
          invert ? "md:flex-row-reverse" : ""
        }  mx-4 md:mx-6 `}
      >
        <div
          className={`w-full bg-gray-200
         p-8 lg:p-12 rounded-t-md md:rounded-t-none ${
           invert
             ? "md:rounded-tr-md md:rounded-br-md"
             : "md:rounded-tl-md md:rounded-bl-md"
         } flex items-center justify-center text-center`}
        >
          <Link href={link} target="_blank">
            <Image
              src={image}
              alt={title}
              className="w-full object-cover rounded-md transition-all duration-500 hover:scale-105 "
              width={500}
              height={500}
            />
          </Link>
        </div>

        <div
          className={`w-full bg-gray-100
        p-8 lg:p-12 flex flex-col gap-4 rounded-b-md md:rounded-b-none ${
          invert
            ? "md:rounded-tl-md md:rounded-bl-md"
            : "md:rounded-tr-md md:rounded-br-md"
        } text-gray-900 justify-center transition-all duration-200`}
        >
          <h2>{title}</h2>
          <p>{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Tag text={tag} key={tag} />
            ))}
          </div>
          <Link
            href={link}
            target="_blank"
            className="p-2 hover:bg-gray-200 w-fit rounded-md transition-all duration-200"
          >
            <ExternalLink />
          </Link>
        </div>
      </div>
    </div>
  );
}
