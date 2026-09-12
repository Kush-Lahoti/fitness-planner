import { Goal, DietBudget, DietPlan } from '../types';

const IMAGES = {
  breakfast: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
  lunch: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&w=800&q=80",
  snacks: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=800&q=80",
  dinner: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  tips: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
};

export const DIET_PLANS: Record<string, Record<DietBudget, DietPlan>> = {
  Bulk: {
    'Budget-Friendly': {
      breakfast: { name: 'Breakfast', image: IMAGES.breakfast, items: 'Full fat milk with dryfruit, instant oats with added dryfruits/plant/yeast protein in milk, peanut butter roll/sandwich, besan chilla.' },
      lunch: { name: 'Lunch', image: IMAGES.lunch, items: 'Homemade roti sabzi (keep the quantity of sabzi more), try adding millets like jowar, bajra etc in rotis, rice, lentil, salad, Vegetable soya Pulao, Khichdi, or Chole Chawal. Always keep legumes/paneer/tofu in diet.' },
      snacks: { name: 'Snacks', image: IMAGES.snacks, items: 'Dahi with sattu powder, bhuna chana (roasted chana), makhana, masala coated soya chunks.' },
      dinner: { name: 'Dinner', image: IMAGES.dinner, items: 'Khichdi, moongdal chilla, paneer, saute vegetables.' },
      tips: { name: 'Tips & Recipes', image: IMAGES.tips, items: 'Add chia seeds / pumpkin / watermelon seeds to dahi. Add ghee in your diet. You can also grind the oatmeal to make a smoothie.' }
    },
    'Open Budget': {
      breakfast: { name: 'Breakfast', image: IMAGES.breakfast, items: 'High protein oats topped with berries, smoothies, chillas, cereals, peanut butter toast.' },
      lunch: { name: 'Lunch', image: IMAGES.lunch, items: 'Homemade roti sabzi (keep the quantity of sabzi more), try adding millets like jowar, bajra etc in rotis, rice, lentil, salad, Vegetable soya Pulao, Khichdi, or Chole Chawal. Always keep legumes/paneer/tofu in diet.' },
      snacks: { name: 'Snacks', image: IMAGES.snacks, items: 'Bhuna chana (roasted chana), makhana, masala coated soya chunks, Greek yoghurt with whey protein, and one scoop whey with milk.' },
      dinner: { name: 'Dinner', image: IMAGES.dinner, items: 'Khichdi, moongdal chilla, paneer, saute vegetables.' },
      tips: { name: 'Tips & Recipes', image: IMAGES.tips, items: 'Add chia seeds / pumpkin / watermelon seeds to dahi. Add ghee in your diet. You can also grind the oatmeal to make a smoothie.' }
    }
  },
  Cut: {
    'Budget-Friendly': {
      breakfast: { name: 'Breakfast', image: IMAGES.breakfast, items: 'Water with dryfruit, instant oats with added dryfruits/plant/yeast protein in water, peanut butter roll/sandwich, besan chilla.' },
      lunch: { name: 'Lunch', image: IMAGES.lunch, items: 'Homemade roti sabzi (decrease amount of roti but increase amount of sabzi and protein), try adding millets like jowar, bajra etc in rotis, rice, lentil, extra salad, Vegetable soya Pulao, Khichdi, or Chole Chawal. Always keep legumes/paneer/tofu in diet.' },
      snacks: { name: 'Snacks', image: IMAGES.snacks, items: 'Dahi with sattu powder, bhuna chana (roasted chana), makhana, masala coated soya chunks. (Avoid extra dairy milk).' },
      dinner: { name: 'Dinner', image: IMAGES.dinner, items: 'Khichdi, moongdal chilla, paneer, saute vegetables.' },
      tips: { name: 'Tips & Recipes', image: IMAGES.tips, items: 'Be in a calorie deficit! Eat less carbs and more protein. Add chia/pumpkin/watermelon seeds to dahi. You can also grind the oatmeal to make a smoothie (with water).' }
    },
    'Open Budget': {
      breakfast: { name: 'Breakfast', image: IMAGES.breakfast, items: 'High protein oats topped with berries (made with water), smoothies (water based), chillas, cereals, peanut butter toast.' },
      lunch: { name: 'Lunch', image: IMAGES.lunch, items: 'Homemade roti sabzi (decrease amount of roti but increase amount of sabzi and protein), try adding millets like jowar, bajra etc in rotis, rice, lentil, extra salad, Vegetable soya Pulao, Khichdi, or Chole Chawal. Always keep legumes/paneer/tofu in diet.' },
      snacks: { name: 'Snacks', image: IMAGES.snacks, items: 'Bhuna chana, makhana, masala coated soya chunks, Greek yoghurt with whey protein, and one scoop whey with water.' },
      dinner: { name: 'Dinner', image: IMAGES.dinner, items: 'Khichdi, moongdal chilla, paneer, saute vegetables.' },
      tips: { name: 'Tips & Recipes', image: IMAGES.tips, items: 'Be in a calorie deficit! Eat less carbs and more protein. Add chia/pumpkin/watermelon seeds to dahi. You can also grind the oatmeal to make a smoothie (with water).' }
    }
  }
};
