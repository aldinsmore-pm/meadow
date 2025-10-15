import "./css/style.css";

import { Inter, Source_Serif_4 } from "next/font/google";

import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
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
        className={`${inter.variable} ${sourceSerif.variable} bg-[rgb(var(--bg))] font-sans text-base text-[rgb(var(--fg))] antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
