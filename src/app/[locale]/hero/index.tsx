import { MapPin } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ContactLinks from "@/components/ContactLinks";

export default function HeroSection() {
	const t = useTranslations("HeroSection");
	return (
		<section className="w-full flex items-center justify-center">
			<div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row px-4 py-16 md:py-24 relative gap-10 md:gap-20 items-center justify-center">
				<div className="max-w-3xl text-gray-900 md:flex-1">
					<div className="flex flex-col gap-4">
						<h1 className="font-bold text-4xl ">{t("title")}</h1>
						<p>
							{t("intro")} <strong> {t("technologies")}</strong>
							{t("summary")}
						</p>
					</div>

					<div className="flex flex-col gap-2 my-8">
						<div className="flex  items-center gap-3">
							<MapPin />
							Espirito Santo, Brasil
						</div>

						<div className="flex items-center gap-3">
							<div className="flex relative h-6 w-6 items-center justify-center">
								<span className="absolute inline-flex h-1/2 w-1/2 animate-ping rounded-full duration-1000 bg-emerald-400 opacity-75"></span>
								<span className="rounded-full w-2 h-2 bg-green-500"></span>
							</div>

							<span>{t("availability")}</span>
						</div>
					</div>

					<div className="w-fit">
						<ContactLinks text />
					</div>
				</div>

				<div className="relative flex items-center ">
					<div className="absolute w-full -inset-1 -translate-x-2 translate-y-3 bg-gray-300 md:-inset-2 md:-translate-x-3 md:translate-y-4 " />

					<Image
						className=" relative"
						src={"/me.jpg"}
						alt="A photo about me"
						width={300}
						height={300}
						priority={true}
					/>
				</div>
			</div>
		</section>
	);
}
