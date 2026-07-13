"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work",       label: "Work"       },
  { href: "/experience", label: "Experience" },
  { href: "/about",      label: "About"      },
  { href: "/thoughts",   label: "Thoughts"   },
  { href: "/#contact",   label: "Contact"    },
];

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const pathname                          = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") { setContactActive(false); return; }
    const el = document.getElementById("contact");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setContactActive(entry.isIntersecting),
      { threshold: 0.2, rootMargin: "-10% 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 transition-all duration-500"
      style={{
        height: "64px",
        backgroundColor: scrolled ? "rgba(247,247,247,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(17,17,17,0.07)" : "none",
      }}
    >
      <Link
        href="/"
        className="font-sans text-sm tracking-[0.15em] uppercase select-none transition-opacity duration-200 hover:opacity-45"
        style={{ color: "#111111" }}
      >
        Nishika Agarwal
      </Link>

      <div className="flex items-center gap-7">
        {navLinks.map(({ href, label }) => {
          const isContact = href === "/#contact";
          const isActive  = isContact ? contactActive : pathname === href;

          if (isContact) {
            return (
              <a
                key={href}
                href={pathname === "/" ? "#contact" : "/#contact"}
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="font-sans text-xs tracking-[0.12em] uppercase transition-opacity duration-200 hover:opacity-45"
                style={{ color: "#111111", fontWeight: isActive ? 600 : 400 }}
              >
                {label}
              </a>
            );
          }

          return (
            <Link
              key={href}
              href={href}
              className="font-sans text-xs tracking-[0.12em] uppercase transition-opacity duration-200 hover:opacity-45"
              style={{ color: "#111111", fontWeight: isActive ? 600 : 400 }}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
