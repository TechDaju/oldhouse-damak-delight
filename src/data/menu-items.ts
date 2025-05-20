
export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string | string[];
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Sel Roti",
    description: "Traditional Nepali ring-shaped sweet bread made from rice flour, served with yogurt.",
    price: "रू 120",
    image: "https://images.unsplash.com/photo-1626266790987-a2442371786f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "breakfast",
    isVegetarian: true,
  },
  {
    id: 2,
    name: "Nepali Omelette",
    description: "Eggs with chopped tomatoes, onions, green chilies, and Nepali spices, served with toasted bread.",
    price: "रू 180",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    category: "breakfast",
  },
  {
    id: 3,
    name: "Chicken Momo",
    description: "Steamed dumplings filled with minced chicken, served with tomato chutney.",
    price: "रू 250",
    image: "https://images.unsplash.com/photo-1626401109487-256249cfc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: ["breakfast", "lunch"],
    isPopular: true,
  },
  {
    id: 4,
    name: "Vegetable Momo",
    description: "Steamed dumplings filled with mixed vegetables, served with tomato chutney.",
    price: "रू 220",
    image: "https://images.unsplash.com/photo-1670006490059-bf26e24a99c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlJTIwbW9tb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: ["breakfast", "lunch"],
    isVegetarian: true,
  },
  {
    id: 5,
    name: "Dal Bhat Tarkari",
    description: "Traditional Nepali meal with steamed rice, lentil soup, and vegetable curry.",
    price: "रू 350",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    category: ["lunch", "dinner"],
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: 6,
    name: "Chicken Thakali Set",
    description: "Complete meal with rice, lentils, chicken curry, vegetables, and pickles.",
    price: "रू 450",
    image: "https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: ["lunch", "dinner"],
    isSpicy: true,
    isPopular: true,
  },
  {
    id: 7,
    name: "Alu Tama",
    description: "Fermented bamboo shoots cooked with potatoes in a tangy soup.",
    price: "रू 220",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "lunch",
    isVegetarian: true,
  },
  {
    id: 8,
    name: "Choila",
    description: "Spicy grilled buffalo meat with herbs and spices.",
    price: "रू 320",
    image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: ["lunch", "dinner"],
    isSpicy: true,
  },
  {
    id: 9,
    name: "Masala Tea",
    description: "Traditional spiced tea with cardamom, cinnamon, and ginger.",
    price: "रू 80",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "beverages",
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: 10,
    name: "Lassi",
    description: "Refreshing yogurt-based sweet drink.",
    price: "रू 150",
    image: "https://images.unsplash.com/photo-1626108345258-56235cf242a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    category: "beverages",
    isVegetarian: true,
  },
  {
    id: 11,
    name: "Sikarni",
    description: "Sweetened yogurt with nuts, cardamom, and saffron.",
    price: "रू 180",
    image: "https://images.unsplash.com/photo-1541781550486-8a285823768e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    category: "desserts",
    isVegetarian: true,
  },
  {
    id: 12,
    name: "Kheer",
    description: "Traditional rice pudding with cardamom, nuts, and raisins.",
    price: "रू 150",
    image: "https://images.unsplash.com/photo-1633262912438-94079631248d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "desserts",
    isVegetarian: true,
    isPopular: true,
  },
];
