import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Usman Ogunnaike — Full-Stack JS Developer",
  description:
    "Full-Stack JavaScript developer based in Lagos. I build real-time web apps, e-commerce platforms, and production-grade APIs. Open to full-stack roles and remote contracts.",
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
  },
  openGraph: {
    title: "Usman Ogunnaike — Full-Stack JS Developer",
    description:
      "Full-Stack JavaScript developer based in Lagos. I build real-time web apps, e-commerce platforms, and production-grade APIs.",
    url: "https://usmanogunnaike.vercel.app",
    siteName: "Usman Ogunnaike",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Usman Ogunnaike — Full-Stack JS Developer",
    description:
      "Full-Stack JavaScript developer based in Lagos. Building real-time apps, e-commerce platforms, and production-grade APIs.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=satoshi@400,500,700&f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Prevent theme flash by reading localStorage before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('ic-theme');document.documentElement.setAttribute('data-theme',t==='dark'||t==='light'||t==='warm'?t:'light');}catch(e){}`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
