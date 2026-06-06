/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Shield, Heart, Gift, Phone, AlertCircle, Loader2 } from 'lucide-react';
import { Pet } from '../types';

interface PetModalProps {
  pet: Pet | null;
  onClose: () => void;
}

export default function PetModal({ pet, onClose }: PetModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Prevent scroll alignment when modal is active
  useEffect(() => {
    if (pet) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [pet]);

  if (!pet) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setFormState('submitting');
    // Simulate pristine backend handshake
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const handleBackToForm = () => {
    setFormState('idle');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-amber-950/40 backdrop-blur-sm">
        {/* Backdrop Trigger click out */}
        <div className="absolute inset-0 cursor-default" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          id="pet-detail-modal"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-amber-150 overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh] md:max-h-[85vh]"
        >
          {/* Close Button Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-md text-amber-700 hover:text-[#2D2D1A] p-2 rounded-full shadow-md border border-amber-150 hover:scale-105 transition-all cursor-pointer focus:outline-none"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Block: Image & Visual Characteristics */}
          <div className="w-full md:w-1/2 relative bg-amber-50 flex flex-col h-[30vh] sm:h-[40vh] md:h-auto">
            <img
              src={pet.imageUrl}
              alt={pet.name}
              className="w-full h-full object-cover select-none flex-1 grayscale-[0.05]"
              referrerPolicy="no-referrer"
            />
            {/* Soft gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none flex flex-col justify-end p-6 md:p-8" />

            {/* Float Caption info inside image */}
            <div className="absolute bottom-4 left-4 z-10 text-white space-y-1">
              <span className="bg-amber-500 text-white font-sans text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-md">
                {pet.breed}
              </span>
              <h3 className="text-3xl font-display font-medium tracking-tight drop-shadow-sm">{pet.name}</h3>
              <p className="font-sans text-xs text-amber-50/90 drop-shadow-sm">
                Compromiso ético • Listo para un nuevo hogar
              </p>
            </div>
          </div>

          {/* Right Block: Content Details & Multi-state adoption Form */}
          <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between space-y-6 max-h-[60vh] sm:max-h-[50vh] md:max-h-none">
            {/* Upper Content Details */}
            <div className="space-y-6">
              {/* Pet Info Highlights Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-amber-50/40 p-3 rounded-2xl text-center border border-amber-150">
                  <span className="block font-sans text-[10px] uppercase font-bold text-amber-500 tracking-wider">
                    Edad
                  </span>
                  <span className="block font-sans font-extrabold text-sm sm:text-base text-amber-900">
                    {pet.age}
                  </span>
                </div>
                <div className="bg-amber-50/40 p-3 rounded-2xl text-center border border-amber-150">
                  <span className="block font-sans text-[10px] uppercase font-bold text-amber-500 tracking-wider">
                    Sexo
                  </span>
                  <span className="block font-sans font-extrabold text-sm sm:text-base text-amber-900">
                    {pet.gender}
                  </span>
                </div>
                <div className="bg-amber-50/40 p-3 rounded-2xl text-center border border-amber-150">
                  <span className="block font-sans text-[10px] uppercase font-bold text-amber-500 tracking-wider">
                    Tamaño
                  </span>
                  <span className="block font-sans font-extrabold text-sm sm:text-base text-amber-900">
                    {pet.size}
                  </span>
                </div>
              </div>

              {/* Bio & Temperament Details */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-sans font-semibold text-sm text-amber-900 uppercase tracking-widest border-b border-amber-150 pb-2">
                    Sobre {pet.name}
                  </h4>
                  <p className="font-sans text-sm text-amber-955 mt-2 leading-relaxed">
                    {pet.description}
                  </p>
                </div>

                {/* Energy Indicator Level */}
                <div className="flex items-center space-x-3 bg-amber-100/20 p-3 rounded-xl border border-amber-150">
                  <span className="font-sans text-xs font-bold text-amber-900">Nivel de Energía:</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <span
                        key={level}
                        className={`w-3 h-3 rounded-full ${
                          level <= pet.energyLevel ? 'bg-amber-500' : 'bg-amber-100'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-sans text-[11px] text-amber-500/80 italic">
                    {pet.energyLevel >= 4 ? 'Muy Activo' : pet.energyLevel >= 3 ? 'Moderado' : 'Tranquilo'}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {pet.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-amber-50 text-amber-800 border border-amber-100 font-sans text-[11px] font-bold px-2.5 py-1 rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                  {pet.personality.map((trait) => (
                    <span
                      key={trait}
                      className="bg-emerald-50 text-emerald-800 border border-emerald-100 font-sans text-[11px] font-bold px-2.5 py-1 rounded-lg"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                {/* Health and Medical Protocol */}
                <div className="space-y-1.5">
                  <h5 className="font-sans font-bold text-xs text-amber-900 uppercase tracking-wider flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-emerald-600" />
                    <span>Protocolo Médico de Entrega</span>
                  </h5>
                  <p className="font-sans text-xs text-amber-500/80 leading-normal pl-6">
                    {pet.healthStatus}
                  </p>
                </div>

                {/* Benefits Included with adoption/purchase */}
                <div className="space-y-2">
                  <h5 className="font-sans font-bold text-xs text-amber-900 uppercase tracking-wider flex items-center space-x-2">
                    <Gift className="w-4 h-4 text-amber-600" />
                    <span>Lote de Cortesía Incluido</span>
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-6">
                    {pet.includedBenefits.map((benefit) => (
                      <li key={benefit} className="font-sans text-xs text-amber-850 flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sub-form section */}
            <div className="pt-6 border-t border-amber-150">
              <AnimatePresence mode="wait">
                {formState === 'idle' && (
                  <motion.form
                    key="inquiry-form-idle"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <h4 className="font-display font-medium text-[#2D2D1A] text-lg mb-1.5">
                        Solicitar Información o Cita
                      </h4>
                      <p className="font-sans text-xs text-amber-500/80">
                        ¿Interesado en {pet.name}? Envíanos tus datos para agendar una cita o resolver tus dudas. Valor de entrega: <span className="font-bold text-amber-600 text-sm">${pet.price}</span>.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-amber-500 mb-1">Nombre Completo</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 border border-amber-150 focus:border-amber-400 bg-[#FBF9F5] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 font-sans text-amber-900"
                          placeholder="p. ej. Sofía Pérez"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-amber-500 mb-1">Correo Electrónico</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 border border-amber-150 focus:border-amber-400 bg-[#FBF9F5] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 font-sans text-amber-900"
                          placeholder="sofia@gmail.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-amber-500 mb-1">Teléfono o WhatsApp</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 border border-amber-150 focus:border-amber-400 bg-[#FBF9F5] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 font-sans text-amber-900"
                          placeholder="+54 9 11 5555-1234"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-sans font-bold text-sm rounded-xl shadow-xl transition-all text-center flex items-center justify-center space-x-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <Phone className="w-4 h-4 animate-shake" />
                      <span>Agendar Cita de Presentación</span>
                    </button>
                  </motion.form>
                )}

                {formState === 'submitting' && (
                  <motion.div
                    key="inquiry-form-submitting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-10 text-center flex flex-col items-center justify-center space-y-3"
                  >
                    <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
                    <span className="font-sans font-semibold text-sm text-amber-900">
                      Procesando solicitud de cita...
                    </span>
                    <span className="font-sans text-xs text-amber-500/80">
                      Enlazando con nuestros expertos éticos de Fauna
                    </span>
                  </motion.div>
                )}

                {formState === 'success' && (
                  <motion.div
                    key="inquiry-form-success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 text-center space-y-3"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <div>
                      <h4 className="font-sans font-bold text-emerald-950 text-sm">
                        ¡Gracias, {formData.name}!
                      </h4>
                      <p className="font-sans text-xs text-emerald-900/80 mt-1 leading-normal">
                        Tu solicitud para conocer a <strong>{pet.name}</strong> ha sido registrada con éxito. Nos pondremos en contacto contigo por teléfono/WhatsApp (<strong>{formData.phone}</strong>) o por correo para confirmar tu visita presencial hoy mismo.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleBackToForm}
                      className="py-1.5 px-3.5 bg-white hover:bg-amber-50 border border-emerald-200 hover:border-emerald-300 text-emerald-800 font-sans font-semibold text-xs rounded-lg shadow-sm transition-all cursor-pointer"
                    >
                      Enviar otra duda
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
