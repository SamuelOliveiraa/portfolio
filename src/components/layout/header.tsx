"use client";

import ButtonComponent from "../common/button-component";
import { ThemeToggle } from "../common/theme-toggle";
import { Menu } from "lucide-react";
import { LinkItem } from "../common/link-item";
import Logo from "../common/logo";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const SECTIONS_LINKS = [
  { name: "Projetos", link: "projects" },
  { name: "Serviços", link: "services" },
  { name: "Contato", link: "contact" },
  { name: "Sobre", link: "about" },
  { name: "FAQ", link: "faq" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      id="header"
      className={twMerge(
        "w-full p-4 xl:px-0 sticky top-0 left-0 z-50 transition-all duration-300",
        scrolled && "bg-zinc-50/90 backdrop-blur-md border-b"
      )}
    >
      <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
        <Logo />

        <nav className="hidden md:block">
          <ul className="flex justify-between items-center gap-4 text-zinc-500 ">
            {SECTIONS_LINKS.map(({ name, link }, index) => (
              <LinkItem key={index} link={link}>
                {name}
              </LinkItem>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <ButtonComponent className="w-fit">Fazer Orçamento</ButtonComponent>
        </div>

        <div className="block md:hidden">
          <Menu />
        </div>
      </div>
    </header>
  );
}
