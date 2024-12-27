export interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  image: string;
  photos: string[];
  location: string;
  interests: string[];
}

export const profiles: Profile[] = [
  {
    id: '1',
    name: 'Sofia Silva',
    age: 28,
    bio: 'Apaixonada por música, viagens e boa comida. Adoro explorar novos restaurantes e conhecer diferentes culturas através da gastronomia. Nas horas vagas, toco violão e faço aulas de dança.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    photos: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    ],
    location: 'São Paulo, SP',
    interests: ['Música', 'Viagens', 'Gastronomia', 'Dança', 'Fotografia']
  },
  {
    id: '2',
    name: 'Lucas Santos',
    age: 31,
    bio: 'Desenvolvedor apaixonado por tecnologia e esportes. Surfista nas horas vagas e sempre em busca da próxima onda perfeita. Amo café, programação e passar tempo ao ar livre.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    photos: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    ],
    location: 'Rio de Janeiro, RJ',
    interests: ['Tecnologia', 'Surf', 'Café', 'Programação', 'Esportes']
  },
  {
    id: '3',
    name: 'Julia Costa',
    age: 26,
    bio: 'Fotógrafa profissional, amante de café e livros. Adoro capturar momentos especiais e contar histórias através das minhas fotos. Sempre com um livro na bolsa e uma câmera em mãos.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
    photos: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    ],
    location: 'Curitiba, PR',
    interests: ['Fotografia', 'Café', 'Literatura', 'Arte', 'Viagens']
  },
  {
    id: '4',
    name: 'Pedro Oliveira',
    age: 29,
    bio: 'Chef de cozinha, adora natureza e aventuras. Especializado em culinária italiana e sempre experimentando novas receitas. Nas horas vagas, faço trilhas e pratico escalada.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    photos: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    ],
    location: 'Florianópolis, SC',
    interests: ['Gastronomia', 'Natureza', 'Aventura', 'Escalada', 'Culinária']
  }
];