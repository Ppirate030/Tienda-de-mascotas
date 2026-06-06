/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { HeartPulse, Scissors, Award, Sparkles, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/pets';

// Structured lookup map to guarantee type-safety
const ICON_LOOKUP: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartPulse: HeartPulse,
  Scissors: Scissors,
  Award: Award,
  Sparkles: Sparkles,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-amber-100/30 border-t border-b border-amber-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-amber-50 rounded-full text-xs font-semibold uppercase text-amber-800 border border-amber-200/50 mb-3">
            <span>Soporte de Por Vida</span>
          </div>
          <h2 className="text-3.5xl sm:text-4xl font-display font-medium text-amber-800 tracking-tight">
            Servicios Complementarios Premium
          </h2>
          <p className="mt-3 text-sm sm:text-base text-amber-500/80 font-sans leading-relaxed">
            Nuestra responsabilidad no termina en la entrega de tu mascota. Proveemos un ecosistema de bienestar continuo diseñado por profesionales para acompañarte en cada etapa de su crecimiento.
          </p>
        </div>

        {/* Services Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((srv, idx) => {
            const IconComp = ICON_LOOKUP[srv.iconName] || Sparkles;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-3xl border border-amber-150 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Icon Block with soft backdrops */}
                  <div className="bg-amber-50 text-amber-500 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Pricing Badge Info */}
                  <span className="block font-sans text-xs font-bold text-amber-500 tracking-wide uppercase">
                    {srv.priceDescription}
                  </span>

                  {/* Header info */}
                  <div className="space-y-2">
                    <h3 className="font-display font-medium text-lg text-amber-900 leading-snug">
                      {srv.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-amber-500/90 leading-normal">
                      {srv.description}
                    </p>
                  </div>

                  {/* Benefits checklist bullets */}
                  <ul className="space-y-2.5 pt-2 border-t border-amber-100">
                    {srv.benefits.map((bullet) => (
                      <li key={bullet} className="flex items-start space-x-2">
                        <div className="bg-emerald-50 text-emerald-600 w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="font-sans text-[11px] sm:text-xs text-amber-900/80 leading-snug">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Micro Action link bottom */}
                <div className="pt-6">
                  <a
                    href="#contact"
                    className="font-sans text-xs font-bold text-amber-400 group-hover:text-amber-500 transition-colors inline-flex items-center space-x-1"
                  >
                    <span>Consultar Disponibilidad</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
