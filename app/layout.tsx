import type { Metadata } from 'next';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProjectModal from '@/components/ProjectModal';
import { SITE } from '@/data/site';

const TITLE = 'Usman Ogunnaike — Developer & Creative';
const DESC = 'Portfolio of Usman Ogunnaike, a developer and creative in Lagos working across websites, mobile apps, motion graphics and 3D architectural visualisation.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: '%s — Usman Ogunnaike' },
  description: DESC,
  authors: [{ name: SITE.name, url: SITE.url }],
  icons: { icon: '/icon.svg' },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_US',
    type: 'website',
    images: [{ url: SITE.portrait, width: 1254, height: 1254, alt: 'Portrait of Usman Ogunnaike' }],
  },
  twitter: { card: 'summary', title: TITLE, description: DESC, images: [SITE.portrait] },
};

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  url: SITE.url,
  image: SITE.url + SITE.portrait,
  jobTitle: 'Developer and creative',
  description: DESC,
  email: SITE.contact.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
  knowsAbout: ['Web development', 'Mobile apps', 'Motion graphics', '3D architectural visualisation'],
  sameAs: SITE.contact.socials.filter((s) => s.label !== 'WhatsApp').map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=clash-display@300,400,500,600&f[]=satoshi@400,500,700&display=swap" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </head>
      <body>{children}<WhatsAppButton /><ProjectModal /></body>
    </html>
  );
}
