"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="header-logo">
          <Link href="/" className="site-logo">
            <Image
              src="/images/logo.png"
              alt="Keploy Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Hamburger Menu for both Mobile and Desktop */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="border-none hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] sm:w-[350px] p-0 bg-white border-none shadow-lg"
          >
            <div className="flex flex-col h-full">
              <SheetHeader className="p-6 border-b border-none">
                <SheetTitle className="text-xl font-bold text-[#FF914D]">
                  Navigation
                </SheetTitle>
              </SheetHeader>

              <div className="flex-1 overflow-auto py-6 px-6">
                <nav className="flex flex-col space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-3">
                      Menu
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#home"
                          className="smoothscroll flex items-center text-gray-600 hover:text-[#FF914D] transition-colors py-1"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#about"
                          className="smoothscroll flex items-center text-gray-600 hover:text-[#FF914D] transition-colors py-1"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#join"
                          className="smoothscroll flex items-center text-gray-600 hover:text-[#FF914D] transition-colors py-1"
                        >
                          Join
                        </a>
                      </li>
                      <li>
                        <a
                          href="#testimonials"
                          className="smoothscroll flex items-center text-gray-600 hover:text-[#FF914D] transition-colors py-1"
                        >
                          Testimonials
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="grid grid-cols-5 gap-4">
                      <a
                        href="https://join.slack.com/t/keploy/shared_invite/zt-2poflru6f-_VAuvQfCBT8fDWv1WwSbkw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-muted text-gray-600 hover:text-[#FF914D] hover:bg-muted/80 transition-colors"
                      >
                        <i
                          className="fa fa-slack text-lg"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <a
                        href="https://twitter.com/Keployio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-muted text-gray-600 hover:text-[#FF914D] hover:bg-muted/80 transition-colors"
                      >
                        <i
                          className="fa fa-twitter text-lg"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <a
                        href="https://github.com/keploy/keploy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-muted text-gray-600 hover:text-[#FF914D] hover:bg-muted/80 transition-colors"
                      >
                        <i
                          className="fa fa-github text-lg"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/keploy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-muted text-gray-600 hover:text-[#FF914D] hover:bg-muted/80 transition-colors"
                      >
                        <i
                          className="fa fa-linkedin text-lg"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <a
                        href="https://www.youtube.com/@keploy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-muted text-gray-600 hover:text-[#FF914D] hover:bg-muted/80 transition-colors"
                      >
                        <i
                          className="fa fa-youtube text-lg"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
