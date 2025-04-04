"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="header-logo">
          <Link href="/" className="site-logo">
            <Image
              src="/images/new-logo.svg"
              alt="Keploy Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
