import { Goal, TrainingDays, Exercise, WorkoutDay, CalisthenicsLevel } from '../types';

export const GYM_EXERCISES: Record<string, string[]> = {
  Chest: ['Machine Chest Press', 'Incline Dumbbell Chest Press', 'Flat Dumbbell Chest Press', 'Barbell Bench Press', 'Pec Fly'],
  Shoulders: ['Overhead Dumbbell Shoulder Press', 'Face Pulls', 'Rear Delt Pec Deck Fly', 'Shoulder Shrugs', 'Dumbbell Lateral Raises', 'Front Raises'],
  Triceps: ['Triceps Pushdown', 'Rope Triceps Pushdown', 'Overhead Dumbbell Triceps Extension', 'Dips'],
  Back: ['Lat Pulldown', 'Seated Row', 'Dumbbell Row', 'T-Bar Row', 'Deadlift', 'Back Extension'],
  Biceps: ['Preacher Curl', 'Dumbbell Curl', 'Barbell Curl', 'Hammer Curl', 'Wrist Curl'],
  Legs: ['Barbell Back Squat', 'Romanian Deadlift', 'Leg Press', 'Leg Extension', 'Calf Raises', 'Glute Bridges'],
  Core: ['Hanging Leg Raise', 'Lying Leg Raise', 'Plank', 'Side Plank', 'Russian Twist'],
  Cardio: ['Running', 'Jogging', 'Cycling', 'Swimming', 'Walking']
};

export const CALISTHENICS_EXERCISES: Record<CalisthenicsLevel, Record<string, string[]>> = {
  Beginner: {
    Push: [
      'Incline Push-ups',
      'Modified Push-ups',
      'Negative Push-ups',
      'Full Push-ups (after practice)',
      'Modified Dips'
    ],
    Legs: [
      'Squats',
      'Sumo Squats',
      'Calf Raises',
      'Tibialis Raises',
      'Lunges'
    ],
    Pull: [
      'Scapula Pull-ups',
      'Dead Hang',
      'Negative Pull-ups',
      'Negative Chin-ups',
      'Full Pull-ups and Chin-ups (after practice)',
      'Australian Pull-ups',
      'Superman'
    ],
    Core: [
      'Sleeping Knee Raises / Leg Raises',
      'Hanging Knee Raises',
      'Plank',
      'Hollow Body Hold',
      'Side Plank',
      'Side Plank Raises',
      'Dead Bugs'
    ],
    'Isometric & Mobility': [
      'Cat Cow',
      'Shoulder Rotations',
      'Hip Flexor Stretch',
      'Cobra Pose',
      'Hip 90-90',
      'Deep Squat Hold',
      'Thoracic Spine Rotations',
      'Wall Sit',
      'Dead Hang',
      'Push-up Position Hold'
    ]
  },
  Intermediate: {
    Push: [
      'Push-ups',
      'Diamond Push-ups',
      'Explosive Push-ups',
      'Pike Push-ups',
      'Dips',
      'Archer Push-up (after practice)',
      'Wide Push-ups',
      'Handstand practice with wall',
      'Perfect Handstand (later progression)',
      'Elbow Lever'
    ],
    Legs: [
      'Squat Jump',
      'Bulgarian Split Squat',
      'Nordic Curls',
      'Calf Raises',
      'Assisted Pistol Squats'
    ],
    Pull: [
      'Pull-ups',
      'Chin-ups',
      'Wide Grip Pull-ups',
      'Commando Pull-ups',
      'High Pull-ups',
      'One Arm Assisted Pull-ups'
    ],
    Core: [
      'Sleeping Knee Raises / Leg Raises',
      'Hanging Knee Raises',
      'Plank',
      'Hollow Body Hold',
      'Side Plank',
      'Side Plank Raises',
      'Dead Bugs',
      'L-Sit',
      'Hanging Leg Raises',
      'Toes to Bar',
      'Russian Twist'
    ],
    'Isometric & Mobility': [
      'Cat Cow',
      'Shoulder Rotations',
      'Hip Flexor Stretch',
      'Cobra Pose',
      'Hip 90-90',
      'Deep Squat Hold',
      'Thoracic Spine Rotations',
      'Wall Sit',
      'Dead Hang',
      'Push-up Position Hold',
      'Handstand',
      'Elbow Lever',
      'L-Sit',
      'Skin the Cat'
    ]
  },
  Advanced: {
    Push: [
      'Clap Push-ups',
      'One Arm Push-ups',
      'Weighted Dips',
      'Typewriter Push-ups',
      'Planche Training',
      '90 Degree Training',
      'Handstand Push-ups'
    ],
    Legs: [
      'Squat Jump',
      'Bulgarian Split Squat',
      'Nordic Curls',
      'Calf Raises',
      'Assisted Pistol Squats',
      'Sissy Squats',
      'Pistol Squats'
    ],
    Pull: [
      'Muscle-up',
      'One Arm Pull-up',
      'Front Lever',
      'Back Lever',
      'Pull-ups',
      'Chin-ups',
      'Wide Grip Pull-ups',
      'Commando Pull-ups',
      'High Pull-ups',
      'One Arm Assisted Pull-ups'
    ],
    Core: [
      'Sleeping Knee Raises / Leg Raises',
      'Hanging Knee Raises',
      'Plank',
      'Hollow Body Hold',
      'Side Plank',
      'Side Plank Raises',
      'Dead Bugs',
      'L-Sit',
      'Hanging Leg Raises',
      'Toes to Bar',
      'Russian Twist',
      'V-Sit'
    ],
    'Isometric & Mobility': [
      'Cat Cow',
      'Shoulder Rotations',
      'Hip Flexor Stretch',
      'Cobra Pose',
      'Hip 90-90',
      'Deep Squat Hold',
      'Thoracic Spine Rotations',
      'Wall Sit',
      'Dead Hang',
      'Push-up Position Hold',
      'Handstand',
      'Elbow Lever',
      'L-Sit',
      'Skin the Cat',
      'Planche',
      'Front Lever',
      'Back Lever',
      'All Advanced Calisthenics Skills'
    ]
  }
};

