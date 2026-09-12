import { DietBudget, DietPlan } from '../types';

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
      breakfast: { name: 'Breakfast', image: IMAGES.breakfast, items: [
        'Full fat milk with dryfruits',
        'Instant oats with added dryfruits / plant / yeast protein in milk',
        'Peanut butter roll or sandwich',
        'Besan chilla'
      ]},
      lunch: { name: 'Lunch', image: IMAGES.lunch, items: [
        'Homemade roti & sabzi (keep the quantity of sabzi high)',
        'Try adding millets like jowar or bajra in rotis',
        'Rice, lentil, and salad',
        'Vegetable soya Pulao, Khichdi, or Chole Chawal',
        'Always keep legumes / paneer / tofu in your diet'
      ]},
      snacks: { name: 'Snacks', image: IMAGES.snacks, items: [
        'Dahi with sattu powder',
        'Bhuna chana (roasted chana)',
        'Makhana',
        'Masala coated soya chunks'
      ]},
      dinner: { name: 'Dinner', image: IMAGES.dinner, items: [
        'Khichdi',
        'Moongdal chilla',
        'Paneer',
        'Sauteed vegetables'
      ]},
      tips: { name: 'Tips & Recipes', image: IMAGES.tips, items: [
        'Add chia seeds, pumpkin seeds, or watermelon seeds to dahi',
        'Add ghee in your diet',
        'You can also grind the oatmeal to make a smoothie'
      ]}
    },
    'Open Budget': {
      breakfast: { name: 'Breakfast', image: IMAGES.breakfast, items: [
        'High protein oats topped with berries',
        'Protein smoothies',
        'Chillas or Cereals',
        'Peanut butter toast'
      ]},
      lunch: { name: 'Lunch', image: IMAGES.lunch, items: [
        'Homemade roti & sabzi (keep the quantity of sabzi high)',
        'Try adding millets like jowar or bajra in rotis',
        'Rice, lentil, and salad',
        'Vegetable soya Pulao, Khichdi, or Chole Chawal',
        'Always keep legumes / paneer / tofu in your diet'
      ]},
      snacks: { name: 'Snacks', image: IMAGES.snacks, items: [
        'Bhuna chana (roasted chana) & Makhana',
        'Masala coated soya chunks',
        'Greek yoghurt with whey protein',
        'One scoop of whey protein with milk'
      ]},
      dinner: { name: 'Dinner', image: IMAGES.dinner, items: [
        'Khichdi',
        'Moongdal chilla',
        'Paneer',
        'Sauteed vegetables'
      ]},
      tips: { name: 'Tips & Recipes', image: IMAGES.tips, items: [
        'Add chia seeds, pumpkin seeds, or watermelon seeds to dahi',
        'Add ghee in your diet',
        'You can also grind the oatmeal to make a smoothie'
      ]}
    }
  },
  Cut: {
    'Budget-Friendly': {
      breakfast: { name: 'Breakfast', image: IMAGES.breakfast, items: [
        'Water with dryfruits',
        'Instant oats with added dryfruits / plant / yeast protein (made in water)',
        'Peanut butter roll or sandwich',
        'Besan chilla'
      ]},
      lunch: { name: 'Lunch', image: IMAGES.lunch, items: [
        'Homemade roti & sabzi (Decrease roti amount, increase sabzi and protein amount)',
        'Try adding millets like jowar or bajra in rotis',
        'Rice, lentil, and EXTRA salad',
        'Vegetable soya Pulao, Khichdi, or Chole Chawal',
        'Always keep legumes / paneer / tofu in your diet'
      ]},
      snacks: { name: 'Snacks', image: IMAGES.snacks, items: [
        'Dahi with sattu powder',
        'Bhuna chana (roasted chana)',
        'Makhana',
        'Masala coated soya chunks',
        '(Avoid extra dairy milk)'
      ]},
      dinner: { name: 'Dinner', image: IMAGES.dinner, items: [
        'Khichdi',
        'Moongdal chilla',
        'Paneer',
        'Sauteed vegetables'
      ]},
      tips: { name: 'Tips & Recipes', image: IMAGES.tips, items: [
        'Be in a calorie deficit! Eat fewer carbs and more protein',
        'Add chia / pumpkin / watermelon seeds to dahi',
        'You can grind the oatmeal to make a smoothie (using water instead of milk)'
      ]}
    },
    'Open Budget': {
      breakfast: { name: 'Breakfast', image: IMAGES.breakfast, items: [
        'High protein oats topped with berries (made with water)',
        'Smoothies (water based)',
        'Chillas or Cereals',
        'Peanut butter toast'
      ]},
      lunch: { name: 'Lunch', image: IMAGES.lunch, items: [
        'Homemade roti & sabzi (Decrease roti amount, increase sabzi and protein amount)',
        'Try adding millets like jowar or bajra in rotis',
        'Rice, lentil, and EXTRA salad',
        'Vegetable soya Pulao, Khichdi, or Chole Chawal',
        'Always keep legumes / paneer / tofu in your diet'
      ]},
      snacks: { name: 'Snacks', image: IMAGES.snacks, items: [
        'Bhuna chana & Makhana',
        'Masala coated soya chunks',
        'Greek yoghurt with whey protein',
        'One scoop whey protein with water'
      ]},
      dinner: { name: 'Dinner', image: IMAGES.dinner, items: [
        'Khichdi',
        'Moongdal chilla',
        'Paneer',
        'Sauteed vegetables'
      ]},
      tips: { name: 'Tips & Recipes', image: IMAGES.tips, items: [
        'Be in a calorie deficit! Eat fewer carbs and more protein',
        'Add chia / pumpkin / watermelon seeds to dahi',
        'You can grind the oatmeal to make a smoothie (using water instead of milk)'
      ]}
    }
  }
};
