export type ChapterArray = Array<{
  id: number;
  description: string;
  videoLinks: Array<string>;
  glossary: Array<{ word: string; meaning: string }>;
}>;

export const allChapters: ChapterArray = [
  {
    id: 1,
    description: 'lorem ipsum',
    videoLinks: [
      'https://www.youtube.com/embed/ujOpOzZcjJo',
      'https://www.youtube.com/embed/pKwQlm-wldA',
    ],
    glossary: [
      { word: 'a', meaning: 'very long s' },
      { word: 'b', meaning: 'rgdrgdrgdgdrgdrgrgdrg' },
      { word: 'c', meaning: 'some oder meaning very long' },
    ],
    
  },
  {
    id: 2,
    description: 'lorem ipsum',
    videoLinks: [
      'https://www.youtube.com/embed/obkrMiyDrbs',
      'https://www.youtube.com/embed/s_paZpQvca0',
      'https://www.youtube.com/embed/bDnA_coA168',
    ],
    glossary: [
      { word: 'a', meaning: 'very long s' },
      { word: 'b', meaning: 'rgdrgdrgdgdrgdrgrgdrg' },
      { word: 'c', meaning: 'some oder meaning very long' },
    ],
  },
  {
    id: 3,
    description: 'lorem ipsum',
    videoLinks: [
      'https://www.youtube.com/embed/ujOpOzZcjJo',
      'https://www.youtube.com/embed/pKwQlm-wldA',
    ],
    glossary: [
      { word: 'a', meaning: 'very long s' },
      { word: 'b', meaning: 'rgdrgdrgdgdrgdrgrgdrg' },
      { word: 'c', meaning: 'some oder meaning very long' },
    ],
  },
  {
    id: 4,
    description: 'lorem ipsum',
    videoLinks: [
      'https://www.youtube.com/embed/obkrMiyDrbs',
      'https://www.youtube.com/embed/s_paZpQvca0',
      'https://www.youtube.com/embed/bDnA_coA168',
    ],
    glossary: [
      { word: 'd', meaning: 'very long s' },
      { word: 'b', meaning: 'rgdrgdrgdgdrgdrgrgdrg' },
      { word: 'c', meaning: 'some oder meaning very long' },
    ],
  },
  {
    id: 5,
    description: 'lorem ipsum',
    videoLinks: [
      'https://www.youtube.com/embed/ujOpOzZcjJo',
      'https://www.youtube.com/embed/pKwQlm-wldA',
    ],
    glossary: [
      { word: 'a', meaning: 'very long s' },
      { word: 'b', meaning: 'rgdrgdrgdgdrgdrgrgdrg' },
      { word: 'c', meaning: 'some oder meaning very long' },
    ],
  },
  {
    id: 6,
    description: 'lorem ipsum',
    videoLinks: [
      'https://www.youtube.com/embed/obkrMiyDrbs',
      'https://www.youtube.com/embed/s_paZpQvca0',
      'https://www.youtube.com/embed/bDnA_coA168',
    ],
    glossary: [
      { word: 'a', meaning: 'very long s' },
      { word: 'b', meaning: 'rgdrgdrgdgdrgdrgrgdrg' },
      { word: 'c', meaning: 'some oder meaning very long' },
    ],
  },
];
