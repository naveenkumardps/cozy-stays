import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`sticky top-0 z-50 h-20 flex items-center transition-shadow duration-200 bg-background/80 backdrop-blur-md ${
        scrolled ? "shadow-header" : ""
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight text-foreground">
          Hearth
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link pb-1 ${
                location.pathname === item.path ? "text-foreground after:!w-full" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-primary text-primary-foreground text-sm font-medium transition-all hover:brightness-110 active:scale-95"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-20 left-0 right-0 bg-background border-b border-border p-6 md:hidden flex flex-col gap-4 shadow-card">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-base font-medium text-foreground py-2"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-primary text-primary-foreground text-sm font-medium mt-2"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
