import "./globals.css";

export const metadata = {
  title: "DigiCore Tech Solutions | Worldwide Digital Development & SEO",
  description:
    "DigiCore Tech Solutions delivers global frontend, backend, UI/UX, WordPress, and SEO services for scalable digital growth.",
  keywords: [
    "DigiCore Tech Solutions",
    "frontend development",
    "backend development",
    "UI UX design",
    "Figma designer",
    "SEO specialist",
    "WordPress development",
    "digital agency",
    "web development",
    "global digital services",
  ],
  openGraph: {
    title: "DigiCore Tech Solutions | Worldwide Digital Development & SEO",
    description:
      "DigiCore Tech Solutions delivers global frontend, backend, UI/UX, WordPress, and SEO services for scalable digital growth.",
  },
  icons: {
    icon: "/logo-short.png",
    shortcut: "/logo-short.png",
    apple: "/logo-short.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
