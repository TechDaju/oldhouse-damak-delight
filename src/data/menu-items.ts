
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
    image: "/lovable-uploads/a86b2775-8153-438f-90b5-2ebae7d7f2d9.png",
    category: "breakfast",
    isVegetarian: true,
  },
  {
    id: 2,
    name: "Nepali Omelette",
    description: "Eggs with chopped tomatoes, onions, green chilies, and Nepali spices, served with toasted bread.",
    price: "रू 180",
    image: "/lovable-uploads/a86b2775-8153-438f-90b5-2ebae7d7f2d9.png",
    category: "breakfast",
  },
  {
    id: 3,
    name: "Chicken Momo",
    description: "Steamed dumplings filled with minced chicken, served with tomato chutney.",
    price: "रू 250",
    image: "/lovable-uploads/a86b2775-8153-438f-90b5-2ebae7d7f2d9.png",
    category: ["breakfast", "lunch"],
    isPopular: true,
  },
  {
    id: 4,
    name: "Vegetable Momo",
    description: "Steamed dumplings filled with mixed vegetables, served with tomato chutney.",
    price: "रू 220",
    image: "/lovable-uploads/a86b2775-8153-438f-90b5-2ebae7d7f2d9.png",
    category: ["breakfast", "lunch"],
    isVegetarian: true,
  },
  {
    id: 5,
    name: "Dal Bhat Tarkari",
    description: "Traditional Nepali meal with steamed rice, lentil soup, and vegetable curry.",
    price: "रू 350",
    image: "/lovable-uploads/292792cf-2213-4d5e-937a-0e42b1ed84a9.png",
    category: ["lunch", "dinner"],
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: 6,
    name: "Chicken Thakali Set",
    description: "Complete meal with rice, lentils, chicken curry, vegetables, and pickles.",
    price: "रू 450",
    image: "/lovable-uploads/292792cf-2213-4d5e-937a-0e42b1ed84a9.png",
    category: ["lunch", "dinner"],
    isSpicy: true,
    isPopular: true,
  },
  {
    id: 7,
    name: "Alu Tama",
    description: "Fermented bamboo shoots cooked with potatoes in a tangy soup.",
    price: "रू 220",
    image: "/lovable-uploads/a86b2775-8153-438f-90b5-2ebae7d7f2d9.png",
    category: "lunch",
    isVegetarian: true,
  },
  {
    id: 8,
    name: "Choila",
    description: "Spicy grilled buffalo meat with herbs and spices.",
    price: "रू 320",
    image: "/lovable-uploads/a86b2775-8153-438f-90b5-2ebae7d7f2d9.png",
    category: ["lunch", "dinner"],
    isSpicy: true,
  },
  {
    id: 9,
    name: "Masala Tea",
    description: "Traditional spiced tea with cardamom, cinnamon, and ginger.",
    price: "रू 80",
    image: "/lovable-uploads/e56aff36-e7cd-4d04-9782-803a116f178a.png",
    category: "beverages",
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: 10,
    name: "Lassi",
    description: "Refreshing yogurt-based sweet drink.",
    price: "रू 150",
    image: "/lovable-uploads/e56aff36-e7cd-4d04-9782-803a116f178a.png",
    category: "beverages",
    isVegetarian: true,
  },
  {
    id: 11,
    name: "Sikarni",
    description: "Sweetened yogurt with nuts, cardamom, and saffron.",
    price: "रू 180",
    image: "/lovable-uploads/292792cf-2213-4d5e-937a-0e42b1ed84a9.png",
    category: "desserts",
    isVegetarian: true,
  },
  {
    id: 12,
    name: "Kheer",
    description: "Traditional rice pudding with cardamom, nuts, and raisins.",
    price: "रू 150",
    image: "/lovable-uploads/292792cf-2213-4d5e-937a-0e42b1ed84a9.png",
    category: "desserts",
    isVegetarian: true,
    isPopular: true,
  },
];
