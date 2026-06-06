/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Pet, Service, Testimonial, QuizQuestion } from '../types';

export const PETS_DATA: Pet[] = [
  {
    id: 'dog_1',
    name: 'Oliver',
    type: 'dog',
    breed: 'Golden Retriever',
    age: '2 meses',
    gender: 'Macho',
    size: 'Grande',
    description: 'Oliver es el cachorro típico de Golden Retriever: lleno de vida, sumamente cariñoso y juguetón. Le encanta perseguir pelotas, aprender trucos sencillos y estar cerca de su familia humana. Es ideal para hogares con niños y familias activas.',
    price: 950,
    tags: ['Familiar', 'Paciente', 'Jugador', 'Inteligente'],
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800',
    personality: ['Extrovertido', 'Extremadamente mimoso', 'Alta energía', 'Fácil de entrenar'],
    energyLevel: 5,
    nature: 'Alegre, protector y muy sociable',
    healthStatus: 'Carnet de vacunación completo para su edad, desparasitado internamente y con chip de registro.',
    includedBenefits: ['Garantía de salud hereditaria de 1 año', 'Primera consulta veterinaria gratuita', 'Kit de alimento premium Royal Canin para cachorro']
  },
  {
    id: 'cat_1',
    name: 'Milo',
    type: 'cat',
    breed: 'Persa Blanco',
    age: '3 meses',
    gender: 'Macho',
    size: 'Mediano',
    description: 'Milo destaca por su majestuoso misticismo y timidez inicial que pronto se convierte en un amor devoto. Su pelaje esponjoso es suave como el algodón. Es silencioso, calmado y prefiere los lugares cálidos y siestas junto a la ventana. Ideal para departamento.',
    price: 820,
    tags: ['Calmo', 'Cariñoso', 'Elegante', 'Independiente'],
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
    personality: ['Relajado', 'Paciente', 'Muy limpio', 'Silencioso'],
    energyLevel: 1,
    nature: 'Tranquilo y sumamente sensible',
    healthStatus: 'Libre de leucemia felina (vif/vi标), vacunas al día y desparasitado.',
    includedBenefits: ['Asesoría de peluquería en casa', 'Kit de iniciación para gato', 'Garantía sanitaria de 6 meses']
  },
  {
    id: 'dog_2',
    name: 'Bella',
    type: 'dog',
    breed: 'Bulldog Francés',
    age: '2 meses',
    gender: 'Hembra',
    size: 'Pequeño',
    description: 'Bella es una pequeña caja de sorpresas. Su temperamento alegre y su mirada expresiva te robarán el corazón al instante. Adaptable a la vida de departamento ya que no requiere caminatas extenuantes, prefiere los juegos cortos dentro de casa.',
    price: 1100,
    tags: ['Depto', 'Divertido', 'Pequeño', 'Leal'],
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800',
    personality: ['Juguetona', 'Atenta', 'Chispeante', 'Le encanta la atención'],
    energyLevel: 3,
    nature: 'Divertida, terca pero muy amorosa y dócil',
    healthStatus: 'Explicación pediátrica realizada, vacunas de base colocadas (parvovirus/moquillo), desparasitaciones al día.',
    includedBenefits: ['Garantía genética y respiratoria de 1 año', 'Certificado de pureza de raza', 'Pack de juguetes masticables']
  },
  {
    id: 'cat_2',
    name: 'Luna',
    type: 'cat',
    breed: 'Siamés Moderno',
    age: '4 meses',
    gender: 'Hembra',
    size: 'Mediano',
    description: 'Luna es una gatita curiosa, estilizada y conversadora por naturaleza. Le fascina explorar cada rincón, subirse a las alturas y entablar juegos interactivos contigo. Es ideal para quienes buscan una compañera gatuna comunicativa y sumamente expresiva.',
    price: 680,
    tags: ['Curioso', 'Activo', 'Vocal', 'Inteligente'],
    imageUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80&w=800',
    personality: ['Fascinación por el juego', 'Compañera fiel', 'Inteligente y astuta', 'Vocal y cariñosa'],
    energyLevel: 4,
    nature: 'Sumamente expresiva y trepadora audaz',
    healthStatus: 'Test de VIF/VILEF negativo, vacuna triple felina y desparasitación externa con pipeta.',
    includedBenefits: ['Rascador de cartón premium', 'Cuponera de descuento en alimento húmedo', 'Garantía médica básica de 6 meses']
  },
  {
    id: 'bird_1',
    name: 'Kiwi',
    type: 'bird',
    breed: 'Guacamayo Azul',
    age: '5 meses',
    gender: 'Macho',
    size: 'Grande',
    description: 'Kiwi ostenta un plumaje espectacular y una gracia inigualable. Criado a mano por expertos ("papillero"), es sumamente manso con las personas y ya produce algunos silbidos y sonidos imitados. Necesita espacio amplio (aviario) o perchas de esparcimiento.',
    price: 1400,
    tags: ['Colorido', 'Exótico', 'Sociable', 'Longevo'],
    imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30ebd3?auto=format&fit=crop&q=80&w=800',
    personality: ['Muy juguetón', 'Atraído por el color', 'Extremadamente inteligente', 'Buscador de mimos'],
    energyLevel: 3,
    nature: 'Afectuoso, parlanchín y con gran capacidad de aprendizaje',
    healthStatus: 'Sexado por ADN, anillo cerrado homologado, certificado veterinario de salud aviar libre de psitacosis.',
    includedBenefits: ['Manual especializado de cuidados aviares', 'Percha de entrenamiento portátil', 'Saco de mixtura premium de 5kg']
  },
  {
    id: 'dog_3',
    name: 'Simba',
    type: 'dog',
    breed: 'Pomerania Toy',
    age: '2 meses',
    gender: 'Macho',
    size: 'Pequeño',
    description: 'Simba luce como un tierno leoncito de peluche. Es increíblemente enérgico, vivaz e inteligente. A pesar de su pequeñez, tiene una gran personalidad y es muy valeroso. Ideal para vivir en la ciudad y es un excelente compañero para todas las edades.',
    price: 1250,
    tags: ['Amigable', 'Toy', 'Alerta', 'Esponjoso'],
    imageUrl: 'https://images.unsplash.com/photo-1596492784531-6e6eb5f9993c?auto=format&fit=crop&q=80&w=800',
    personality: ['Chispeante y audaz', 'Curiosidad inagotable', 'Muy cariñoso', 'Excelente perro de alarma'],
    energyLevel: 4,
    nature: 'Vivaz, optimista y centrado en sus dueños',
    healthStatus: 'Doble desparasitación, vacunas quintuples correspondientes a su edad veterinaria con sello profesional.',
    includedBenefits: ['Kit de cuidado de pelaje largo (cepillo cardina)', 'Seguro médico de accidentes por 3 meses', 'Libreta sanitaria oficial']
  },
  {
    id: 'rabbit_1',
    name: 'Copito',
    type: 'rabbit',
    breed: 'Cabeza de León',
    age: '3 meses',
    gender: 'Macho',
    size: 'Pequeño',
    description: 'Copito destaca por su carismática melena alrededor de la cabeza. Es un conejito manso que adora comer trozos de zanahoria e interactuar en libertad bajo supervisión. Es muy limpio, ideal como primera mascota bajo cuidado de adolescentes.',
    price: 240,
    tags: ['Manso', 'Silencioso', 'Depto', 'Hierba'],
    imageUrl: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=800',
    personality: ['Asustadizo al inicio', 'Curioso', 'Dócil y pacífico', 'Le encantan las caricias'],
    energyLevel: 2,
    nature: 'Cría casera, adaptada al contacto humano directo',
    healthStatus: 'Desparasitado de coccidios, chequeo de crecimiento dental óptimo realizado por especialista.',
    includedBenefits: ['Paca de heno ecológico de 2kg', 'Dispensador de agua por goteo', 'Guía de hierbas comestibles permitidas']
  },
  {
    id: 'cat_3',
    name: 'Cleo',
    type: 'cat',
    breed: 'Bengala Atigrado',
    age: '3 meses',
    gender: 'Hembra',
    size: 'Mediano',
    description: 'Cleo tiene el elegante e imponente patrón salvaje de un auténtico leopardo de bengala en miniatura, pero con el dulce carácter de un gatito faldero. Le fascina saltar alto y tiene un inusual amor por el agua corriente. Muy ágil e inteligente.',
    price: 1350,
    tags: ['Atlético', 'Listo', 'Exótico', 'Único'],
    imageUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=800',
    personality: ['Excelente cazador', 'Necesita estimulación visual', 'Gran nadador curioso', 'Muy mimosa de noche'],
    energyLevel: 5,
    nature: 'Independiente, vigorosa y sumamente atlética',
    healthStatus: 'Vacunas triples felinas completas, certificado de libre de miocardiopatía hipertrófica hereditaria.',
    includedBenefits: ['Puntero láser interactivo premium', 'Árbol trepador mediano de soga de yute', 'Asesoría de enriquecimiento ambiental nocturno']
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'srv_vet',
    iconName: 'HeartPulse',
    name: 'Clínica Veterinaria Preventiva',
    description: 'Atención médica del más alto nivel con especialistas comprometidos en el cuidado de tu nuevo mejor amigo.',
    priceDescription: 'Consultas desde $25',
    benefits: [
      'Calendario vacunal adaptativo',
      'Desparasitación preventiva sistemática',
      'Chequeo de salud del cachorro de cortesía',
      'Atención de urgencia telefónica 24/7'
    ]
  },
  {
    id: 'srv_groom',
    iconName: 'Scissors',
    name: 'Estética y Peluquería Canina/Felina',
    description: 'Tratamientos de alta gama con cosmética vegana, libres de estrés para que tu mascota brille con estilo.',
    priceDescription: 'Planes desde $35',
    benefits: [
      'Baño premium con champú nutritivo especial',
      'Corte de raza con técnica de tijera o máquina',
      'Corte higiénico y limado de uñas delicado',
      'Spa con ozonoterapia desestresante'
    ]
  },
  {
    id: 'srv_train',
    iconName: 'Award',
    name: 'Escuela de Cachorros y Socialización',
    description: 'Instrucción profesional basada en el refuerzo positivo para crear un vínculo fuerte y un comportamiento ejemplar.',
    priceDescription: 'Sesiones desde $45',
    benefits: [
      'Clases individuales a domicilio o en tienda',
      'Entrenamiento de control de esfínteres acelerado',
      'Socialización temprana guiada por etólogos',
      'Eliminación de la ansiedad por separación'
    ]
  },
  {
    id: 'srv_nutr',
    iconName: 'Sparkles',
    name: 'Asesoría Nutricional Personalizada',
    description: 'Diseñamos la dieta perfecta combinando BARF o croquetas premium para cada etapa de desarrollo de tu mascota.',
    priceDescription: 'Consulta gratuita con tu compra',
    benefits: [
      'Medición de composición corporal integral',
      'Selección de proteínas de alta digestibilidad',
      'Recomendaciones para alergias e intolerancias',
      'Planes de transición nutricional seguros'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test_1',
    name: 'Mariana Silva',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    review: 'Buscaba una mascota que pudiera adaptarse a mi departamento de dos ambientes. Con el cuestionario de compatibilidad de la web encontré a Milo, mi gatito Persa. La entrega fue súper transparente, me dieron su cartilla de salud sellada y la primera consulta veterinaria gratis. ¡Es un ángel!',
    rating: 5,
    adoptedPetName: 'Milo',
    adoptedPetBreed: 'Persa Blanco',
    adoptedPetType: 'cat'
  },
  {
    id: 'test_2',
    name: 'Sebastián Mendoza',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    review: 'Comprar a Oliver (Golden Retriever) ha sido la mejor decisión para nuestra familia. Mis hijos están encantados. Se nota la crianza responsable y ética con la que trabajan en la tienda. Sigue súper saludable y las asesorías post-venta nos han solucionado todas las dudas.',
    rating: 5,
    adoptedPetName: 'Oliver',
    adoptedPetBreed: 'Golden Retriever',
    adoptedPetType: 'dog'
  },
  {
    id: 'test_3',
    name: 'Gabriela Ortiz',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    review: '¡Tienen los mejores cachorros de Bulldog Francés del país! Bella llegó súper dócil, limpia y acostumbrada al contacto humano. Me dieron la garantía sanitaria genética de un año por escrito que me dio mucha paz mental. Sin duda los recomiendo cerradamente.',
    rating: 5,
    adoptedPetName: 'Bella',
    adoptedPetBreed: 'Bulldog Francés',
    adoptedPetType: 'dog'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Cómo clasificaría el espacio de su vivienda actual?',
    options: [
      {
        text: 'Departamento pequeño / Studio',
        description: 'Espacio acotado sin acceso a patio abierto.',
        value: 'small',
        matchTags: ['Depto', 'Pequeño'],
        recommendTypes: ['cat', 'rabbit']
      },
      {
        text: 'Casa mediana o depto amplio con balcón',
        description: 'Espacio adecuado con zonas techadas amplias.',
        value: 'medium',
        matchTags: ['Manso', 'Depto', 'Toy'],
        recommendTypes: ['cat', 'dog', 'rabbit']
      },
      {
        text: 'Casa amplia con jardín grande o campo',
        description: 'Espacio libre extenso, ideal para correr y jugar.',
        value: 'large',
        matchTags: ['Familiar', 'Esponjoso', 'Colorido'],
        recommendTypes: ['dog', 'bird']
      }
    ]
  },
  {
    id: 2,
    question: '¿Cuánto tiempo puede dedicar a paseos y actividades diarias?',
    options: [
      {
        text: 'Menos de 30 minutos al día',
        description: 'Deseo una mascota que sea feliz descansando en casa o en su hábitat.',
        value: 'low',
        matchTags: ['Calmo', 'Silencioso', 'Inteligente'],
        recommendTypes: ['cat', 'rabbit', 'bird']
      },
      {
        text: 'Entre 30 minutos y 1 hora al día',
        description: 'Puedo realizar juegos breves e interactuar de forma moderada.',
        value: 'medium',
        matchTags: ['Manso', 'Leal', 'Depto'],
        recommendTypes: ['cat', 'dog', 'rabbit']
      },
      {
        text: 'Más de 1 hora al día',
        description: '¡Estoy listo para correr, pasear al parque y entrenar trucos!',
        value: 'high',
        matchTags: ['Familiar', 'Jugador', 'Activo', 'Curioso'],
        recommendTypes: ['dog']
      }
    ]
  },
  {
    id: 3,
    question: '¿Qué rasgo de temperamento considera prioritario?',
    options: [
      {
        text: 'Tranquilo y silencioso',
        description: 'Que sea una presencia pacífica, limpia y relajante.',
        value: 'calm',
        matchTags: ['Calmo', 'Manso', 'Elegante'],
        recommendTypes: ['cat', 'rabbit']
      },
      {
        text: 'Socio e interactivo de gran vivacidad',
        description: 'Que adore las caricias, me siga a todas partes y vocalice o juegue mucho.',
        value: 'sociable',
        matchTags: ['Familiar', 'Curioso', 'Longevo', 'Colorido'],
        recommendTypes: ['dog', 'bird', 'cat']
      },
      {
        text: 'Un guardián cariñoso con gran fidelidad',
        description: 'Que forje un lazo inquebrantable de protección mutua.',
        value: 'loyal',
        matchTags: ['Leal', 'Alerta', 'Inteligente'],
        recommendTypes: ['dog']
      }
    ]
  },
  {
    id: 4,
    question: '¿Tiene niños pequeños o adultos mayores en el hogar?',
    options: [
      {
        text: 'Sí, niños pequeños activos',
        description: 'Necesito una mascota extremadamente paciente, juguetona y resistente.',
        value: 'kids',
        matchTags: ['Familiar', 'Jugador', 'Toy'],
        recommendTypes: ['dog', 'cat']
      },
      {
        text: 'Sí, adultos mayores',
        description: 'Priorizo un compañero dócil, que no represente riesgo de tropiezos.',
        value: 'elderly',
        matchTags: ['Calmo', 'Manso', 'Depto'],
        recommendTypes: ['cat', 'rabbit']
      },
      {
        text: 'No, vivimos solo adultos / jóvenes',
        description: 'Cualquier temperamento o nivel de energía se adapta perfectamente.',
        value: 'adults',
        matchTags: ['Único', 'Atlético', 'Curioso', 'Listo'],
        recommendTypes: ['dog', 'cat', 'bird', 'rabbit']
      }
    ]
  }
];
