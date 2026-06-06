/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, SlidersHorizontal, Eye } from 'lucide-react';
import { PETS_DATA } from '../data/pets';
import { Pet, PetType } from '../types';

interface PetShowcaseProps {
  onPetSelect: (pet: Pet) => void;
}

export default function PetShowcase({ onPetSelect }: PetShowcaseProps) {
  const [selectedType, setSelectedType] = useState<PetType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'priceAsc' | 'priceDesc' | 'age'>('default');

  const categories: { label: string; value: PetType }[] = [
    { label: 'Todos', value: 'all' },
    { label: 'Cachorros', value: 'dog' },
    { label: 'Gatitos', value: 'cat' },
    { label: 'Aves', value: 'bird' },
    { label: 'Conejos', value: 'rabbit' },
  ];

  const filteredPets = useMemo(() => {
    let result = [...PETS_DATA];

    // Filter by type
    if (selectedType !== 'all') {
      result = result.filter((pet) => pet.type === selectedType);
    }

    // Search query matches breed, name or tags
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (pet) =>
          pet.name.toLowerCase().includes(q) ||
          pet.breed.toLowerCase().includes(q) ||
          pet.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Hard sorting
    if (sortBy === 'priceAsc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceDesc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'age') {
      // Simple age mock sort (months vs years pattern)
      result.sort((a, b) => {
        const monthsA = a.age.includes('mes') ? parseInt(a.age) : parseInt(a.age) * 12;
        const monthsB = b.age.includes('mes') ? parseInt(b.age) : parseInt(b.age) * 12;
        return monthsA - monthsB;
      });
    }

    return result;
  }, [selectedType, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedType('all');
    setSearchQuery('');
    setSortBy('default');
  };

  return (
    <section id="pets" className="py-20 md:py-28 bg-amber-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center space-x-1 px-3 py-1 bg-amber-50 rounded-full text-xs font-semibold uppercase text-amber-800 border border-amber-200/50">
              <span>Catálogo Disponible</span>
            </div>
            <h2 className="text-3.5xl sm:text-4xl font-display font-medium text-[#2D2D1A] tracking-tight">
              Nuestros Pequeños Compañeros
            </h2>
            <p className="text-sm sm:text-base text-amber-500/80 font-sans leading-relaxed">
              Explora nuestra cuidada cría de cachorros y gatitos dóciles. Cada uno se entrega de forma ética, con un protocolo estricto veterinario para garantizar una feliz inserción en tu hogar.
            </p>
          </div>

          {/* Quick Stats Banner inside header */}
          <div className="flex items-center space-x-4 bg-amber-100/50 px-5 py-3 rounded-2xl border border-amber-150 self-start md:self-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="font-sans text-xs font-bold text-amber-900">
              {PETS_DATA.length} mascotas sanas registradas bajo veterinaria continua
            </span>
          </div>
        </div>

        {/* Dynamic Controls Grid (Search, Category Filters, Sort Selector) */}
        <div className="bg-amber-100/20 p-4 sm:p-6 rounded-3xl border border-amber-150 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search inputs (5 columns) */}
            <div className="col-span-1 md:col-span-5 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-500/60 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar por raza, nombre o tag (ej. familiar, depto)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-amber-150 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 rounded-xl text-sm font-sans font-medium transition-all shadow-sm text-amber-900"
              />
            </div>

            {/* Sorting controls (3 columns) */}
            <div className="col-span-1 md:col-span-3 relative flex items-center bg-white border border-amber-150 rounded-xl px-3.5 py-1.5 shadow-sm">
              <SlidersHorizontal className="text-amber-500/60 w-4 h-4 mr-2" />
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="w-full bg-transparent border-0 py-1 text-xs sm:text-sm font-sans font-semibold text-amber-900 focus:ring-0 focus:outline-none cursor-pointer"
              >
                <option value="default">Clasificar por: Defecto</option>
                <option value="priceAsc">Menor precio primero</option>
                <option value="priceDesc">Mayor precio primero</option>
                <option value="age">Por edad (menores primero)</option>
              </select>
            </div>

            {/* Quick action info (4 columns) */}
            <div className="col-span-1 md:col-span-4 text-right hidden md:block">
              <span className="font-mono text-[10px] font-bold text-amber-500 uppercase tracking-widest leading-3">
                Mostrando {filteredPets.length} compañeros de {PETS_DATA.length} totales
              </span>
            </div>
          </div>

          {/* Category Button Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-amber-100">
            {categories.map((cat) => {
              const isSelected = selectedType === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedType(cat.value)}
                  className={`px-4.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all cursor-pointer select-none ${
                    isSelected
                      ? 'bg-amber-500 text-white shadow-xl shadow-amber-500/10'
                      : 'bg-white hover:bg-amber-100/50 text-amber-800 border border-amber-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Catalog Showcase Display Grid */}
        <AnimatePresence mode="wait">
          {filteredPets.length > 0 ? (
            <motion.div
              key="pets-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filteredPets.map((pet) => (
                <motion.div
                  key={pet.id}
                  layoutId={`pet-card-${pet.id}`}
                  className="group bg-white rounded-3xl border border-amber-150 hover:border-amber-400 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  {/* Photo Section with Badge Overlay */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-amber-50">
                    <img
                      src={pet.imageUrl}
                      alt={pet.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none grayscale-[0.08]"
                      referrerPolicy="no-referrer"
                    />
                    {/* Floating Gender Badge */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm shadow-sm border border-amber-100 py-1 px-3 rounded-full text-[10px] font-sans font-bold text-amber-900 tracking-wide">
                      {pet.gender}
                    </div>

                    {/* Floating Price tag */}
                    <div className="absolute bottom-3 right-3 bg-amber-500 text-white font-sans font-extrabold text-sm py-1 px-3.5 rounded-full shadow-md z-1">
                      ${pet.price}
                    </div>
                  </div>

                  {/* Text Details Section */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-xs font-bold text-amber-500 tracking-wider">
                          {pet.breed}
                        </span>
                        <span className="font-sans text-xs text-amber-900/60">
                          {pet.age}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-xl text-amber-900 group-hover:text-amber-400 transition-colors">
                        {pet.name}
                      </h3>
                      <p className="font-sans text-xs text-amber-500/80 leading-normal line-clamp-2 pt-1">
                        {pet.description}
                      </p>
                    </div>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1">
                      {pet.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-amber-50 border border-amber-100 text-amber-800 font-sans text-[10px] font-bold px-2 py-0.5 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button CTA */}
                    <button
                      onClick={() => onPetSelect(pet)}
                      className="w-full py-2.5 bg-amber-50 group-hover:bg-amber-500 border border-amber-100 group-hover:border-amber-500 text-amber-800 group-hover:text-white font-sans font-bold text-xs rounded-xl shadow-inner transition-all flex items-center justify-center space-x-1.5 cursor-pointer focus:outline-none"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Conocer Detalles</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-pets-found"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-12 text-center max-w-md mx-auto space-y-4"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-2">
                <Filter className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-extrabold text-lg text-gray-900">
                Ninguna mascota coincide con tus filtros
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed">
                Prueba buscando otro término, cambiando de tipo o limpiando la consulta. Criamos constantemente nuevos cachorros, ¡consúltanos de forma directa!
              </p>
              <button
                onClick={handleResetFilters}
                className="py-2.5 px-5 bg-white border border-gray-200 hover:border-gray-300 rounded-xl text-xs font-sans font-bold text-gray-700 cursor-pointer shadow-sm transition-all focus:outline-none"
              >
                Restablecer Catálogo Completo
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
