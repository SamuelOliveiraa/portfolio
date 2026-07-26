"use client";

import { ButtonComponent, LinkItem, Logo } from "../common";
import { ThemeToggle } from "./components";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { SECTIONS_LINKS, WHATSAPP_LINK } from "@/mocks";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    fn();
    window.addEventListener("scroll", fn, { passive: true });

    // Fecha o menu ao clicar fora
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Fecha o menu ao rolar a página
    // const handleScroll = () => {
    //   setIsMenuOpen(false);
    // };

    document.addEventListener("mousedown", handleClickOutside);
    // window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", fn);
      window.removeEventListener("mousedown", handleClickOutside);
      // window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      ref={headerRef}
      className={twMerge(
        "w-full p-4 xl:px-0 sticky top-0 left-0 z-50 transition-all duration-300",
        scrolled && "bg-zinc-50/90 backdrop-blur-md border-b"
      )}
    >
      <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
        <Logo />

        <nav className="hidden md:block">
          <ul className="flex justify-between items-center gap-4 text-zinc-500 ">
            {SECTIONS_LINKS.filter((_, index) => index !== 0).map(
              ({ name, link }, index) => (
                <LinkItem key={index} link={link}>
                  {name}
                </LinkItem>
              )
            )}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <ButtonComponent className="w-fit">Fazer Orçamento</ButtonComponent>
          </Link>
        </div>

        <button
          className="block md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-50 border-y md:hidden p-4 flex flex-col gap-4">
          <nav>
            <ul className="flex flex-col gap-4 text-zinc-500">
              {SECTIONS_LINKS.filter((_, index) => index !== 0).map(
                ({ name, link }, index) => (
                  <LinkItem
                    key={index}
                    link={link}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {name}
                  </LinkItem>
                )
              )}
            </ul>
          </nav>
          <div>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="w-full"
            >
              <ButtonComponent>Fazer Orçamento</ButtonComponent>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
