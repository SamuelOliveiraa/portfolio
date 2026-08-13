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
    default: "Samuel Oliveira | Desenvolvimento Web",
    template: "%s | Samuel Oliveira"
  },
  description:
    "Portfólio profissional de Samuel Oliveira para desenvolvimento de sites, landing pages e soluções web com foco em conversão, performance e experiência do usuário.",
  keywords: [
    "Desenvolvedor Full Stack",
    "Desenvolvedor React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Desenvolvedor Web",
    "Vila Velha",
    "Espírito Santo",
    "Front-end",
    "Back-end",
    "Portfólio"
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
    title: "Samuel Oliveira | Desenvolvimento Web",
    description:
      "Portfólio profissional de Samuel Oliveira com foco em sites institucionais, landing pages e soluções web voltadas para conversão.",
    siteName: "Samuel Oliveira Portfolio",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Samuel Oliveira - Desenvolvedor Full Stack"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Samuel Oliveira | Desenvolvimento Web",
    description:
      "Portfólio profissional com foco em desenvolvimento web com alto impacto comercial e performance.",
    images: ["/og-image.webp"]
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.ico", type: "image/png" }],
    apple: "/favicon.ico"
  },
  manifest: "/site.webmanifest"
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
