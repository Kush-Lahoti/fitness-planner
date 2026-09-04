import { Goal, TrainingDays, Exercise, WorkoutDay } from '../types';

export const EXERCISE_LIBRARY: Record<string, string[]> = {
  Chest: ['Machine Chest Press', 'Incline Dumbbell Chest Press', 'Flat Dumbbell Chest Press', 'Barbell Bench Press', 'Pec Fly'],
  Shoulders: ['Overhead Dumbbell Shoulder Press', 'Face Pulls', 'Rear Delt Pec Deck Fly', 'Shoulder Shrugs', 'Dumbbell Lateral Raises', 'Front Raises'],
  Triceps: ['Triceps Pushdown', 'Rope Triceps Pushdown', 'Overhead Dumbbell Triceps Extension', 'Dips'],
  Back: ['Lat Pulldown', 'Seated Row', 'Dumbbell Row', 'T-Bar Row', 'Deadlift', 'Back Extension'],
  Biceps: ['Preacher Curl', 'Dumbbell Curl', 'Barbell Curl', 'Hammer Curl', 'Wrist Curl'],
  Legs: ['Barbell Back Squat', 'Romanian Deadlift', 'Leg Press', 'Leg Extension', 'Calf Raises', 'Glute Bridges'],
  Core: ['Hanging Leg Raise', 'Lying Leg Raise', 'Plank', 'Side Plank', 'Russian Twist'],
  Cardio: ['Running', 'Jogging', 'Cycling', 'Swimming', 'Walking']
};

export const SPLITS: Record<Goal, Record<TrainingDays, string[]>> = {
  Bulk: {
    5: ['Chest + Triceps', 'Shoulders', 'Core + Cardio', 'Back + Biceps', 'Legs'],
    4: ['Chest + Triceps + Core', 'Shoulders', 'Back + Biceps', 'Legs'],
    3: ['Chest + Shoulders + Triceps', 'Back + Biceps + Core', 'Legs'],
    2: ['Chest + Back + Shoulders + Biceps + Triceps', 'Legs + Core']
  },
  Cut: {
    5: ['Chest + Triceps', 'Shoulders + Cardio', 'Core + Cardio', 'Back + Biceps', 'Legs + Cardio'],
    4: ['Chest + Triceps + Core', 'Shoulders + Cardio', 'Back + Biceps', 'Cardio + Legs'],
    3: ['Chest + Shoulders + Triceps', 'Back + Biceps + Cardio + Core', 'Legs'],
    2: ['Chest + Back + Shoulders + Biceps + Triceps + Cardio', 'Legs + Core']
  },
  Maintain: {
    5: ['Chest + Triceps', 'Shoulders', 'Core + Cardio', 'Back + Biceps', 'Legs'],
    4: ['Chest + Triceps + Core', 'Shoulders', 'Back + Biceps + Cardio', 'Legs'],
    3: ['Chest + Shoulders + Triceps', 'Back + Biceps + Core', 'Legs'],
    2: ['Chest + Back + Shoulders + Biceps + Triceps', 'Legs + Core']
  }
};

export function generateWorkout(goal: Goal, days: TrainingDays): WorkoutDay[] {
  const split = SPLITS[goal][days];
  
  return split.map((dayFocus, index) => {
    const muscleGroups = dayFocus.split(' + ');
    const generatedExercises: Exercise[] = [];

    muscleGroups.forEach(muscle => {
      let key = muscle;
      if (key === 'Push' || key === 'Upper Body') key = 'Chest';
      if (key === 'Pull') key = 'Back';
      if (key === 'Lower Body') key = 'Legs';

      const available = EXERCISE_LIBRARY[key];
      if (available) {
        const count = key === 'Cardio' || key === 'Core' ? 2 : 3;
        const selected = available.slice(0, count);
        
        selected.forEach(exName => {
          let sets = 3;
          let reps = '8-12 reps';
          let rest = '90 sec';
          if (key === 'Core') { sets = 3; reps = '15-20 reps / 60s hold'; rest = '60 sec'; }
          if (key === 'Cardio') { sets = 1; reps = '20-30 mins'; rest = 'N/A'; }

          generatedExercises.push({ name: exName, sets, reps, rest });
        });
      }
    });

    return {
      dayNumber: index + 1,
      focus: dayFocus,
      muscleGroups,
      exercises: generatedExercises
    };
  });
}
