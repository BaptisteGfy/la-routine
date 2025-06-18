"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Gestionnaire de clic global pour fermer le menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const menuItems = [
    { href: "/", label: "Accueil", icon: "🏠" },
    { href: "/carte", label: "Notre Carte", icon: "🍽️" },
    { href: "/acces", label: "Accès", icon: "📍" },
    { href: "/contact", label: "Contact", icon: "📞" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed top-0 left-0 right-0 z-[9999] pt-6">
      {/* Header avec logo et bouton burger */}
      <div className="relative flex items-center justify-between px-4 py-4 border-b border-gray-100">
        {/* Espace vide à gauche pour équilibrer sur mobile */}
        <div className="w-12 lg:hidden"></div>

        {/* Logo centré */}
        <div className="absolute left-1/2 transform -translate-x-1/2 pb-4">
          <Link href="/" className="flex flex-col items-center group">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                LR
              </div>
              <h1 className="text-2xl font-bold text-amber-800 group-hover:text-amber-600 transition-colors">
                La Routine
              </h1>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Bar de quartier depuis 2025
            </p>
          </Link>
        </div>

        {/* Bouton menu mobile à droite */}
        <div className="lg:hidden relative z-[9999]" ref={menuRef}>
          <button className="btn btn-circle" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Dropdown menu mobile */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg border border-gray-200 z-[9999] mt-6">
              <ul className="py-2">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-amber-50 transition-colors"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium text-gray-700">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Menu horizontal sur desktop */}
      <div className="hidden lg:flex justify-center py-3">
        <ul className="flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors group"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="font-medium text-gray-700 group-hover:text-amber-800">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