export const GYM_SPLITS: Record<Goal, Record<TrainingDays, string[]>> = {
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

export const CALISTHENICS_SPLITS: Record<TrainingDays, string[]> = {
  5: ['Push', 'Legs', 'Pull', 'Core', 'Isometric & Mobility'],
  4: ['Push + Core', 'Legs', 'Pull', 'Isometric & Mobility'],
  3: ['Push', 'Legs', 'Pull'],
  2: ['Upper Body', 'Lower Body']
};

export function generateGymWorkout(goal: Goal, days: TrainingDays): WorkoutDay[] {
  const split = GYM_SPLITS[goal][days];
  return split.map((dayFocus, index) => {
    const muscleGroups = dayFocus.split(' + ');
    const generatedExercises: Exercise[] = [];

    muscleGroups.forEach(muscle => {
      let key = muscle;
      if (key === 'Push' || key === 'Upper Body') key = 'Chest';
      if (key === 'Pull') key = 'Back';
      if (key === 'Lower Body') key = 'Legs';

      const available = GYM_EXERCISES[key];
      if (available) {
        const count = key === 'Cardio' || key === 'Core' ? 2 : 3;
        available.slice(0, count).forEach(exName => {
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

export function generateCalisthenicsWorkout(level: CalisthenicsLevel, days: TrainingDays): WorkoutDay[] {
  const split = CALISTHENICS_SPLITS[days];
  const library = CALISTHENICS_EXERCISES[level];

  return split.map((dayFocus, index) => {
    let categories: string[] = [];

    if (dayFocus === 'Upper Body') {
      categories = ['Push', 'Pull'];
    } else if (dayFocus === 'Lower Body') {
      categories = ['Legs', 'Core'];
    } else {
      categories = dayFocus.split(' + ');
    }

    const generatedExercises: Exercise[] = [];

    categories.forEach(cat => {
      const available = library[cat];
      if (available) {
        // Includes EVERY exercise from the list
        available.forEach(exName => {
          let sets = 3;
          let reps = level === 'Beginner' ? '5-8 reps / 20-30s hold' : '8-15 reps / 45-60s hold';
          let rest = '60-90 sec';

          if (cat === 'Isometric & Mobility') {
            sets = 2;
            reps = '30-45 sec hold';
            rest = '45 sec';
          }

          generatedExercises.push({ name: exName, sets, reps, rest });
        });
      }
    });

    return {
      dayNumber: index + 1,
      focus: dayFocus,
      muscleGroups: categories,
      exercises: generatedExercises
    };
  });
}
