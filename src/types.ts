export type Gender = 'Male' | 'Female';
export type Goal = 'Bulk' | 'Cut' | 'Maintain';
export type TrainingStyle = 'Gym' | 'Calisthenics' | 'Home Workout' | 'Diet';
export type CalisthenicsLevel = 'Beginner' | 'Intermediate' | 'Advanced';
export type TrainingDays = 2 | 3 | 4 | 5;
export type DietBudget = 'Budget-Friendly' | 'Open Budget';

export interface UserStats {
  age: number | '';
  gender: Gender;
  weight: number | '';
  height: number | '';
  waist: number | '';
  neck: number | '';
  hip: number | '';
}

export interface CalculatedMetrics {
  bmi: number;
  bmiCategory: string;
  bodyFat: number;
}

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
}

export interface WorkoutDay {
  dayNumber: number;
  focus: string;
  muscleGroups: string[];
  exercises: Exercise[];
}

export interface DietMeal {
  name: string;
  items: string;
  image: string;
}

export interface DietPlan {
  breakfast: DietMeal;
  lunch: DietMeal;
  snacks: DietMeal;
  dinner: DietMeal;
  tips: DietMeal;
}
