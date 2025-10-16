import "./css/style.css";

import { Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";

import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { RevealProvider } from "@/components/ui/reveal-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Meadow | Stop Working Weekends, Start Scaling",
  description:
    "Selective partnerships for $2M-$20M businesses. We work alongside 15-20 owners per year to systematically automate workflows and reclaim 20+ hours weekly. 6-9 month engagements. ~30% acceptance rate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} ${plexMono.variable} bg-fog font-sans text-base text-ink antialiased`}
      >
        <RevealProvider />
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
