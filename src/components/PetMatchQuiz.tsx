/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowLeft, RefreshCw, PawPrint, Sparkles } from 'lucide-react';
import { QUIZ_QUESTIONS, PETS_DATA } from '../data/pets';
import { Pet } from '../types';

interface PetMatchQuizProps {
  onPetClick: (pet: Pet) => void;
}

export default function PetMatchQuiz({ onPetClick }: PetMatchQuizProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [recommendations, setRecommendations] = useState<Pet[]>([]);

  const totalSteps = QUIZ_QUESTIONS.length;

  const handleSelectOption = (questionId: number, optionValue: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionValue }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      calculateResults();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setRecommendations([]);
  };

  const calculateResults = () => {
    // Basic Scoring algorithm for actual pets
    const scores: Record<string, number> = {};

    // Initialize scores
    PETS_DATA.forEach((pet) => {
      scores[pet.id] = 0;
    });

    // Score based on answers
    QUIZ_QUESTIONS.forEach((q) => {
      const selectedValue = answers[q.id];
      if (!selectedValue) return;

      const option = q.options.find((opt) => opt.value === selectedValue);
      if (!option) return;

      PETS_DATA.forEach((pet) => {
        // Boost points if type is recommended
        if (option.recommendTypes.includes(pet.type)) {
          scores[pet.id] += 5;
        }

        // Boost points per matching tag
        option.matchTags.forEach((tag) => {
          if (pet.tags.some((pt) => pt.toLowerCase() === tag.toLowerCase())) {
            scores[pet.id] += 3;
          }
        });

        // Boost points matching sizes
        if (selectedValue === 'small' && pet.size === 'Pequeño') scores[pet.id] += 2;
        if (selectedValue === 'medium' && pet.size === 'Mediano') scores[pet.id] += 2;
        if (selectedValue === 'large' && pet.size === 'Grande') scores[pet.id] += 2;

        // Boost points matching energy level behavior
        if (selectedValue === 'low' && pet.energyLevel <= 2) scores[pet.id] += 2;
        if (selectedValue === 'high' && pet.energyLevel >= 4) scores[pet.id] += 2;
      });
    });

    // Sort pets by scores descending
    const sortedPets = [...PETS_DATA]
      .map((pet) => ({ pet, score: scores[pet.id] || 0 }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.pet);

    setRecommendations(sortedPets);
    setShowResults(true);
  };

  const progressPercent = Math.round(((currentStep + 1) / totalSteps) * 100);
  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const selectedOptionValue = answers[currentQuestion.id];

  return (
    <section id="matcher" className="py-20 md:py-28 bg-amber-100/30 border-y border-amber-150 relative">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl -z-10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Intro Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-amber-50 rounded-full text-xs font-semibold uppercase text-amber-800 border border-amber-200/50 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
            <span>Asistente Inteligente de Afinidad</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-amber-800 tracking-tight">
            Descubre Tu Compañero Ideal
          </h2>
          <p className="mt-3 text-sm sm:text-base text-amber-500/80 font-sans">
            Responde estas 4 sencillas preguntas sobre tus hábitos de vida y nuestro sistema seleccionará instantáneamente las mascotas disponibles con mayor afinidad a ti.
          </p>
        </div>

        {/* Dynamic Multi-Step Card */}
        <div id="quiz-card" className="bg-white rounded-3xl shadow-xl border border-amber-150 p-6 sm:p-10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="quiz-stepper"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-8"
              >
                {/* Header, Progress indicator & Step title */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-amber-100 text-amber-800 w-10 h-10 rounded-xl flex items-center justify-center font-sans font-extrabold text-sm">
                      {currentStep + 1} / {totalSteps}
                    </div>
                    <div>
                      <span className="font-sans text-xs font-bold text-amber-500/50 uppercase tracking-widest leading-3 block">
                        Cuestionario en Curso
                      </span>
                      <span className="font-sans text-[13px] font-semibold text-amber-900 block">
                        Pregunta de Compatibilidad
                      </span>
                    </div>
                  </div>
                  {/* Progress Bar Container */}
                  <div className="w-full sm:w-48 bg-amber-100 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-amber-500 h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-xl sm:text-2xl font-display font-medium text-amber-900 leading-snug">
                  {currentQuestion.question}
                </h3>

                {/* Options Grid */}
                <div className="grid grid-cols-1 gap-4">
                  {currentQuestion.options.map((option) => {
                    const isSelected = selectedOptionValue === option.value;
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleSelectOption(currentQuestion.id, option.value)}
                        className={`w-full text-left p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start space-x-4 ${
                          isSelected
                            ? 'border-amber-400 bg-amber-50/70 shadow-md'
                            : 'border-amber-100 hover:border-amber-200 bg-white'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 shrink-0 mt-0.5 flex items-center justify-center ${
                            isSelected ? 'border-amber-500 bg-amber-500' : 'border-amber-200 bg-transparent'
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <div>
                          <div className={`font-sans font-bold text-sm sm:text-base ${isSelected ? 'text-amber-950' : 'text-amber-900'}`}>
                            {option.text}
                          </div>
                          <div className={`font-sans text-xs sm:text-sm mt-1 leading-normal ${isSelected ? 'text-amber-800' : 'text-amber-500/80'}`}>
                            {option.description}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Back / Next Navigation Controls */}
                <div className="flex items-center justify-between pt-6 border-t border-amber-100">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className={`flex items-center space-x-2 text-sm font-sans font-bold py-2 px-4 rounded-xl transition-all ${
                      currentStep === 0
                        ? 'text-amber-150 cursor-not-allowed'
                        : 'text-amber-500 hover:bg-amber-50 hover:text-amber-950 cursor-pointer'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Atrás</span>
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={!selectedOptionValue}
                    className={`flex items-center space-x-2 text-sm font-sans font-bold py-3 px-6 rounded-xl transition-all select-none ${
                      selectedOptionValue
                        ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-xl cursor-pointer'
                        : 'bg-amber-105 bg-amber-100 text-amber-500/40 cursor-not-allowed'
                    }`}
                  >
                    <span>{currentStep === totalSteps - 1 ? 'Calcular afinidad' : 'Siguiente'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="quiz-results"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-8"
              >
                {/* Result header */}
                <div className="text-center space-y-3">
                  <div className="mx-auto bg-amber-50 text-amber-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <PawPrint className="w-6 h-6 fill-amber-500" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-amber-800">
                    ¡Compañeros Ideales Encontrados!
                  </h3>
                  <p className="max-w-md mx-auto font-sans text-xs sm:text-sm text-amber-500/80">
                    Basados en tu estilo de vida, espacio y disponibilidad descritos, estas son las 3 mascotas óptimas que mejor encajan estructuradamente para ti.
                  </p>
                </div>

                {/* Matching Grid Outcomes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {recommendations.map((pet, idx) => (
                    <motion.div
                      key={pet.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group bg-white rounded-2xl border border-amber-150 overflow-hidden shadow-xl flex flex-col hover:shadow-2xl transition-all"
                    >
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-amber-50">
                        <img
                          src={pet.imageUrl}
                          alt={pet.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 grayscale-[0.08]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2 right-2 bg-amber-500 text-white font-sans font-bold text-[10px] uppercase tracking-wider py-1 px-2.5 rounded-full shadow-sm">
                          {idx === 0 ? 'Fósforo Ideal (98%)' : idx === 1 ? 'Afinidad alta (89%)' : 'Afinidad alta (85%)'}
                        </div>
                      </div>

                      {/* Info Block */}
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-1">
                          <h4 className="font-display font-medium text-base text-amber-900 group-hover:text-amber-400 transition-colors">
                            {pet.name}
                          </h4>
                          <p className="font-sans text-xs text-amber-500/80 leading-tight">
                            {pet.breed} • {pet.age}
                          </p>
                          <p className="font-sans text-[11px] text-amber-700 italic font-semibold leading-normal pt-1">
                            "{pet.nature}"
                          </p>
                        </div>

                        <button
                          onClick={() => onPetClick(pet)}
                          className="mt-4 w-full py-2 px-3 rounded-xl border border-amber-100 bg-amber-50/50 group-hover:bg-amber-500 group-hover:text-white text-amber-800 font-sans font-semibold text-xs transition-all cursor-pointer flex items-center justify-center space-x-1"
                        >
                          <span>Conocer a {pet.name}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Reset button footer */}
                <div className="flex md:justify-center pt-4">
                  <button
                    onClick={handleReset}
                    className="flex items-center space-x-2 py-3 px-6 rounded-xl border border-amber-150 text-amber-800 font-sans font-bold text-sm bg-white hover:bg-amber-100/50 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-200 w-full md:w-auto justify-center"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Realizar test nuevamente</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
