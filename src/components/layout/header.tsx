"use client";

import { ButtonComponent, LinkItem, Logo } from "../common";
import { ThemeToggle } from "./components";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import { SECTIONS_LINKS, WHATSAPP_LINK } from "@/constants";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import LanguageToggle from "./components/language-toggle";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const t = useTranslations("Header");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    fn();
    window.addEventListener("scroll", fn, { passive: true });

    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", fn);
      window.removeEventListener("mousedown", handleClickOutside);
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
              ({ link }, index) => (
                <LinkItem key={index} link={link}>
                  {t(link)}
                </LinkItem>
              )
            )}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <ButtonComponent className="w-fit">{t("budget")}</ButtonComponent>
          </Link>
        </div>

        <div className="block md:hidden p-2" aria-label="Toggle menu">
          <Hamburger
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            size={24}
            duration={0.3}
            rounded
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-50 border-y md:hidden p-4 flex flex-col gap-4">
          <nav>
            <ul className="flex flex-col gap-4 text-zinc-500">
              {SECTIONS_LINKS.filter((_, index) => index !== 0).map(
                ({ link }, index) => (
                  <LinkItem
                    key={index}
                    link={link}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(link)}
                  </LinkItem>
                )
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageToggle />

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
              <ButtonComponent>{t("budget")}</ButtonComponent>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
