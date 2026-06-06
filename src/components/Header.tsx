/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PawPrint, Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  onQuizClick: () => void;
}

export default function Header({ onQuizClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Compañeros', href: '#pets' },
    { label: 'Cuestionario', href: '#matcher' },
    { label: 'Servicios', href: '#services' },
    { label: 'Testimonios', href: '#testimonials' },
    { label: 'Contacto', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-amber-50/95 backdrop-blur-md shadow-md border-b border-amber-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 group focus:outline-none"
            id="logo"
          >
            <div className="bg-amber-500 text-white p-2.5 rounded-xl shadow-md shadow-amber-500/10 group-hover:scale-105 transition-transform">
              <PawPrint className="w-5.5 h-5.5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-amber-900 group-hover:text-amber-400 transition-colors">
              Fauna<span className="text-amber-400">Boutique</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-sans text-sm font-medium text-amber-900/80 hover:text-amber-400 active:text-amber-500 transition-colors relative py-1 focus:outline-none focus:text-amber-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onQuizClick}
              id="cta-quiz-header"
              className="px-4 py-2 rounded-xl text-sm font-sans font-semibold text-amber-600 bg-amber-50 hover:bg-amber-100 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              Test de Afinidad
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              id="cta-contact-header"
              className="flex items-center space-x-2 px-5 py-2 rounded-xl text-sm font-sans font-semibold text-white bg-amber-500 hover:bg-amber-600 shadow-lg shadow-amber-500/10 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Phone className="w-4 h-4" />
              <span>Contáctanos</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="text-amber-900 hover:text-amber-400 focus:outline-none focus:text-amber-400 p-2 rounded-lg"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slidedown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-amber-50 border-b border-amber-100 overflow-hidden shadow-inner"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-2.5 rounded-xl font-sans text-base font-medium text-amber-900/90 hover:bg-amber-100/50 hover:text-amber-400 transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-amber-100/80 flex flex-col space-y-3 px-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onQuizClick();
                  }}
                  className="w-full py-3 rounded-xl font-sans font-semibold text-center text-amber-400 bg-amber-100 hover:bg-amber-100/80 transition-all max-w-full"
                >
                  Tomar Cuestionario
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full py-3 rounded-xl font-sans font-semibold text-center text-white bg-amber-500 shadow-md shadow-amber-500/10 block hover:bg-amber-600"
                >
                  Hablar con un Humano
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
