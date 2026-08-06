import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Showcase", id: "showcase" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-xl bg-background/70 border-b border-accent/10">
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-accent text-background text-xs font-display tracking-tight group-hover:bg-accent-secondary transition-colors">
            SM
          </div>
          <span className="text-xs md:text-sm tracking-[0.3em] text-foreground/80 uppercase font-medium group-hover:text-foreground transition-colors">
            Shivansh
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-10 text-xs tracking-widest text-foreground/70 uppercase">
          {NAV_LINKS.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative hover:text-accent transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </li>
          ))}
        </ul>

        <span className="hidden md:block text-[10px] tracking-[0.3em] text-foreground/70 uppercase">
          {time}
        </span>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-50 text-foreground"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-foreground uppercase tracking-[0.3em] text-sm md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}