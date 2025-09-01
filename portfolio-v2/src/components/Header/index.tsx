"use client";

import { Menu, Sun, X } from "lucide-react";
import Link from "next/link";
import Button from "../Button";
import Logo from "../Logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "../ui/sheet";

export default function Header() {
  function toggleDarkMode() {
    document.querySelector("html")?.classList.toggle("dark");
  }

  return (
    <header className="sticky w-full border-b border-transparent bg-gray max-md:border-gray-100 top-0 z-30 bg-gray/50 backdrop-blur-xl ">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <Logo />

        <div className="hidden sm:block">
          <div className="flex gap-6 items-center">
            <div className="flex gap-3 text-gray-600 ">
              <Link
                href={"#about"}
                className="opacity-60 font-bold hover:opacity-100"
              >
                Sobre
              </Link>
              <Link
                href={"#projects"}
                className="opacity-60 font-bold hover:opacity-100"
              >
                Projetos
              </Link>
              <Link
                href={"#experience"}
                className="opacity-60 font-bold hover:opacity-100"
              >
                Experiências
              </Link>
              <Link
                href={"#contact"}
                className="opacity-60 font-bold hover:opacity-100"
              >
                Contato
              </Link>
            </div>
            <div className="flex gap-3 items-center">
              <div
                className="p-2 transition-colors duration-300 rounded-md ease-in-out hover:cursor-pointer hover:bg-gray-100"
                onClick={toggleDarkMode}
              >
                <Sun className="text-gray-600" />
              </div>
              <Button />
            </div>
          </div>
        </div>

        <div className="block sm:hidden bg-gray">
          <Sheet>
            <nav className="flex items-center gap-6">
              <SheetTrigger>
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
                    >
                      Sobre
                    </Link>
                  </SheetClose>

                  <SheetClose className="items-center text-md" asChild>
                    <Link
                      href={"#projects"}
                      className="opacity-60 font-bold hover:opacity-100"
                    >
                      Projetos
                    </Link>
                  </SheetClose>

                  <SheetClose className="items-center text-md" asChild>
                    <Link
                      href={"#experience"}
                      className="opacity-60 font-bold hover:opacity-100"
                    >
                      Experiências
                    </Link>
                  </SheetClose>

                  <SheetClose className="items-center text-md" asChild>
                    <Link
                      href={"#contact"}
                      className="opacity-60 font-bold hover:opacity-100"
                    >
                      Contato
                    </Link>
                  </SheetClose>

                  {/* <SheetClose className="items-center text-xl" asChild>
                  <LanguageSwitch />
                </SheetClose> */}
                </div>

                <div className="px-4">
                  <div
                    className="mb-4 transition-colors duration-300 rounded-md ease-in-out flex justify-between items-center"
                    onClick={toggleDarkMode}
                  >
                    <span>Mudar Tema</span>
                    <Sun className="text-gray-600" />
                  </div>
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
