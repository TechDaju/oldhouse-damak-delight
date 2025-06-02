
export type MenuItem = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string | string[];
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
};

export const menuItems: MenuItem[] = [
  // TANDOORI ROTI NAAN
  {
    id: 1,
    name: "Butter Naan",
    description: "Soft and fluffy Indian bread brushed with butter",
    image: "/lovable-uploads/d405f684-9e3a-4d1c-a3e9-f7198fee6b04.png",
    category: "bread",
    isVegetarian: true,
  },
  {
    id: 2,
    name: "Rumali Roti",
    description: "Ultra-thin handkerchief bread, soft and delicate",
    image: "/lovable-uploads/d405f684-9e3a-4d1c-a3e9-f7198fee6b04.png",
    category: "bread",
    isVegetarian: true,
  },
  {
    id: 3,
    name: "Tandoori Roti",
    description: "Traditional clay oven baked whole wheat bread",
    image: "/lovable-uploads/d405f684-9e3a-4d1c-a3e9-f7198fee6b04.png",
    category: "bread",
    isVegetarian: true,
  },
  {
    id: 4,
    name: "Lacha Paratha",
    description: "Layered flaky bread with crispy texture",
    image: "/lovable-uploads/d405f684-9e3a-4d1c-a3e9-f7198fee6b04.png",
    category: "bread",
    isVegetarian: true,
  },

  // SPECIAL HANDI BIRYANI
  {
    id: 5,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with tender chicken and spices",
    image: "/lovable-uploads/6a566013-b7c8-4c29-b52f-8d2bf2c3d3d8.png",
    category: ["lunch", "dinner"],
    isPopular: true,
    isSpicy: true,
  },
  {
    id: 6,
    name: "Mutton Biryani",
    description: "Fragrant rice dish with succulent mutton pieces",
    image: "/lovable-uploads/6a566013-b7c8-4c29-b52f-8d2bf2c3d3d8.png",
    category: ["lunch", "dinner"],
    isSpicy: true,
  },
  {
    id: 7,
    name: "Veg Biryani",
    description: "Mixed vegetables and basmati rice cooked with aromatic spices",
    image: "/lovable-uploads/6a566013-b7c8-4c29-b52f-8d2bf2c3d3d8.png",
    category: ["lunch", "dinner"],
    isVegetarian: true,
  },

  // INDIAN MAIN COURSE
  {
    id: 8,
    name: "Rara Chicken",
    description: "Spicy chicken curry with minced meat and aromatic spices",
    image: "/lovable-uploads/d405f684-9e3a-4d1c-a3e9-f7198fee6b04.png",
    category: ["lunch", "dinner"],
    isSpicy: true,
  },
  {
    id: 9,
    name: "Chicken Curry",
    description: "Traditional chicken cooked in rich gravy with Indian spices",
    image: "/lovable-uploads/d405f684-9e3a-4d1c-a3e9-f7198fee6b04.png",
    category: ["lunch", "dinner"],
    isSpicy: true,
    isPopular: true,
  },
  {
    id: 10,
    name: "Chicken Kadhai",
    description: "Chicken cooked with bell peppers and onions in kadhai",
    image: "/lovable-uploads/d405f684-9e3a-4d1c-a3e9-f7198fee6b04.png",
    category: ["lunch", "dinner"],
    isSpicy: true,
  },
  {
    id: 11,
    name: "Chicken Butter Masala",
    description: "Creamy tomato-based chicken curry with rich flavors",
    image: "/lovable-uploads/d405f684-9e3a-4d1c-a3e9-f7198fee6b04.png",
    category: ["lunch", "dinner"],
    isPopular: true,
  },
  {
    id: 12,
    name: "Paneer Butter Masala",
    description: "Cottage cheese in rich tomato and butter gravy",
    image: "/lovable-uploads/d405f684-9e3a-4d1c-a3e9-f7198fee6b04.png",
    category: ["lunch", "dinner"],
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: 13,
    name: "Dal Tadka",
    description: "Yellow lentils tempered with cumin and spices",
    image: "/lovable-uploads/d405f684-9e3a-4d1c-a3e9-f7198fee6b04.png",
    category: ["lunch", "dinner"],
    isVegetarian: true,
  },

  // TANDOORI SNACKS
  {
    id: 14,
    name: "Tandoori Whole Chicken",
    description: "Whole chicken marinated and cooked in tandoor with 2pcs Rumali Roti",
    image: "/lovable-uploads/d405f684-9e3a-4d1c-a3e9-f7198fee6b04.png",
    category: "appetizers",
    isSpicy: true,
    isPopular: true,
  },
  {
    id: 15,
    name: "Chicken Malai Tikka",
    description: "Creamy and tender chicken tikka marinated in spices",
    image: "/lovable-uploads/d405f684-9e3a-4d1c-a3e9-f7198fee6b04.png",
    category: "appetizers",
  },
  {
    id: 16,
    name: "Chicken Seekh Kabab",
    description: "Minced chicken grilled on skewers with aromatic spices",
    image: "/lovable-uploads/45edd55a-b500-42d8-8f39-3f335538e9b2.png",
    category: "appetizers",
    isSpicy: true,
  },

  // NON-VEG STARTERS
  {
    id: 17,
    name: "Special Timur Chicken",
    description: "Chicken marinated with special timur (Sichuan pepper) spices",
    image: "/lovable-uploads/9c8c9e6a-695e-4277-91a2-e71bb09f82cb.png",
    category: "appetizers",
    isSpicy: true,
  },
  {
    id: 18,
    name: "Butter Pepper Garlic Chicken",
    description: "Juicy chicken pieces tossed in butter, pepper and garlic",
    image: "/lovable-uploads/9c8c9e6a-695e-4277-91a2-e71bb09f82cb.png",
    category: "appetizers",
  },
  {
    id: 19,
    name: "Hot Wings",
    description: "Spicy chicken wings with hot sauce coating",
    image: "/lovable-uploads/9c8c9e6a-695e-4277-91a2-e71bb09f82cb.png",
    category: "appetizers",
    isSpicy: true,
    isPopular: true,
  },
  {
    id: 20,
    name: "Chicken Nuggets",
    description: "Crispy golden chicken nuggets served with dipping sauce",
    image: "/lovable-uploads/9c8c9e6a-695e-4277-91a2-e71bb09f82cb.png",
    category: "appetizers",
  },

  // NEPALI SWAD SNACKS
  {
    id: 21,
    name: "Mutton Jhaneko",
    description: "Traditional Nepali style grilled mutton with spices",
    image: "/lovable-uploads/45edd55a-b500-42d8-8f39-3f335538e9b2.png",
    category: "appetizers",
    isSpicy: true,
  },
  {
    id: 22,
    name: "Chicken Jhankeo",
    description: "Grilled chicken pieces with traditional Nepali spices",
    image: "/lovable-uploads/45edd55a-b500-42d8-8f39-3f335538e9b2.png",
    category: "appetizers",
    isSpicy: true,
  },

  // SEKUWA
  {
    id: 23,
    name: "Pork Sekuwa",
    description: "Traditional Nepali grilled pork with authentic spices",
    image: "/lovable-uploads/45edd55a-b500-42d8-8f39-3f335538e9b2.png",
    category: "appetizers",
    isSpicy: true,
  },
  {
    id: 24,
    name: "Chicken Sekuwa",
    description: "Grilled chicken marinated in traditional Nepali style",
    image: "/lovable-uploads/45edd55a-b500-42d8-8f39-3f335538e9b2.png",
    category: "appetizers",
    isSpicy: true,
    isPopular: true,
  },
  {
    id: 25,
    name: "Mutton Sekuwa",
    description: "Tender mutton pieces grilled with aromatic spices",
    image: "/lovable-uploads/45edd55a-b500-42d8-8f39-3f335538e9b2.png",
    category: "appetizers",
    isSpicy: true,
  },

  // CHOILA
  {
    id: 26,
    name: "Pork Choila",
    description: "Traditional Newari dish with grilled pork and spices",
    image: "/lovable-uploads/23c29be0-1b8a-4706-bc29-b421652bf414.png",
    category: "appetizers",
    isSpicy: true,
  },
  {
    id: 27,
    name: "Chicken Choila",
    description: "Grilled chicken mixed with traditional Newari spices",
    image: "/lovable-uploads/23c29be0-1b8a-4706-bc29-b421652bf414.png",
    category: "appetizers",
    isSpicy: true,
    isPopular: true,
  },
  {
    id: 28,
    name: "Buff Choila",
    description: "Traditional buffalo meat choila with authentic flavors",
    image: "/lovable-uploads/23c29be0-1b8a-4706-bc29-b421652bf414.png",
    category: "appetizers",
    isSpicy: true,
  },

  // FISH
  {
    id: 29,
    name: "Whole Steam Fish",
    description: "Fresh fish steamed with aromatic herbs and spices",
    image: "/lovable-uploads/23c29be0-1b8a-4706-bc29-b421652bf414.png",
    category: ["lunch", "dinner"],
  },
  {
    id: 30,
    name: "Whole Grill Fish",
    description: "Perfectly grilled whole fish with special marinades",
    image: "/lovable-uploads/23c29be0-1b8a-4706-bc29-b421652bf414.png",
    category: ["lunch", "dinner"],
    isPopular: true,
  },
  {
    id: 31,
    name: "Fish Fry",
    description: "Crispy fried fish pieces with spicy coating",
    image: "/lovable-uploads/23c29be0-1b8a-4706-bc29-b421652bf414.png",
    category: "appetizers",
    isSpicy: true,
  },

  // VEG SNACKS
  {
    id: 32,
    name: "Paneer Chilly",
    description: "Cottage cheese cubes tossed with bell peppers and onions",
    image: "/lovable-uploads/a2c90894-bbd8-4e42-b1b9-1c8432ac4f86.png",
    category: "appetizers",
    isVegetarian: true,
    isSpicy: true,
  },
  {
    id: 33,
    name: "Mushroom Pakouda",
    description: "Crispy mushroom fritters with spiced batter",
    image: "/lovable-uploads/a2c90894-bbd8-4e42-b1b9-1c8432ac4f86.png",
    category: "appetizers",
    isVegetarian: true,
  },
  {
    id: 34,
    name: "French Fries",
    description: "Golden crispy potato fries served with ketchup",
    image: "/lovable-uploads/a2c90894-bbd8-4e42-b1b9-1c8432ac4f86.png",
    category: "appetizers",
    isVegetarian: true,
    isPopular: true,
  },

  // MOMO
  {
    id: 35,
    name: "Chicken Chilly Momo",
    description: "Steamed chicken momos tossed in spicy chili sauce",
    image: "/lovable-uploads/6e1d9578-fe51-4c6c-999a-b6044281e058.png",
    category: ["breakfast", "lunch"],
    isSpicy: true,
    isPopular: true,
  },
  {
    id: 36,
    name: "Chicken Steam Momo",
    description: "Traditional steamed chicken dumplings with dipping sauce",
    image: "/lovable-uploads/6e1d9578-fe51-4c6c-999a-b6044281e058.png",
    category: ["breakfast", "lunch"],
    isPopular: true,
  },
  {
    id: 37,
    name: "Pork Steam Momo",
    description: "Steamed pork dumplings with traditional flavors",
    image: "/lovable-uploads/6e1d9578-fe51-4c6c-999a-b6044281e058.png",
    category: ["breakfast", "lunch"],
  },
  {
    id: 38,
    name: "Chicken Fried Momo",
    description: "Deep fried chicken momos with crispy golden exterior",
    image: "/lovable-uploads/6e1d9578-fe51-4c6c-999a-b6044281e058.png",
    category: ["breakfast", "lunch"],
  },

  // NOODLES
  {
    id: 39,
    name: "Chicken Chowmein",
    description: "Stir-fried noodles with chicken and vegetables",
    image: "/lovable-uploads/6e1d9578-fe51-4c6c-999a-b6044281e058.png",
    category: ["lunch", "dinner"],
    isPopular: true,
  },
  {
    id: 40,
    name: "Veg Chowmein",
    description: "Stir-fried noodles with mixed vegetables",
    image: "/lovable-uploads/6e1d9578-fe51-4c6c-999a-b6044281e058.png",
    category: ["lunch", "dinner"],
    isVegetarian: true,
  },
  {
    id: 41,
    name: "Chicken Thukpa",
    description: "Traditional Tibetan noodle soup with chicken",
    image: "/lovable-uploads/6e1d9578-fe51-4c6c-999a-b6044281e058.png",
    category: ["lunch", "dinner"],
  },

  // FRIED RICE
  {
    id: 42,
    name: "Chicken Fried Rice",
    description: "Fragrant rice stir-fried with chicken and vegetables",
    image: "/lovable-uploads/6a566013-b7c8-4c29-b52f-8d2bf2c3d3d8.png",
    category: ["lunch", "dinner"],
    isPopular: true,
  },
  {
    id: 43,
    name: "Veg Fried Rice",
    description: "Colorful rice dish with mixed vegetables",
    image: "/lovable-uploads/6a566013-b7c8-4c29-b52f-8d2bf2c3d3d8.png",
    category: ["lunch", "dinner"],
    isVegetarian: true,
  },

  // SOUP
  {
    id: 44,
    name: "Chicken Soup",
    description: "Comforting clear chicken soup with herbs",
    image: "/lovable-uploads/6a566013-b7c8-4c29-b52f-8d2bf2c3d3d8.png",
    category: "appetizers",
  },
  {
    id: 45,
    name: "Mushroom Soup",
    description: "Creamy mushroom soup with rich flavors",
    image: "/lovable-uploads/6a566013-b7c8-4c29-b52f-8d2bf2c3d3d8.png",
    category: "appetizers",
    isVegetarian: true,
  },

  // PIZZA
  {
    id: 46,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella and basil",
    image: "/lovable-uploads/60f66462-cd4e-4b6d-bc09-c8a5bda0f479.png",
    category: ["lunch", "dinner"],
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: 47,
    name: "Chicken Pizza",
    description: "Pizza topped with seasoned chicken and cheese",
    image: "/lovable-uploads/60f66462-cd4e-4b6d-bc09-c8a5bda0f479.png",
    category: ["lunch", "dinner"],
    isPopular: true,
  },

  // BURGERS
  {
    id: 48,
    name: "Chicken Burger",
    description: "Juicy chicken patty with fresh vegetables and sauce",
    image: "/lovable-uploads/60f66462-cd4e-4b6d-bc09-c8a5bda0f479.png",
    category: ["lunch", "dinner"],
    isPopular: true,
  },
  {
    id: 49,
    name: "Veg Burger",
    description: "Crispy vegetable patty with fresh lettuce and tomato",
    image: "/lovable-uploads/60f66462-cd4e-4b6d-bc09-c8a5bda0f479.png",
    category: ["lunch", "dinner"],
    isVegetarian: true,
  },

  // SALAD
  {
    id: 50,
    name: "Green Salad",
    description: "Fresh mix of lettuce, cucumber, tomato and onions",
    image: "/lovable-uploads/a2c90894-bbd8-4e42-b1b9-1c8432ac4f86.png",
    category: "appetizers",
    isVegetarian: true,
  },
  {
    id: 51,
    name: "Fruit Salad",
    description: "Seasonal fresh fruits with honey dressing",
    image: "/lovable-uploads/a2c90894-bbd8-4e42-b1b9-1c8432ac4f86.png",
    category: "desserts",
    isVegetarian: true,
  },
];
