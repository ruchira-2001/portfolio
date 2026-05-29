import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ruchira Perera | Interdisciplinary Researcher — Chemistry, AI & Computational Science",
  description:
    "Portfolio of Waragoda Mudalige Ruchira Perera — BSc Applied Sciences (Chemistry & Computer Science), published researcher in ICP-MS heavy metal analysis, Edge-AI systems (YOLOv8n), and computational chemistry (DFT/GC-MS). Rajarata University of Sri Lanka.",
  keywords: [
    "Ruchira Perera",
    "computational chemistry",
    "edge AI",
    "ICP-MS",
    "GC-MS",
    "DFT",
    "machine learning",
    "analytical chemistry",
    "Rajarata University",
    "Sri Lanka researcher",
    "YOLOv8",
    "smart eco bin",
    "ResQNet",
  ],
  authors: [{ name: "Waragoda Mudalige Ruchira Perera" }],
  openGraph: {
    title: "Ruchira Perera | Interdisciplinary Researcher",
    description:
      "Bridging Chemistry and Intelligent Computing — Published researcher in AI systems, computational chemistry, and analytical instrumentation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruchira Perera | Interdisciplinary Researcher",
    description:
      "Bridging Chemistry and Intelligent Computing — Published researcher in AI systems, computational chemistry, and analytical instrumentation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-navy-950 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
