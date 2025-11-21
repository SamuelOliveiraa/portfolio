import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import ContactLinks from "@/components/ContactLinks";
import CopyButton from "@/components/CopyButton";
import Tag from "@/components/Tag";

export default function Contact() {
	const t = useTranslations("ContactSection");
	return (
		<section
			id="contact"
			className="flex bg-gray-100 justify-center items-center min-h-80 flex-col gap-5 text-center mt-20 py-12 sm:py-24 px-4 sm:px-20"
		>
			<Tag text={t("tagText")} />

			<p className="text-gray-600 max-w-xl w-full ">{t("description")}</p>

			<div className="flex items-center gap-2">
				<Mail className="text-gray-600" />
				<a
					className="text-gray-900 text-sm sm:text-xl md:text-3xl text-wrap"
					href={t("emailText")}
					target="_blank"
				>
					samuel.oliveira.developer@gmail.com
				</a>

				<CopyButton text="samuel.oliveira.developer@gmail.com" />
			</div>

			<div className="flex items-center gap-2">
				<Phone className="text-gray-600" />
				<a
					className="text-gray-900 text-sm sm:text-xl md:text-3xl text-balance"
					href={"tel:+5511968989860"}
				>
					{"+55 (11) 96898-9860"}
				</a>

				<CopyButton text="+55 (11) 96898-9860" />
			</div>

			<ContactLinks />
		</section>
	);
}
