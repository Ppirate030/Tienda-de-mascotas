/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';
// @ts-ignore
import heroImg from '../assets/images/hero_pets_1780069149686.png';

interface HeroProps {
  onQuizClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onQuizClick, onExploreClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-amber-50/50 via-white to-white overflow-hidden"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 -mr-20 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-0 -ml-20 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Block (7 columns on large) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tag/Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-amber-50 px-3.5 py-1.5 rounded-full text-amber-800 border border-amber-200/50"
            >
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="font-sans text-xs font-semibold tracking-wide uppercase">
                Criadores Éticos Registrados
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-amber-900 leading-[1.15]"
            >
              Un Hogar Lleno de <br />
              <span className="italic text-amber-400 underline decoration-1 underline-offset-8">
                Huellas, Ronroneos
              </span>{' '}
              y Amor
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-amber-500/80 leading-relaxed font-sans font-normal"
            >
              Encuentra a tu compañero ideal de forma segura y ética. Conectamos cachorros y gatitos criados bajo estrictos estándares de bienestar animal con familias responsables. Todo garantizado de por vida bajo atención veterinaria integral.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 text-white font-sans font-bold text-base px-8 py-4 rounded-2xl shadow-xl transition-all cursor-pointer group"
              >
                <span>Ver Cachorros Disponibles</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onQuizClick}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white hover:bg-amber-50/50 border-2 border-amber-100 hover:border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 text-amber-800 font-sans font-semibold text-base px-8 py-4 rounded-2xl shadow-sm transition-all cursor-pointer"
              >
                <Heart className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span>¿Cuál es mi mascota ideal?</span>
              </button>
            </motion.div>

            {/* Value Props / Bullet Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100/80 text-left justify-items-center sm:justify-items-start"
            >
              <div className="flex items-start space-x-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-gray-900">Salud Garantizada</h4>
                  <p className="font-sans text-xs text-gray-500">Garantía médica integral de un año.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Heart className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 fill-amber-50" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-gray-900">Crianza Certificada</h4>
                  <p className="font-sans text-xs text-gray-500">Criados con amor y respeto ético.</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-start space-x-2">
                <Sparkles className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-gray-900">Entrega Segura</h4>
                  <p className="font-sans text-xs text-gray-500">Soporte post-venta continuo.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Picture Content Block (5 columns on large) */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0 flex justify-center items-center">
            <div className="w-[300px] sm:w-[420px] h-[280px] sm:h-[400px] relative">
              {/* Organic background blobs in Natural Tones */}
              <div className="absolute inset-0 bg-[#E9E4D9] pet-blob transform rotate-6 scale-102 transition-transform hover:rotate-3 duration-500" />
              <div className="absolute inset-0 bg-amber-500/10 pet-blob transform -rotate-3 scale-105 transition-transform hover:rotate-0 duration-500" />
              
              {/* Main Image Frame (framed inside white with shadow) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute inset-4 overflow-hidden pet-blob border-4 border-white shadow-xl bg-amber-100"
              >
                <img
                  src={heroImg}
                  alt="Adorables cachorros y gatitos saludables de Fauna"
                  className="w-full h-full object-cover select-none grayscale-[0.1]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Floating Badge - Top-Right */}
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 10 }}
                transition={{ type: 'spring', damping: 15, delay: 0.6 }}
                className="absolute -top-8 -right-4 bg-white px-5 py-4 rounded-2xl shadow-xl border border-amber-100 flex items-center space-x-3 max-w-[200px]"
              >
                <div className="p-2.5 bg-amber-50 text-amber-500 rounded-xl">
                  <PawPrintBadgeIcon />
                </div>
                <div>
                  <div className="font-sans font-extrabold text-xl text-amber-900">100%</div>
                  <div className="font-mono text-[9px] font-semibold text-amber-500/80 uppercase tracking-wider leading-3">Salud Garantizada</div>
                </div>
              </motion.div>

              {/* Floating Badge - Bottom-Left */}
              <motion.div
                initial={{ scale: 0, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: 'spring', damping: 15, delay: 0.8 }}
                className="absolute -bottom-6 -left-4 bg-amber-800 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center space-x-2 border border-amber-700 font-sans"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-xs font-semibold tracking-wide">6 cachorros listos esta semana</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Inlined custom icon component to satisfy single import pattern
function PawPrintBadgeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-paw-print"
    >
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="15" r="2" />
      <circle cx="5" cy="14" r="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 12c.5 1 2 2.5 3 4s0 3-1.5 3c-1.5 0-3-1.5-3.5-3-.5 1.5-2 3-3.5 3-1.5 0-2.5-1.5-1.5-3s2.5-3 3-4" />
    </svg>
  );
}
