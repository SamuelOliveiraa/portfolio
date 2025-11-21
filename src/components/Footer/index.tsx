import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
	const t = useTranslations("Footer");

	return (
		<footer className="px-2 py-5 w-full flex justify-center items-center text-gray-600 text-center gap-2 text-xs sm:text-sm">
			<p>
				<Link
					href={"https://github.com/shahsagarm"}
					className="underline hover:opacity-70"
					target="_blank"
					aria-label="Link para o Github do Shah Sagarm | Link to Shah Sagarm´s Github"
				>
					{t("designedBy")}
				</Link>{" "}
				{t("designedByName")}
				<Link
					href={"https://github.com/samueloliveiraa"}
					className="underline hover:opacity-70"
					target="_blank"
					aria-label="Link para o meu Github | Link to my Github"
				>
					{t("codedBy")}
				</Link>
				{t("codedByName")}
			</p>
		</footer>
	);
}
