import { GithubIcon, LinkedinIcon, Send } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

type ContactLinksProps = {
	text?: boolean;
};

export default function ContactLinks({ text }: ContactLinksProps) {
	const t = useTranslations("ContactLinks");
	return (
		<div className="text-gray-600 flex flex-col gap-3 text-xs">
			{text ?? <p>{t("text")}</p>}
			<div className="flex items-center justify-center ">
				<Link
					href={"https://github.com/samueloliveiraa"}
					target="_blank"
					className="p-2 rounded-md hover:bg-gray-200 transition-all duration-200 hover:scale-110"
					aria-label="Link para o meu Github | Link to my Github"
				>
					<GithubIcon />
				</Link>
				<Link
					href={"https://www.linkedin.com/in/samuel-oliveiraa-de-araujo/"}
					target="_blank"
					className="p-2 rounded-md hover:bg-gray-200 transition-all duration-200 hover:scale-110"
					aria-label="Link para o meu Linkedin | Link to my Linkedin"
				>
					<LinkedinIcon />
				</Link>
				<Link
					href={"https://t.me/Samuka_oliveira0"}
					target="_blank"
					className="p-2 rounded-md hover:bg-gray-200 transition-all duration-200 hover:scale-110"
					aria-label="Link para me enviar um email | Link to send me an email"
				>
					<Send />
				</Link>
			</div>
		</div>
	);
}
