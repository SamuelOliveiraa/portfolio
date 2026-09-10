import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Inter, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { CircleCheckBig, CircleX } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { GoogleAnalytics } from "@next/third-parties/google";

const geist_mono = Geist_Mono({
  subsets: ["latin"]
});

const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://samuel-oliveira.com"
  ),
  title: {
    default: "Samuel Oliveira | Desenvolvedor Web Freelancer",
    template: "%s | Samuel Oliveira"
  },
  description:
    "Desenvolvedor freelancer especializado em sites modernos, landing pages e soluções digitais sob medida para empresas e empreendedores.",
  keywords: [
    "Desenvolvedor Freelancer",
    "Freelancer Web",
    "Criação de Sites",
    "Landing Pages",
    "Sites Institucionais",
    "E-commerce",
    "Lojas Virtuais",
    "Sites Responsivos",
    "Aplicações Web",
    "Web Apps",
    "Consultoria Web",
    "Sites para Empresas",
    "Sites para Empreendedores",
    "Sites para Negócios Locais",
    "Marketing Digital",
    "Conversão Online",
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Front-end Freelancer",
    "Back-end Freelancer",
    "UX Design",
    "UI Design",
    "SEO",
    "Otimização de Sites",
    "Performance Web",
    "Desenvolvedor Web Vila Velha",
    "Desenvolvedor Web Espírito Santo",
    "Samuel Oliveira Dev",
    "Portfólio Samuel Oliveira"
  ],
  authors: [
    { name: "Samuel Oliveira", url: `${process.env.NEXT_PUBLIC_BASE_URL}` }
  ],
  creator: "Samuel Oliveira",
  publisher: "Samuel Oliveira",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    title: "Samuel Oliveira | Desenvolvedor Web Freelancer",
    description:
      "Sites institucionais, landing pages e soluções digitais sob medida para empresas e empreendedores.",
    siteName: "Samuel Oliveira Portfolio",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Samuel Oliveira - Desenvolvedor Freelancer Full Stack"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Samuel Oliveira | Desenvolvedor Web Freelancer",
    description:
      "Desenvolvimento web sob medida para empresas e empreendedores. Sites modernos e landing pages otimizadas.",
    images: ["/og-image.webp"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/favicon-32x32.png"
  },
  manifest: "/site.webmanifest",

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Samuel Oliveira | Desenvolvedor Web Freelancer",
      "url": "https://samuel-oliveira.com",
      "description":
        "Desenvolvedor freelancer especializado em sites modernos, landing pages e soluções digitais sob medida para empresas e empreendedores."
    })
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" }
  ],
  width: "device-width",
  initialScale: 1
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.className} ${geist_mono.className}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <NextIntlClientProvider messages={messages}>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                borderRadius: "8px",
                background: "#333",
                color: "#fff"
              },
              success: {
                style: {
                  background: "#508B26",
                  color: "#fff"
                },
                icon: <CircleCheckBig />
              },
              error: {
                style: {
                  background: "#ff4d4f", // vermelho
                  color: "#fff"
                },
                icon: <CircleX />
              },
              duration: 3000
            }}
          />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div id="root" className="sr-only" />
            <Header />
            <main
              id="main-content"
              className="flex flex-col flex-1"
              tabIndex={-1}
            >
              {children}
            </main>
            <Footer />
            <GoogleAnalytics gaId={process.env.GA_ID!} />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
