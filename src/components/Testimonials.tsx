/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Quote, PawPrint } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/pets';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-10 w-96 h-96 bg-amber-50/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Caption Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-amber-50 rounded-full text-xs font-semibold uppercase text-amber-800 border border-amber-200/50">
            <span>Comunidad Feliz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#2D2D1A] tracking-tight">
            Familias que Encontraron su Felicidad
          </h2>
          <p className="text-sm sm:text-base text-amber-500/80 font-sans leading-relaxed">
            Nuestros clientes avalan la dedicación y el trato ético que brindamos en cada entrega. Estas son algunas de las historias de adopción y compra recientes.
          </p>
        </div>

        {/* 3-column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-amber-100/10 hover:bg-white rounded-3xl p-6 sm:p-8 border border-amber-150 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote icon floating accent */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-500/10 fill-amber-500/5 group-hover:scale-110 transition-transform duration-300" />

              <div className="space-y-5">
                {/* Visual Stars */}
                <div className="flex space-x-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-400 shrink-0" />
                  ))}
                </div>

                {/* Main Content Paragraph */}
                <p className="font-sans text-xs sm:text-sm text-amber-955 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              {/* User Portrait & Pet Specs Metadata */}
              <div className="flex items-center space-x-3.5 pt-6 border-t border-amber-100 mt-6 shrink-0">
                <img
                  src={item.avatarUrl}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover shadow-inner border border-amber-150 select-none pb-0"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-sm text-amber-900 leading-tight">
                    {item.name}
                  </h4>
                  {/* Adopted badge metadata */}
                  <div className="flex items-center space-x-1 text-[10px] uppercase font-bold text-amber-700">
                    <PawPrint className="w-3 h-3 fill-amber-700 shrink-0" />
                    <span>Adoptó a {item.adoptedPetName} ({item.adoptedPetBreed})</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
