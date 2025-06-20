import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function GlassmorphicNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-40 w-fit md:w-full md:max-w-md md:pt-8">
     
      <div className="w-fit md:w-full backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl px-2 py-2 md:px-4 md:py-3 shadow-xl">
        <div className="flex items-center justify-between">
          {/* Desktop navigation */}
          <ul className="hidden md:flex flex-1 justify-evenly">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-xl hover:bg-black/20 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
}