import React, { useState } from 'react';
import { UserStats, CalculatedMetrics, Goal, TrainingStyle, CalisthenicsLevel, TrainingDays, WorkoutDay, DietBudget } from './types';
import { calculateMetrics, recommendGoal } from './utils/calculator';
import { generateGymWorkout, generateCalisthenicsWorkout } from './data/workoutData';
import { DIET_PLANS } from './data/dietData';

export default function App() {
  const [step, setStep] = useState<number>(1);
  const [stats, setStats] = useState<UserStats>({ age: '', gender: 'Male', weight: '', height: '', waist: '', neck: '', hip: '' });
  const [metrics, setMetrics] = useState<CalculatedMetrics | null>(null);
  const [error, setError] = useState<string>('');
  
  const [goal, setGoal] = useState<Goal | null>(null);
  const [style, setStyle] = useState<TrainingStyle | null>(null);
  const [caliLevel, setCaliLevel] = useState<CalisthenicsLevel>('Beginner');
  const [dietBudget, setDietBudget] = useState<DietBudget | null>(null);
  const [workout, setWorkout] = useState<WorkoutDay[] | null>(null);

  const handleStatChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setStats({ ...stats, [e.target.name]: e.target.value });
    setError('');
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateMetrics(stats);
    if (!result) { setError("Check your measurements. Waist must be larger than neck."); return; }
    setMetrics(result); setStep(2);
  };

  const handleGenerateWorkout = (selectedDays: TrainingDays) => {
    if (style === 'Gym' && goal) setWorkout(generateGymWorkout(goal, selectedDays));
    else if (style === 'Calisthenics') setWorkout(generateCalisthenicsWorkout(caliLevel, selectedDays));
    setStep(6);
  };

  const handleGenerateDiet = (budget: DietBudget) => {
    setDietBudget(budget);
    setStep(6);
  };

  const reset = () => {
    setStep(1); setGoal(null); setStyle(null); setCaliLevel('Beginner'); setDietBudget(null); setWorkout(null); setError('');
  };

  const renderDietCard = (meal: {name: string, items: string[], image: string}) => (
    <div key={meal.name} className="flex flex-col bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-900/20 transition-all group">
      <div className="h-56 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent z-10"></div>
        <img src={meal.image} alt={meal.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <h3 className="absolute bottom-4 left-5 z-20 text-3xl font-black text-white tracking-wider drop-shadow-md">{meal.name}</h3>
      </div>
      <div className="p-6 md:p-8 flex-grow">
        <ul className="space-y-4">
          {meal.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-blue-500 mt-1 flex-shrink-0 text-xl">🥗</span>
              <span className="text-gray-200 text-lg md:text-xl font-medium leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="flex justify-between items-center mb-10 pb-4 border-b border-gray-800">
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
            Fitness Forge
          </h1>
          {step > 1 && <button onClick={reset} className="text-sm text-gray-400 hover:text-white">Restart</button>}
        </header>

        {step === 1 && (
          <div>
            <h2 className="text-3xl font-bold mb-2">Let's get your baseline.</h2>
            <form onSubmit={handleStep1Submit} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div><label className="text-sm text-gray-300 block mb-1">Gender</label><select name="gender" value={stats.gender} onChange={handleStatChange} className="w-full bg-gray-800 rounded-lg p-3 text-white"><option value="Male">Male</option><option value="Female">Female</option></select></div>
                <div><label className="text-sm text-gray-300 block mb-1">Age</label><input required type="number" name="age" value={stats.age} onChange={handleStatChange} className="w-full bg-gray-800 rounded-lg p-3 text-white" /></div>
                <div><label className="text-sm text-gray-300 block mb-1">Weight (kg)</label><input required type="number" step="0.1" name="weight" value={stats.weight} onChange={handleStatChange} className="w-full bg-gray-800 rounded-lg p-3 text-white" /></div>
                <div><label className="text-sm text-gray-300 block mb-1">Height (cm)</label><input required type="number" name="height" value={stats.height} onChange={handleStatChange} className="w-full bg-gray-800 rounded-lg p-3 text-white" /></div>
                <div><label className="text-sm text-gray-300 block mb-1">Waist (cm)</label><input required type="number" step="0.1" name="waist" value={stats.waist} onChange={handleStatChange} className="w-full bg-gray-800 rounded-lg p-3 text-white" /></div>
                <div><label className="text-sm text-gray-300 block mb-1">Neck (cm)</label><input required type="number" step="0.1" name="neck" value={stats.neck} onChange={handleStatChange} className="w-full bg-gray-800 rounded-lg p-3 text-white" /></div>
                {stats.gender === 'Female' && <div className="sm:col-span-2"><label className="text-sm text-gray-300 block mb-1">Hip (cm)</label><input required type="number" step="0.1" name="hip" value={stats.hip} onChange={handleStatChange} className="w-full bg-gray-800 rounded-lg p-3 text-white" /></div>}
              </div>
              {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}
              <button type="submit" className="w-full mt-8 bg-blue-600 hover:bg-blue-500 font-bold py-3.5 rounded-xl transition">Calculate Metrics &rarr;</button>
            </form>
          </div>
        )}

        {step === 2 && metrics && (
          <div>
            <button onClick={() => setStep(1)} className="text-gray-400 mb-6">&larr; Back</button>
            
            <div className="bg-blue-950/40 border border-blue-500/30 rounded-2xl p-6 mb-8">
              <h3 className="text-blue-400 font-semibold mb-3">Your Baseline Estimates</h3>
              <div className="grid grid-cols-2 gap-4 text-lg">
                <div>BMI: <span className="text-white font-bold">{metrics.bmi}</span> <span className="text-sm text-gray-400 block">{metrics.bmiCategory}</span></div>
                <div>Body Fat: <span className="text-white font-bold">{metrics.bodyFat}%</span> <span className="text-sm text-gray-400 block">U.S. Navy Method</span></div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-2">Select Your Goal</h2>
            <p className="text-gray-400 mb-6 text-lg">Recommendation: <span className="text-blue-400 font-bold">{recommendGoal(metrics, Number(stats.age), stats.gender)}</span></p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(['Bulk', 'Cut', 'Maintain'] as Goal[]).map(g => (
                <button key={g} onClick={() => { setGoal(g); setStep(3); }} className="bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-2xl p-6 text-left group">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">{g}</h4>
                  <p className="text-sm text-gray-400">{g === 'Bulk' && 'Build muscle and size.'}{g === 'Cut' && 'Burn body fat.'}{g === 'Maintain' && 'Preserve current weight.'}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <button onClick={() => setStep(2)} className="text-gray-400 mb-6">&larr; Back</button>
            <h2 className="text-2xl font-bold mb-6">What do you want to plan?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={() => { setStyle('Gym'); setStep(5); }} className="bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-2xl p-6 text-left">
                <h4 className="text-xl font-bold text-white mb-2">Gym Workout</h4><p className="text-sm text-gray-400">Machines, barbells & dumbbells.</p>
              </button>
              <button onClick={() => { setStyle('Calisthenics'); setStep(4); }} className="bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-2xl p-6 text-left">
                <h4 className="text-xl font-bold text-white mb-2">Calisthenics</h4><p className="text-sm text-gray-400">Bodyweight mastery & skills.</p>
              </button>
              <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 text-left opacity-50 relative">
                <span className="absolute top-4 right-4 bg-gray-800 text-xs px-2 py-0.5 rounded">Coming Soon</span>
                <h4 className="text-xl font-bold text-gray-300 mb-2">Home Workout</h4><p className="text-sm text-gray-500">Minimal equipment routines.</p>
              </div>
              <button onClick={() => { setStyle('Diet'); setStep(4); }} className="bg-gradient-to-br from-gray-900 to-blue-950/30 border border-blue-500/30 hover:border-blue-400 rounded-2xl p-6 text-left shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <h4 className="text-xl font-bold text-blue-400 mb-2">Diet Plan</h4><p className="text-sm text-gray-300">Custom aesthetic nutrition guide.</p>
              </button>
            </div>
          </div>
        )}

        {step === 4 && style === 'Calisthenics' && (
          <div>
            <button onClick={() => setStep(3)} className="text-gray-400 mb-6">&larr; Back</button>
            <h2 className="text-2xl font-bold mb-6">Select Skill Level</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(['Beginner', 'Intermediate', 'Advanced'] as CalisthenicsLevel[]).map(lvl => (
                <button key={lvl} onClick={() => { setCaliLevel(lvl); setStep(5); }} className="bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-2xl p-6 text-left group">
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400">{lvl}</h4>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && style === 'Diet' && (
          <div>
            <button onClick={() => setStep(3)} className="text-gray-400 mb-6">&larr; Back</button>
            <h2 className="text-2xl font-bold mb-6">Select Your Diet Budget</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={() => handleGenerateDiet('Budget-Friendly')} className="bg-gray-900 border border-gray-800 hover:border-green-500 rounded-2xl p-8 text-center group">
                <span className="text-3xl font-extrabold text-white group-hover:text-green-400 block mb-2">Budget-Friendly</span>
                <span className="text-sm text-gray-400">Accessible & cost-effective ingredients.</span>
              </button>
              <button onClick={() => handleGenerateDiet('Open Budget')} className="bg-gray-900 border border-gray-800 hover:border-purple-500 rounded-2xl p-8 text-center group">
                <span className="text-3xl font-extrabold text-white group-hover:text-purple-400 block mb-2">Open Budget</span>
                <span className="text-sm text-gray-400">Premium ingredients & whey protein.</span>
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <button onClick={() => setStep(style === 'Calisthenics' ? 4 : 3)} className="text-gray-400 mb-6">&larr; Back</button>
            <h2 className="text-2xl font-bold mb-6">Training Frequency</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {([2, 3, 4, 5] as TrainingDays[]).map(d => (
                <button key={d} onClick={() => handleGenerateWorkout(d)} className="bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-2xl py-8 text-center">
                  <span className="text-4xl font-extrabold text-white block">{d}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-8">
            {style !== 'Diet' && workout && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Your Workout Plan</h2>
                {workout.map(day => (
                  <div key={day.dayNumber} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-3">
                      <span className="text-blue-400 font-bold text-sm tracking-wider">DAY {day.dayNumber}</span>
                      <h4 className="text-lg font-bold text-white">{day.focus}</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {day.exercises.map((ex, idx) => (
                        <div key={idx} className="bg-gray-950 p-4 rounded-xl border border-gray-800/80">
                          <p className="font-medium text-white mb-2">{ex.name}</p>
                          <div className="flex gap-4 text-xs text-gray-400">
                            <span>{ex.sets} sets</span><span>&bull;</span><span>{ex.reps}</span><span>&bull;</span><span>{ex.rest} rest</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {style === 'Diet' && dietBudget && goal && (
              <div className="space-y-8">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-black tracking-tight text-white mb-3 uppercase">Your {goal} Diet</h2>
                  <p className="text-blue-400 font-medium">[{dietBudget} &bull; Vegetarian Baseline]</p>
                </div>
                
                {goal === 'Cut' && (
                  <div className="p-5 rounded-2xl bg-orange-950/40 border border-orange-500/30 text-orange-300 text-[16px] md:text-lg shadow-lg">
                    🔥 <strong>Cut Protocol:</strong> You must remain in a calorie deficit! Eat fewer carbs, prioritize protein, and strictly replace all milk/dairy drinks with water where indicated.
                  </div>
                )}
                {goal === 'Bulk' && (
                  <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[16px] md:text-lg shadow-lg">
                    💪 <strong>Bulk Protocol:</strong> Eat in a calorie surplus! Keep protein high and load up on nutrient-dense carbohydrates to fuel muscle growth.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {renderDietCard(DIET_PLANS[goal === 'Maintain' ? 'Bulk' : goal][dietBudget].breakfast)}
                  {renderDietCard(DIET_PLANS[goal === 'Maintain' ? 'Bulk' : goal][dietBudget].lunch)}
                  {renderDietCard(DIET_PLANS[goal === 'Maintain' ? 'Bulk' : goal][dietBudget].snacks)}
                  {renderDietCard(DIET_PLANS[goal === 'Maintain' ? 'Bulk' : goal][dietBudget].dinner)}
                  <div className="md:col-span-2">
                    {renderDietCard(DIET_PLANS[goal === 'Maintain' ? 'Bulk' : goal][dietBudget].tips)}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
