/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, HelpCircle, CheckCircle2, Loader2, Sparkles } from 'lucide-react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petInterest: 'none',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      name: '',
      email: '',
      phone: '',
      petInterest: 'none',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="absolute top-0 left-10 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Corporate details & coordinates (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-sans text-xs font-bold text-amber-500 tracking-wider uppercase">
                Ubicación y Horarios
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#2D2D1A] tracking-tight leading-tight">
                Visítanos en Nuestra Boutique
              </h2>
              <p className="font-sans text-sm sm:text-base text-amber-500/80 leading-relaxed">
                Queremos que conozcas a tu futuro compañero en un ambiente relajado y seguro. Nuestras instalaciones en Palermo cuentan con salas de socialización especialmente acústicas para el confort de los cachorros.
              </p>
            </div>

            {/* Quick Contact Rows */}
            <div className="space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="bg-amber-50 text-amber-500 p-3 rounded-2xl border border-amber-150 shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-amber-900 text-sm">Dirección Física</h4>
                  <p className="font-sans text-xs sm:text-sm text-amber-500/80 mt-0.5">Av. del Libertador 4800, Palermo, CABA, Argentina</p>
                  <span className="font-sans text-[11px] font-bold text-amber-600 underline cursor-pointer mt-1 block">Ver mapa de Google</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-50 text-amber-500 p-3 rounded-2xl border border-amber-150 shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-amber-900 text-sm">Horarios de Atención</h4>
                  <p className="font-sans text-xs sm:text-sm text-amber-500/80 mt-0.5">Lunes a Sábado: 09:00 AM - 19:30 PM</p>
                  <p className="font-sans text-xs sm:text-sm text-amber-500/85">Domingos y Feriados: 10:00 AM - 14:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-50 text-amber-500 p-3 rounded-2xl border border-amber-150 shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-amber-900 text-sm">Teléfono / WhatsApp Directo</h4>
                  <p className="font-sans text-xs sm:text-sm text-amber-500/80 mt-0.5">+54 9 11 3333-5555</p>
                  <p className="font-sans text-xs text-emerald-600 font-bold flex items-center space-x-1 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1" />
                    <span>Asesores en línea recibiendo dudas</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-50 text-amber-500 p-3 rounded-2xl border border-amber-150 shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-amber-900 text-sm">Correo Electrónico Oficial</h4>
                  <p className="font-sans text-xs sm:text-sm text-amber-500/80 mt-0.5">hola@faunaboutique.com</p>
                  <p className="font-sans text-xs sm:text-sm text-amber-505">criadero@faunaboutique.com</p>
                </div>
              </div>

            </div>

            {/* Ethic Commitment Badge inside left column */}
            <div className="bg-emerald-50/30 border border-emerald-100 rounded-3xl p-5 flex items-start space-x-4 select-none">
              <div className="bg-emerald-500 text-white p-2.5 rounded-xl mt-1 shrink-0">
                <ShieldCheckIcon />
              </div>
              <div>
                <h4 className="font-sans font-bold text-[13px] sm:text-sm text-emerald-950">Compromiso de No-Jaulas de Fauna</h4>
                <p className="font-sans text-xs text-emerald-900/80 leading-normal mt-0.5">
                  Todas nuestras mascotas viven libres en salas abiertas compartidas. Promovemos el libre esparcimiento y juego diario para forjar temperamentos equilibrados y dóciles.
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: General Inquiry interactive form (7 columns) */}
          <div className="lg:col-span-7 bg-amber-100/10 p-6 sm:p-10 rounded-4xl border border-amber-150 shadow-sm relative">
            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.form
                  key="contact-form-idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <h3 className="font-display font-medium text-2xl text-amber-900 leading-snug">
                      Formulario de Consulta General
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-amber-500/80 leading-normal">
                      ¿Tienes alguna pregunta sobre razas específicas, envíos nacionales programados o disponibilidad para visitar la boutique? Déjanos tu mensaje.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-amber-500 mb-1.5">Nombre Completo</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-amber-150 focus:border-amber-400 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 font-sans text-amber-900"
                        placeholder="ej. Juan Carlos Gómez"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-amber-500 mb-1.5">Correo Electrónico</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-amber-150 focus:border-amber-400 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 font-sans text-amber-900"
                        placeholder="juan@gomez.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-amber-500 mb-1.5">Teléfono Móvil (WhatsApp)</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-amber-150 focus:border-amber-400 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 font-sans text-amber-900"
                        placeholder="+54 9 11 6666-7777"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-amber-500 mb-1.5">Mascota de Interés</label>
                      <select
                        name="petInterest"
                        value={formData.petInterest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-amber-150 focus:border-amber-400 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 font-sans cursor-pointer text-amber-900 font-semibold"
                      >
                        <option value="none">Aún no estoy seguro</option>
                        <option value="dog">Cachorro de Perro</option>
                        <option value="cat">Gatito de Raza</option>
                        <option value="bird">Guacamayo / Ave de Jaula</option>
                        <option value="rabbit">Conejo Cabeza de León</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-amber-500 mb-1.5">Tu Mensaje o Consulta</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-amber-150 focus:border-amber-400 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 font-sans resize-none text-amber-900"
                      placeholder="Me gustaría saber si el conejito Copito sigue de alta esta semana y qué vacuna le corresponde..."
                    />
                  </div>

                  {/* Submission triggers */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-sans font-bold text-sm rounded-xl shadow-xl transition-all text-center flex items-center justify-center space-x-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Consulta Directa</span>
                  </button>
                </motion.form>
              )}

              {status === 'loading' && (
                <motion.div
                  key="contact-form-loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-24 text-center flex flex-col items-center justify-center space-y-4"
                >
                  <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
                  <div>
                    <h4 className="font-sans font-bold text-amber-900 text-sm">Enviando mensaje...</h4>
                    <p className="font-sans text-xs text-amber-500/80 mt-1">Conectando canales con soporte comercial institucional</p>
                  </div>
                </motion.div>
              )}

              {status === 'success' && (
                <motion.div
                  key="contact-form-success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-6 text-center space-y-5"
                >
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                  <div className="space-y-2">
                    <h3 className="font-sans font-black text-2xl text-emerald-950 leading-tight">
                      ¡Consulta Recibida, {formData.name}!
                    </h3>
                    <p className="font-sans text-sm text-emerald-900/80 leading-relaxed max-w-md mx-auto">
                      Hemos recibido tu mensaje con éxito. Un asesor experto se pondrá en contacto contigo a la brevedad por WhatsApp o correo ({formData.email}) para guiarte en el proceso de adopción responsable.
                    </p>
                  </div>
                  
                  <div className="pt-4 flex justify-center">
                    <button
                      onClick={handleReset}
                      className="py-3 px-8 bg-white hover:bg-amber-50 border border-emerald-200 text-emerald-800 font-sans font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
                    >
                      Volver a consultar
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

// Inlined helper icons to maintain clean module imports
function ShieldCheckIcon() {
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
      className="lucide lucide-shield"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l7-2a1 1 0 0 1 .48 0l7 2A1 1 0 0 1 20 6v7z" />
    </svg>
  );
}
