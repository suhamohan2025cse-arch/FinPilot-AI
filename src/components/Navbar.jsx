import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "Platform", href: "#features" },
  { label: "Why FinPilot", href: "#why" },
  { label: "How it Works", href: "#workflow" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="section-padding">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 ${
            scrolled ? "glass shadow-card" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-glow to-cyan-glow">
              <Sparkles className="h-4 w-4 text-white" />
            </span>

            <span className="font-semibold text-white text-lg">
              FinPilot <span className="text-slate-400">AI</span>
            </span>
          </Link>

          <nav className="hidden md:flex gap-7">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">

            <Link
              to="/dashboard"
              className="btn-primary px-6 py-3"
            >
              Launch Dashboard
            </Link>

          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="glass mt-3 rounded-xl p-4 flex flex-col gap-3 md:hidden">

            {links.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}

            <Link
              to="/dashboard"
              className="btn-primary text-center"
            >
              Launch Dashboard
            </Link>

          </div>
        )}
      </div>
    </motion.header>
  );
}