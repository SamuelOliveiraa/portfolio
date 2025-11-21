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
	inProgress?: boolean;
};

export default function ProjectCard({
	image,
	title,
	description,
	link,
	tags,
	invert,
	inProgress,
}: ProjectCardProps) {
	return (
		<div className="mx-auto relative">
			<div
				className={`group relative max-w-6xl flex flex-col md:flex-row ${
					invert ? "md:flex-row-reverse" : ""
				}  mx-4 md:mx-6 `}
			>
				<div
					className={`w-full bg-gray-200
         p-8 lg:p-12 rounded-t-md md:rounded-t-none ${
						invert ? "md:rounded-tr-md md:rounded-br-md" : "md:rounded-tl-md md:rounded-bl-md"
					} flex items-center justify-center text-center`}
				>
					<Link
						href={link}
						target="_blank"
						aria-label={`Link para o projeto ${title} | Link to project ${title}`}
					>
						<Image
							src={image}
							alt={title}
							className="w-full object-cover rounded-md transition-all duration-500 hover:scale-105 "
							width={500}
							height={500}
							loading="lazy"
						/>
					</Link>
				</div>

				<div
					className={`w-full bg-gray-100
        p-8 lg:p-12 flex flex-col gap-4 rounded-b-md md:rounded-b-none ${
					invert ? "md:rounded-tl-md md:rounded-bl-md" : "md:rounded-tr-md md:rounded-br-md"
				} text-gray-900 justify-center transition-all duration-200`}
				>
					<h2>{title}</h2>
					<p>{description}</p>

					<div className="flex flex-wrap gap-2">
						{tags.map((tag) => (
							<Tag text={tag} key={tag} />
						))}
					</div>
					<Link
						href={link}
						target="_blank"
						className="p-2 hover:bg-gray-200 w-fit rounded-md transition-all duration-200"
						aria-label={`Link para o projeto ${title} | Link to project ${title}`}
					>
						<ExternalLink />
					</Link>
				</div>
				{inProgress && (
					<Link
						href={link}
						target="_blank"
						aria-label={`Link para o projeto ${title} | Link to project ${title}`}
						className="opacity-0 invisible group-hover:opacity-100 group-hover:visible flex flex-col items-center justify-center w-full h-full absolute top-0 backdrop-blur-md bg-white/10 rounded-md transition-all duration-200 cursor-pointer"
					>
						<h2 className="text-white text-3xl">Projeto em desenvolvimento</h2>

						<p className="text-white/70 text-sm mt-2">
							Este projeto ainda está em fase de desenvolvimento. Algumas funcionalidades ainda
							estão sendo finalizadas.
						</p>
					</Link>
				)}
			</div>
		</div>
	);
}
