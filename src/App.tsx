/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PetShowcase from './components/PetShowcase';
import PetMatchQuiz from './components/PetMatchQuiz';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import PetModal from './components/PetModal';
import { Pet } from './types';

export default function App() {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased selection:bg-amber-150 selection:text-amber-900 scroll-smooth">
      
      {/* 1. Header Navigation */}
      <Header onQuizClick={() => handleScrollToSection('matcher')} />

      {/* 2. Hero Banner */}
      <Hero
        onQuizClick={() => handleScrollToSection('matcher')}
        onExploreClick={() => handleScrollToSection('pets')}
      />

      {/* 3. Interactive Pet Finder/Showcase */}
      <PetShowcase onPetSelect={(pet) => setSelectedPet(pet)} />

      {/* 4. Matchmaker Smart Quiz */}
      <PetMatchQuiz onPetClick={(pet) => setSelectedPet(pet)} />

      {/* 5. Our Premium Services */}
      <Services />

      {/* 6. Testimonials Stories */}
      <Testimonials />

      {/* 7. Contact Details Page and Inquiry Form */}
      <InquiryForm />

      {/* 8. Unified Footer */}
      <Footer />

      {/* 9. Floating Details & Adoption Modal portal */}
      <PetModal pet={selectedPet} onClose={() => setSelectedPet(null)} />
      
    </div>
  );
}
