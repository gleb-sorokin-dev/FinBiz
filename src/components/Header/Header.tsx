import React, { useState } from "react";
import logo from "../../assets/finBiz-logo.svg";

interface NavigationItem {
  id: string;
  name: string;
  href: string;
}

interface HeaderProps {
  onNavigate?: (href: string) => void;
  onGetStarted?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onGetStarted }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("all-projects");

  const navigationItems: NavigationItem[] = [
    { id: "projects", name: "Product", href: "/projects" },
    { id: "pages", name: "Pages", href: "/pages" },
    { id: "integrations", name: "Integrations", href: "/integrations" },
    { id: "blog", name: "Blog", href: "/blog" },
    { id: "pricing", name: "Pricing", href: "/pricing" },
  ];

  const handleNavClick = (item: NavigationItem) => {
    setActiveItem(item.id);
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(item.href);
    }
  };

  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Personal Logo */}
          <div>
            <img src={logo} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  activeItem === item.id
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
                {activeItem === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                )}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Get Started Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Get Started Button */}
            <button
              onClick={handleGetStarted}
              className="relative px-4 py-2 lg:px-6 lg:py-2.5 bg-gradient-to-r from-white to-gray-200 text-black font-semibold rounded-lg text-sm lg:text-base transition-all duration-300 hover:from-gray-100 hover:to-white hover:shadow-lg hover:shadow-white/25 transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="pt-4 border-t border-white/10">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    activeItem === item.id
                      ? "text-white bg-white/10 border-l-4 border-white"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
