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

      <ul className="home-social absolute left-4 md:left-8 bottom-8 flex flex-col space-y-4">
        <li>
          <a
            href="https://join.slack.com/t/keploy/shared_invite/zt-2poflru6f-_VAuvQfCBT8fDWv1WwSbkw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-muted-foreground hover:text-[#FF914D] transition-colors"
          >
            <i className="fa fa-slack mr-2" aria-hidden="true"></i>
            <span className="sr-only md:not-sr-only">Slack</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Keployio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-muted-foreground hover:text-[#FF914D] transition-colors"
          >
            <i className="fa fa-twitter mr-2" aria-hidden="true"></i>
            <span className="sr-only md:not-sr-only">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/keploy/keploy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-muted-foreground hover:text-[#FF914D] transition-colors"
          >
            <i className="fa fa-github mr-2" aria-hidden="true"></i>
            <span className="sr-only md:not-sr-only">Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/keploy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-muted-foreground hover:text-[#FF914D] transition-colors"
          >
            <i className="fa fa-linkedin mr-2" aria-hidden="true"></i>
            <span className="sr-only md:not-sr-only">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@keploy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-muted-foreground hover:text-[#FF914D] transition-colors"
          >
            <i className="fa fa-youtube mr-2" aria-hidden="true"></i>
            <span className="sr-only md:not-sr-only">Youtube</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
