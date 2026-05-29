// ── WARDROBE ITEMS ────────────────────────────────────────────────────────────
// Each item has: id, label, type, cost (coins), svgKey, unlocked (default false)

export const WARDROBE_ITEMS = {
  hair: [
    { id: "h1", label: "Ponytail",       cost: 0,   color: "#8B4513", unlocked: true  },
    { id: "h2", label: "Curly Afro",     cost: 20,  color: "#2C1810", unlocked: false },
    { id: "h3", label: "Long Straight",  cost: 30,  color: "#1a1a1a", unlocked: false },
    { id: "h4", label: "Box Braids",     cost: 40,  color: "#4A0E8F", unlocked: false },
    { id: "h5", label: "Space Buns",     cost: 50,  color: "#C0392B", unlocked: false },
    { id: "h6", label: "Crown Locs",     cost: 60,  color: "#F39C12", unlocked: false },
  ],
  top: [
    { id: "t1", label: "White T-Shirt",  cost: 0,   color: "#F5F5F5", unlocked: true  },
    { id: "t2", label: "Purple Hoodie",  cost: 25,  color: "#7B68EE", unlocked: false },
    { id: "t3", label: "Yellow Crop",    cost: 30,  color: "#F1C40F", unlocked: false },
    { id: "t4", label: "Denim Jacket",   cost: 45,  color: "#2980B9", unlocked: false },
    { id: "t5", label: "Pink Blouse",    cost: 35,  color: "#FF69B4", unlocked: false },
    { id: "t6", label: "Star Sweater",   cost: 55,  color: "#9B59B6", unlocked: false },
  ],
  bottom: [
    { id: "b1", label: "Blue Jeans",     cost: 0,   color: "#1F618D", unlocked: true  },
    { id: "b2", label: "Yellow Skirt",   cost: 20,  color: "#F4D03F", unlocked: false },
    { id: "b3", label: "Pink Shorts",    cost: 25,  color: "#F1948A", unlocked: false },
    { id: "b4", label: "Floral Skirt",   cost: 40,  color: "#E74C3C", unlocked: false },
    { id: "b5", label: "Purple Leggings",cost: 30,  color: "#8E44AD", unlocked: false },
    { id: "b6", label: "Plaid Skirt",    cost: 50,  color: "#27AE60", unlocked: false },
  ],
  shoes: [
    { id: "s1", label: "White Sneakers", cost: 0,   color: "#FAFAFA", unlocked: true  },
    { id: "s2", label: "Pink Boots",     cost: 25,  color: "#E91E63", unlocked: false },
    { id: "s3", label: "Yellow Trainers",cost: 30,  color: "#FFEB3B", unlocked: false },
    { id: "s4", label: "Purple Heels",   cost: 40,  color: "#9C27B0", unlocked: false },
    { id: "s5", label: "Blue Platforms", cost: 45,  color: "#2196F3", unlocked: false },
    { id: "s6", label: "Rainbow Slides", cost: 60,  color: "#FF5722", unlocked: false },
  ],
  accessory: [
    { id: "a1", label: "None",           cost: 0,   color: "transparent", unlocked: true },
    { id: "a2", label: "Star Earrings",  cost: 15,  color: "#F1C40F", unlocked: false },
    { id: "a3", label: "Red Bow",       cost: 20,  color: "#E74C3C", unlocked: false },
    { id: "a4", label: "Glasses",        cost: 25,  color: "#2C3E50", unlocked: false },
    { id: "a5", label: "Flower Crown",   cost: 35,  color: "#FF69B4", unlocked: false },
    { id: "a6", label: "Gold Necklace",  cost: 45,  color: "#F39C12", unlocked: false },
  ],
};

export const CATEGORY_LABELS = {
  hair: "💇 Hair",
  top: "👕 Top",
  bottom: "👖 Bottom",
  shoes: "👟 Shoes",
  accessory: "✨ Accessory",
};

export const COIN_REWARDS = {
  studied:   8,
  confident: 5,
};

export const ACHIEVEMENT_BADGES = [
  { id: "first",    label: "First Step!",    desc: "Complete your very first session",  icon: "🌱", threshold: 1,  type: "sessions" },
  { id: "five",     label: "High Five!",     desc: "Complete 5 study sessions",         icon: "🖐️", threshold: 5,  type: "sessions" },
  { id: "ten",      label: "Perfect Ten!",   desc: "Complete 10 study sessions",        icon: "🔟", threshold: 10, type: "sessions" },
  { id: "coins10",  label: "Coin Collector", desc: "Earn 10 coins",                     icon: "🪙", threshold: 10, type: "coins" },
  { id: "coins50",  label: "Coin Hoarder",   desc: "Earn 50 coins",                     icon: "💰", threshold: 50, type: "coins" },
  { id: "coins100", label: "Rich Scholar!",  desc: "Earn 100 coins",                    icon: "👑", threshold: 100,type: "coins" },
  { id: "fullday",  label: "Day Champion",   desc: "Complete all sessions in one day",  icon: "🏅", threshold: 1,  type: "fullday" },
  { id: "science",  label: "Scientist",      desc: "Complete all Science sessions",     icon: "🔬", threshold: 8,  type: "subject_Science" },
  { id: "french",   label: "Bonjour!",       desc: "Complete all French sessions",      icon: "🥐", threshold: 8,  type: "subject_French" },
  { id: "fashionista","label": "Fashionista",desc: "Unlock 5 wardrobe items",           icon: "👗", threshold: 5,  type: "unlocked" },
];
