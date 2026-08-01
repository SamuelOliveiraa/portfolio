"use client";

import { ButtonComponent, Text } from "@/components/common";
import { Footer, Header } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { useTranslations } from "next-intl";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("ErrorPage");

  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="flex flex-col flex-1">
          <div className="flex flex-col md:flex-row flex-1 min-h-full items-center justify-center gap-2 my-32">
            <div className="flex flex-col gap-6 max-w-md">
              <Text as="h2" size="titleMedium" className="text-zinc-950">
                {t("title")}
              </Text>
              <Text as="p" className="text-zinc-500">
                {t("message")}
              </Text>
              <div className="flex gap-2">
                <ButtonComponent className="w-fit" onClick={() => reset()}>
                  {t("button1")}
                </ButtonComponent>

                <ButtonComponent variant="outline" className="w-fit">
                  <Link href="/">{t("button2")}</Link>
                </ButtonComponent>
              </div>
            </div>

            <Image
              src="/internal-error-ilustration.svg"
              alt="Ilustration error 500"
              width={500}
              height={300}
              style={{ height: "auto" }}
            />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
