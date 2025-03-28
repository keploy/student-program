export default function Footer() {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and social icons */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex items-center mb-6">
              <span className="text-xl font-bold text-[#FF6B35]">Keploy</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Developer-centric API testing tool designed to simplify and
              accelerate the testing process. By creating tests with built-in
              mocks, Keploy offers a faster alternative to traditional unit
              testing - and it keeps getting faster every day!
            </p>
            <div className="flex space-x-4">
              <i
                className="fa fa-twitter text-lg text-muted-foreground hover:text-[#FF6B35] transition-colors"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-github text-lg text-muted-foreground hover:text-[#FF6B35] transition-colors"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-linkedin text-lg text-muted-foreground hover:text-[#FF6B35] transition-colors"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-youtube text-lg text-muted-foreground hover:text-[#FF6B35] transition-colors"
                aria-hidden="true"
              ></i>
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      API Testing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      Integration Testing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      Unit Testing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      VS Code Extension
                    </a>
                  </li>
                </ul>
              </div>

              {/* Developers Column */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Developers</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      CLI Reference
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      Getting Started
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources Column */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-[#FF6B35] transition-colors"
                    >
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright at the bottom */}
        <div className="mt-12 pt-6 border-t border-border text-center md:text-left">
          <p className="text-muted-foreground">
            © Keploy Inc {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
