"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 bg-gradient-to-br from-[#F5F5F5] via-[#FFF] to-[#E6E2D4]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-bold text-lg md:text-xl text-[#00163D] mb-4">
            Welcome to Keploy
          </h3>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#E35134] via-[#FF914D] to-[#BE2C1B] text-transparent bg-clip-text">
            Keploy API Fellowship
          </h1>

          <h4 className="text-base md:text-lg text-gray-600 mb-8">
            Designed to help you master open-source contributions, Git, GitHub,
            API development, Google Summer of Code (GSoC), how to make and
            integrate apps with APIs, and how to test them. This program is your
            gateway to excelling in the world of APIs and software engineering.
          </h4>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button
              asChild
              className="bg-[#FF914D] hover:bg-[#FF914D]/90 text-white rounded-full"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc5132o6GBa1PLZOVRK3ZxEwUE8DGJivguHoREwOprg0AMDzg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </div>

          <div className="home-content__scroll">
            <a
              href="#about"
              className="smoothscroll flex flex-col items-center text-muted-foreground hover:text-[#FF914D] transition-colors"
            >
              <span className="mb-2">Scroll Down</span>
              <ChevronDown className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
