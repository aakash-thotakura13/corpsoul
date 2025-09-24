"use client";

import logo from "../../app/favicon.ico"

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { FiMenu, FiX } from "react-icons/fi";

const routes = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function HeaderComponent() {

  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header style={{ maxWidth: "1200px", minWidth: "350px", margin: "0em auto", position: "sticky", top: 0, backgroundColor: "white", padding: "0em 1em", }}>

      {/* Main header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, padding: "0.5em 0", }}>

        {/* Logo */}
        <div style={{}}>
          <img src={logo.src} alt="corpsoul_logo" style={{ width: "50px", height: "50px", borderRadius: "50%", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center">
          <ul style={{ display: "flex", gap: "5em", listStyle: "none", padding: 0, margin: 0 }}>
            {routes.map((route) => {
              const isActive = pathname === route.path;
              return (
                <li key={route.name}>
                  <Link
                    href={route.path}
                    style={{
                      color: isActive ? "#155DFC" : "#000",
                      fontWeight: isActive ? "bold" : "normal",
                      borderBottom: isActive ? "2px solid #155DFC" : "none",
                      paddingBottom: "0.2em",
                    }}
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA buttons - Desktop */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-4">
          <button style={{ backgroundColor: "#FFF", color: "#191919", border: "1px solid lightgray", padding: "0.5em 1em", borderRadius: "0.5em" }}>Request Quote</button>
          <button style={{ backgroundColor: "#155DFC", color: "#ffffff", border: "1px solid #155DFC", padding: "0.5em 1em", borderRadius: "0.5em" }}>Get Started</button>
        </div>

        {/* Hamburger Button - Mobile Only */}
        <button className="md:hidden text-2xl text-blue-700" onClick={toggleMobileMenu} aria-label="Toggle menu" style={{ marginLeft: "auto" }}>{isMobileMenuOpen ? <FiX /> : <FiMenu />}</button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {routes.map((route) => {
                const isActive = pathname === route.path;
                return (
                  <li key={route.name}>
                    <Link
                      href={route.path}
                      onClick={closeMobileMenu}
                      style={{
                        display: "block",
                        padding: "0.5em 0",
                        color: isActive ? "#155DFC" : "#333",
                        fontWeight: isActive ? "bold" : "normal",
                      }}
                    >
                      {route.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA buttons - Mobile */}
            <div className="flex flex-col gap-2 mt-4">
              <button style={{ backgroundColor: "#FFF", color: "#191919", border: "1px solid lightgray", padding: "0.5em 1em", borderRadius: "0.5em" }}>Request Quote</button>
              <button style={{ backgroundColor: "#155DFC", color: "#ffffff", border: "1px solid #155DFC", padding: "0.5em 1em", borderRadius: "0.5em" }}>Get Started</button>
            </div>
          </nav>
        )}

      </div>

    </header>
  );
}
