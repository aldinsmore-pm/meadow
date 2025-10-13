import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="Meadow home">
      <Image src={logo} alt="Meadow logo" width={32} height={32} />
      <span className="text-lg font-semibold tracking-tight text-[rgb(var(--meadow-ink))]">Meadow</span>
    </Link>
  );
}
