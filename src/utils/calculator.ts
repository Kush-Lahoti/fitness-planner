import { UserStats, CalculatedMetrics, Gender } from '../types';

export function calculateMetrics(stats: UserStats): CalculatedMetrics | null {
  const { weight, height, waist, neck, hip, gender, age } = stats;
  
  if (!weight || !height || !waist || !neck || !age) return null;
  if (gender === 'Female' && !hip) return null;

  const heightInMeters = Number(height) / 100;
  const bmi = Number((Number(weight) / (heightInMeters * heightInMeters)).toFixed(1));
  
  let bmiCategory = 'Normal weight';
  if (bmi < 18.5) bmiCategory = 'Underweight';
  else if (bmi >= 25 && bmi < 29.9) bmiCategory = 'Overweight';
  else if (bmi >= 30) bmiCategory = 'Obese';

  let bodyFat = 0;
  const h = Number(height);
  const w = Number(waist);
  const n = Number(neck);
  const hp = Number(hip);

  try {
    if (gender === 'Male') {
      const log1 = Math.log10(w - n);
      const log2 = Math.log10(h);
      if (w <= n) return null;
      const den = 1.0324 - 0.19077 * log1 + 0.15456 * log2;
      bodyFat = (495 / den) - 450;
    } else {
      const log1 = Math.log10(w + hp - n);
      const log2 = Math.log10(h);
      if (w + hp <= n) return null;
      const den = 1.29579 - 0.35004 * log1 + 0.22100 * log2;
      bodyFat = (495 / den) - 450;
    }
  } catch (e) {
    return null;
  }

  return {
    bmi,
    bmiCategory,
    bodyFat: Number(bodyFat.toFixed(1))
  };
}

export function recommendGoal(metrics: CalculatedMetrics, age: number, gender: Gender): string {
  if (age < 18) {
    return "Maintain (Adolescent recommendation: focus on healthy habits rather than strict cutting or bulking).";
  }

  const bf = metrics.bodyFat;

  if (gender === 'Male') {
    if (bf < 15) return "Bulk";
    if (bf > 27) return "Cut";
    return "Maintain";
  } else {
    if (bf < 20) return "Bulk";
    if (bf > 35) return "Cut";
    return "Maintain";
  }
}
