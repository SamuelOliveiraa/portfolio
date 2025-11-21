"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Button from "../Button";
import LanguageSwitch from "../LanguageSwitch";
import Logo from "../Logo";
import SwitchTheme from "../SwitchTheme";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function Header() {
	const t = useTranslations("Header");

	return (
		<header className="sticky w-full border-b border-transparent bg-gray max-md:border-gray-100 top-0 z-30 bg-gray/50 backdrop-blur-xl ">
			<div className="flex justify-between items-center max-w-7xl mx-auto p-4">
				<Logo />

				<div className="hidden sm:block">
					<div className="flex gap-6 items-center">
						<div className="flex items-center gap-3 text-gray-600 ">
							<Link
								href={"#about"}
								className="opacity-60 font-bold hover:opacity-100"
								aria-label="Link para seção Sobre | Link to section About"
							>
								{t("linkAbout")}
							</Link>
							<Link
								href={"#projects"}
								className="opacity-60 font-bold hover:opacity-100"
								aria-label="Link para seção Projetos | Link to section Projects"
							>
								{t("linkProjects")}
							</Link>
							<Link
								href={"#experiences"}
								className="opacity-60 font-bold hover:opacity-100"
								aria-label="Link para seção Experiencias | Link to section Experiences"
							>
								{t("linkExperience")}
							</Link>
							<Link
								href={"#contact"}
								className="opacity-60 font-bold hover:opacity-100"
								aria-label="Link para seção Contato | Link to section Contact"
							>
								{t("linkContact")}
							</Link>

							<LanguageSwitch />
						</div>

						<div className="flex gap-3 items-center justify-center">
							<SwitchTheme />
							<Button />
						</div>
					</div>
				</div>

				<div className="block sm:hidden bg-gray">
					<Sheet>
						<nav className="flex items-center gap-6">
							<SheetTrigger aria-label="Fechar menu suspenso | Close menu hamburguer">
								<Menu className="text-gray-600" size={28} />
							</SheetTrigger>
						</nav>

						<SheetContent className="w-[280px] flex flex-col sm:hidden sm:invisible bg-gray border-none text-gray-900 justify-center items-center py-4">
							<SheetTitle className="sr-only">Menu</SheetTitle>
							<header className="flex justify-between items-center w-full px-4 ">
								<Logo />
								<SheetClose asChild>
									<X />
								</SheetClose>
							</header>

							<div className="w-full flex flex-col h-full sm:hidden">
								<div className="transition-all duration-300 flex flex-col border-y border-y-gray-100 w-full my-4 gap-4 p-4">
									<SheetClose className="items-center text-md" asChild>
										<Link
											href={"#about"}
											className="opacity-60 font-bold hover:opacity-100"
											aria-label="Link para seção Sobre | Link to section About"
										>
											{t("linkAbout")}
										</Link>
									</SheetClose>

									<SheetClose className="items-center text-md" asChild>
										<Link
											href={"#projects"}
											className="opacity-60 font-bold hover:opacity-100"
											aria-label="Link para seção Projetos | Link to section Projects"
										>
											{t("linkProjects")}
										</Link>
									</SheetClose>

									<SheetClose className="items-center text-md" asChild>
										<Link
											href={"#experiences"}
											className="opacity-60 font-bold hover:opacity-100"
											aria-label="Link para seção Experiencias | Link to section Experiences"
										>
											{t("linkExperience")}
										</Link>
									</SheetClose>

									<SheetClose className="items-center text-md" asChild>
										<Link
											href={"#contact"}
											className="opacity-60 font-bold hover:opacity-100"
											aria-label="Link para seção Contato | Link to section Contact"
										>
											{t("linkContact")}
										</Link>
									</SheetClose>

									<SheetClose className="items-center text-xl" asChild>
										<LanguageSwitch />
									</SheetClose>
								</div>

								<div className="px-4">
									<SwitchTheme />
									<SheetClose asChild>
										<Button />
									</SheetClose>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
