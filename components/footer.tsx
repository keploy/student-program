"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#00163D] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and social icons */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex items-center mb-6">
              <a href="https://keploy.io">
                <Image
                  src="/images/new-logo.svg"
                  alt="Keploy Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>
            <p className="text-sm text-gray-300 mb-6 max-w-xs">
              Developer-centric API testing tool designed to simplify and
              accelerate the testing process. By creating tests with built-in
              mocks, Keploy offers a faster alternative to traditional unit
              testing - and it keeps getting faster every day!
            </p>
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Solutions
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://keploy.io/api-testing"
                      className="text-gray-300 hover:text-[#FF914D] transition-colors"
                    >
                      API Testing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://keploy.io/integration-testing"
                      className="text-gray-300 hover:text-[#FF914D] transition-colors"
                    >
                      Integration Testing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://keploy.io/unit-test-generator"
                      className="text-gray-300 hover:text-[#FF914D] transition-colors"
                    >
                      Unit Testing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://marketplace.visualstudio.com/items?itemName=Keploy.keployio"
                      className="text-gray-300 hover:text-[#FF914D] transition-colors"
                    >
                      VS Code Extension
                    </a>
                  </li>
                </ul>
              </div>

              {/* Developers Column */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Developers
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://keploy.io/docs"
                      className="text-gray-300 hover:text-[#FF914D] transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://keploy.io/docs/running-keploy/cli-commands/"
                      className="text-gray-300 hover:text-[#FF914D] transition-colors"
                    >
                      CLI Reference
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/keploy"
                      className="text-gray-300 hover:text-[#FF914D] transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://keploy.io/docs/server/installation/"
                      className="text-gray-300 hover:text-[#FF914D] transition-colors"
                    >
                      Getting Started
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources Column */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://keploy.io/docs/ci-cd/github/"
                      className="text-gray-300 hover:text-[#FF914D] transition-colors"
                    >
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://keploy.io/blog"
                      className="text-gray-300 hover:text-[#FF914D] transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://keploy.io/about"
                      className="text-gray-300 hover:text-[#FF914D] transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://keploy.io/privacy-policy"
                      className="text-gray-300 hover:text-[#FF914D] transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://keploy.io/cookie-policy"
                      className="text-gray-300 hover:text-[#FF914D] transition-colors"
                    >
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center md:text-left">
          <p className="text-gray-400">
            © Keploy Inc {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
