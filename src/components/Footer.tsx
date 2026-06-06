/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PawPrint, Instagram, Facebook, Mail, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-amber-900 text-amber-100/70 py-16 border-t border-amber-950/80" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-amber-950/50 pb-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center space-x-2 text-amber-50 font-sans font-extrabold text-xl tracking-tight"
            >
              <div className="bg-amber-500 text-white p-2 rounded-xl">
                <PawPrint className="w-5 h-5 fill-white" />
              </div>
              <span>Fauna<span className="text-amber-300">Boutique</span></span>
            </a>
            <p className="font-sans text-xs sm:text-sm text-amber-100/60 leading-relaxed">
              Establecimiento adherido a los protocolos éticos de no-hacinamiento y cría con amor. Ofrecemos el ecosistema veterinario y nutricional definitivo para dar la bienvenida a tu nuevo compañero.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-sm text-amber-50 uppercase tracking-wider">Enlaces Rápidos</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Inicio', href: '#home' },
                { label: 'Catálogo de Mascotas', href: '#pets' },
                { label: 'Cuestionario Inteligente', href: '#matcher' },
                { label: 'Servicios de Bienestar', href: '#services' },
                { label: 'Testimonios', href: '#testimonials' },
                { label: 'Póngase en Contacto', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-sans text-xs sm:text-sm text-amber-100/60 hover:text-amber-300 hover:underline transition-all cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Hours & Logistics */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-sm text-amber-50 uppercase tracking-wider">Boutique Palermo</h4>
            <div className="space-y-1">
              <p className="font-sans text-xs sm:text-sm text-amber-100/80">Av. del Libertador 4800, Palermo</p>
              <p className="font-sans text-xs text-amber-100/40">CABA, Buenos Aires, Argentina</p>
            </div>
            <div className="space-y-1 border-t border-amber-950/50 pt-3">
              <p className="font-sans text-xs text-amber-100/80 leading-snug">Lunes a Sábado: 9:00 - 19:30</p>
              <p className="font-sans text-xs text-amber-100/40">Domingos: 10:00 - 14:00 (Citas)</p>
            </div>
          </div>

          {/* Column 4: Newsletter & Legitimacy block */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-sm text-amber-50 uppercase tracking-wider">Redes y Comunidad</h4>
            <p className="font-sans text-xs text-amber-100/60">Síguenos para enterarte al instante de los cachorros listos para conocer cada semana.</p>
            
            {/* Social Icons row */}
            <div className="flex items-center space-x-3.5 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-amber-800 hover:bg-amber-400 text-amber-100 hover:text-amber-950 p-2.5 rounded-xl transition-all animate-shake"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-amber-800 hover:bg-amber-400 text-amber-100 hover:text-amber-950 p-2.5 rounded-xl transition-all animate-shake"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:hola@faunaboutique.com"
                className="bg-amber-800 hover:bg-amber-400 text-amber-100 hover:text-amber-950 p-2.5 rounded-xl transition-all animate-shake"
                aria-label="Correo"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-amber-100/40">
          <p>© {currentYear} FaunaBoutique. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-2 bg-amber-950/50 px-3 py-1.5 rounded-lg border border-amber-950/40">
            <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide">Campaña de Crianza 100% Ética y Libre de Jaulas</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
