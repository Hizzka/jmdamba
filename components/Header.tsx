import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a 
              href="#" 
              className="text-xl font-semibold text-primary relative inline-flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
            >
              {/* Animated Sparkles */}
              <motion.span
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-blue-400"
              >
                ✨
              </motion.span>
              
              <motion.span
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Jobai Damba
              </motion.span>
              
              <motion.span
                animate={{
                  rotate: [0, -360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="text-blue-400"
              >
                ✨
              </motion.span>
            </motion.a>

            {/* Floating Ice Crystals */}
            <motion.div
              className="absolute -top-1 -left-1 w-1 h-1 bg-blue-300 rounded-full opacity-70"
              animate={{
                y: [0, -8, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-primary/60 rounded-full opacity-70"
              animate={{
                y: [0, 8, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute top-0 right-2 w-0.5 h-0.5 bg-blue-200 rounded-full opacity-80"
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7
              }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("journey")}
                className="hover:text-primary transition-colors"
              >
                Journey
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="hover:text-primary transition-colors"
              >
                Portfolio
              </button>
            </div>
          </div>

          {/* Theme Toggle & Let's Talk Button - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-all duration-300 glass-effect hover:glowing"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-blue-400" />}
            </button>
            {/* Let's Talk Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-primary to-blue-400 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2 font-medium"
            >
              Let's Talk
              <span className="text-sm">→</span>
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-all duration-300 glass-effect hover:glowing"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-blue-400" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="text-left hover:text-primary transition-colors"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-left hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            {/* Let's Talk Button - Mobile */}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-primary to-blue-400 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2 font-medium w-fit"
            >
              Let's Talk
              <span className="text-sm">→</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
