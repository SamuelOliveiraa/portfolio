import ThemeProvider from "@/components/ThemeProvider";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "./globals.css";

import type { LayoutProps } from "../../../.next/types/app/[locale]/layout";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const NAME = "Samuel Oliveira";
const SITE_URL = "https://meuportfolio.com";
const DEFAULT_IMAGE = `/og-image.png`; // caminho da imagem de preview

export async function generateMetadata({ params }: LayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return { title: "Not Found" };
  }

  return {
    title: `${NAME} | Portfolio`,
    description:
      locale === "pt"
        ? `Bem-vindo ao portfolio de ${NAME}. Confira meus projetos e experiências.`
        : `Welcome to ${NAME}'s portfolio. Check out my projects and experiences.`,
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: `${NAME} | Portfolio`,
      description:
        locale === "pt"
          ? `Bem-vindo ao portfolio de ${NAME}. Confira meus projetos e experiências.`
          : `Welcome to ${NAME}'s portfolio. Check out my projects and experiences.`,
      url: SITE_URL,
      siteName: `${NAME} Portfolio`,
      locale,
      type: "website",
      images: [
        {
          url: DEFAULT_IMAGE,
          width: 1200,
          height: 630,
          alt: `${NAME} Portfolio Preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${NAME} | Portfolio`,
      description:
        locale === "pt"
          ? `Bem-vindo ao portfolio de ${NAME}. Confira meus projetos e experiências.`
          : `Welcome to ${NAME}'s portfolio. Check out my projects and experiences.`,
      images: [DEFAULT_IMAGE]
    }
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="pt" className={inter.className} suppressHydrationWarning>
      <head>
        <meta
          name="description"
          content="Bem-vindo ao portfolio de Samuel Oliveira. Confira meus projetos e experiências."
        />
        <script dangerouslySetInnerHTML={{ __html: `...` }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          try {
            const theme = localStorage.getItem('theme');
            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
            }
          } catch (e) {}
        `,
          }}
        />
      </head>
      <body className="bg-gray scroll-smooth">
        <NextIntlClientProvider locale={locale}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
