/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PetType = 'dog' | 'cat' | 'bird' | 'rabbit' | 'all';

export interface Pet {
  id: string;
  name: string;
  type: Exclude<PetType, 'all'>;
  breed: string;
  age: string; // e.g., '2 meses', '1 año'
  gender: 'Macho' | 'Hembra';
  size: 'Pequeño' | 'Mediano' | 'Grande';
  description: string;
  price: number;
  tags: string[];
  imageUrl: string;
  personality: string[];
  energyLevel: number; // 1-5 scale
  nature: string; // e.g., 'Alegre y juguetón', 'Tranquilo y observador'
  healthStatus: string; // e.g., 'Vacunas al día, desparasitado'
  includedBenefits: string[]; // e.g., ['Garantía de salud', 'Kit de bienvenida', 'Primera consulta veterinaria gratis']
}

export interface Service {
  id: string;
  iconName: string; // references lucide icons dynamically
  name: string;
  description: string;
  priceDescription: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  avatarUrl: string;
  review: string;
  rating: number;
  adoptedPetName: string;
  adoptedPetBreed: string;
  adoptedPetType: Exclude<PetType, 'all'>;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    description: string;
    value: string;
    // Map of tags matched by this selection
    matchTags: string[];
    // Suggest target pet types
    recommendTypes: Exclude<PetType, 'all'>[];
  }[];
}
