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
  title: "Meadow | Get Your Evenings Back",
  description:
    "Stop working until 9pm. Meadow helps small business owners reclaim 10–20 hours every week with a free Time-Back Plan and warm, done-with-you automations.",
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
