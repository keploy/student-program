"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = useMemo(() => [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Join Us", href: "#join" },
    { name: "Testimonials", href: "#testimonials" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      let maxVisibility = 0;

      navItems.forEach((item) => {
        const sectionId = item.href;
        const section = document.querySelector(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const height = window.innerHeight;

          const visibleHeight =
            Math.min(rect.bottom, height) - Math.max(rect.top, 0);
          const visibility =
            visibleHeight > 0 ? visibleHeight / rect.height : 0;

          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const section = document.querySelector(href);
      if (section) {
        window.scrollTo({
          top: section.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
      }
    }, 100);
  };

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

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-[#FF7F50]">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[250px] sm:w-[300px] bg-white p-6"
          >
            <SheetTitle className="text-xl font-bold mb-6 text-[#00163D]">
              Navigation Menu
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigate to different sections of the website
            </SheetDescription>
            <nav className="flex flex-col gap-4 mt-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={`justify-start text-lg font-medium py-3 h-auto ${
                    activeSection === item.href
                      ? "bg-[#FFF0E6] text-[#FF7F50] font-bold"
                      : "hover:bg-[#FFF0E6] hover:text-[#FF7F50]"
                  }`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </Button>
              ))}
              <div className="border-t border-[#FF9F6B]/20 pt-6 mt-4">
                <Button
                  className="w-full bg-[#FF7F50] hover:bg-[#E67348] text-white py-3 px-6 h-auto rounded-full text-base font-medium"
                  onClick={() => {
                    setOpen(false);
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSc5132o6GBa1PLZOVRK3ZxEwUE8DGJivguHoREwOprg0AMDzg/viewform",
                      "_blank"
                    );
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
