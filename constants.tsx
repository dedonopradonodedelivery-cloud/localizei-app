import React from 'react';
import { Utensils, Briefcase, PartyPopper, Shirt, Coffee, Home, Dog, Armchair, Scissors, Heart, GraduationCap, Settings, Dumbbell, CarFront, Wrench, Sun } from 'lucide-react';
import { AdType, Category, Store, Story, ServiceLead } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Alimentação', slug: 'food', icon: <Utensils className="w-6 h-6 text-primary-500" /> },
  { id: 'new-1', name: 'Beleza', slug: 'beauty', icon: <Scissors className="w-6 h-6 text-primary-500" /> },
  { id: 'new-2', name: 'Saúde', slug: 'health', icon: <Heart className="w-6 h-6 text-primary-500" /> },
  { id: 'new-3', name: 'Educação', slug: 'education', icon: <GraduationCap className="w-6 h-6 text-primary-500" /> },
  { id: 'new-4', name: 'Serviços', slug: 'services', icon: <Settings className="w-6 h-6 text-primary-500" /> },
  { id: 'new-5', name: 'Esportes', slug: 'sports', icon: <Dumbbell className="w-6 h-6 text-primary-500" /> },
  { id: 'new-6', name: 'Autos', slug: 'autos', icon: <CarFront className="w-6 h-6 text-primary-500" /> },
  { id: 'new-7', name: 'Assistências', slug: 'assistance', icon: <Wrench className="w-6 h-6 text-primary-500" /> },
  { id: 'new-8', name: 'Bem-estar', slug: 'wellness', icon: <Sun className="w-6 h-6 text-primary-500" /> },
  { id: '2', name: 'Profissionais', slug: 'pros', icon: <Briefcase className="w-6 h-6 text-primary-500" /> },
  { id: '3', name: 'Festas', slug: 'party', icon: <PartyPopper className="w-6 h-6 text-primary-500" /> },
  { id: '4', name: 'Moda', slug: 'fashion', icon: <Shirt className="w-6 h-6 text-primary-500" /> },
  { id: '5', name: 'Mercados', slug: 'grocery', icon: <Coffee className="w-6 h-6 text-primary-500" /> },
  { id: '6', name: 'Imóveis', slug: 'real-estate', icon: <Home className="w-6 h-6 text-primary-500" /> },
  { id: '7', name: 'Pets', slug: 'pets', icon: <Dog className="w-6 h-6 text-primary-500" /> },
  { id: '8', name: 'Casa', slug: 'home-decor', icon: <Armchair className="w-6 h-6 text-primary-500" /> },
];

export const STORIES: Story[] = [
  { id: '1', name: 'Mercado ...', image: 'https://picsum.photos/100/100?random=1' },
  { id: '2', name: 'Empório d...', image: 'https://picsum.photos/100/100?random=2', isLive: true },
  { id: '3', name: 'Padaria P...', image: 'https://picsum.photos/100/100?random=3' },
  { id: '4', name: 'Açougue ...', image: 'https://picsum.photos/100/100?random=4' },
  { id: '5', name: 'Hortifru...', image: 'https://picsum.photos/100/100?random=5' },
  { id: '6', name: 'Farmácia...', image: 'https://picsum.photos/100/100?random=6' },
];

// Contains a mix of Premium (Top), Local, and Organic stores
export const STORES: Store[] = [
  {
    id: 'premium-1',
    name: 'Casas Pedro',
    category: 'Alimentos',
    image: 'https://picsum.photos/400/250?random=10',
    rating: 4.9,
    distance: '0.5km',
    adType: AdType.PREMIUM,
    description: 'A maior variedade de grãos e especiarias da Freguesia.',
    cashback: 5,
    isMarketplace: true,
    price: 49.90
  },
  {
    id: 'premium-2',
    name: 'Hamburgueria Brasa',
    category: 'Alimentação',
    image: 'https://picsum.photos/400/250?random=11',
    rating: 4.8,
    distance: '1.2km',
    adType: AdType.PREMIUM,
    description: 'O melhor burger artesanal do bairro.',
    cashback: 3,
    isMarketplace: true,
    price: 32.50
  },
  {
    id: 'local-1',
    name: 'Ótica Visão',
    category: 'Moda',
    image: 'https://picsum.photos/400/250?random=12',
    rating: 4.5,
    distance: '0.3km',
    adType: AdType.LOCAL,
    description: 'Óculos de sol e grau com preço justo.',
    cashback: 2,
    isMarketplace: true,
    price: 199.00
  },
  {
    id: 'organic-1',
    name: 'PetShop Amigo Fiel',
    category: 'Pets',
    image: 'https://picsum.photos/400/250?random=13',
    rating: 4.2,
    distance: '2.0km',
    adType: AdType.ORGANIC,
    description: 'Banho e tosa com carinho.',
    isMarketplace: false
  },
  {
    id: 'organic-2',
    name: 'Padaria Estrela',
    category: 'Alimentação',
    image: 'https://picsum.photos/400/250?random=14',
    rating: 4.6,
    distance: '0.8km',
    adType: AdType.ORGANIC,
    description: 'Pão quente toda hora.',
    isMarketplace: true,
    price: 12.00
  }
];

export const LEADS: ServiceLead[] = [
  { id: '1', title: 'Instalação de Ar Condicionado', category: 'Climatização', urgency: 'Alta', priceToUnlock: 3.90, maskedName: 'Carlos M.', district: 'Freguesia' },
  { id: '2', title: 'Bolo de Aniversário (3kg)', category: 'Festas', urgency: 'Média', priceToUnlock: 3.90, maskedName: 'Ana P.', district: 'Pechincha' },
  { id: '3', title: 'Troca de Fiação Elétrica', category: 'Eletricista', urgency: 'Alta', priceToUnlock: 3.90, maskedName: 'Roberto S.', district: 'Freguesia' },
];