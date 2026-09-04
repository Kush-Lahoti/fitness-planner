import React, { useState } from 'react';
import { UserStats, CalculatedMetrics, Goal, TrainingStyle, CalisthenicsLevel, TrainingDays, WorkoutDay } from './types';
import { calculateMetrics, recommendGoal } from './utils/calculator';
import { generateGymWorkout, generateCalisthenicsWorkout } from './data/workoutData';

export default function App() {
  const [step, setStep] = useState<number>(1);
  const [stats, setStats] = useState<UserStats>({
    age: '', gender: 'Male', weight: '', height: '', waist: '', neck: '', hip: ''
  });
  const [metrics, setMetrics] = useState<CalculatedMetrics | null>(null);
  const [error, setError] = useState<string>('');
  
  const [goal, setGoal] = useState<Goal | null>(null);
  const [style, setStyle] = useState<TrainingStyle | null>(null);
  const [caliLevel, setCaliLevel] = useState<CalisthenicsLevel>('Beginner');
  const [days, setDays] = useState<TrainingDays | null>(null);
  const [workout, setWorkout] = useState<WorkoutDay[] | null>(null);

  const handleStatChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setStats({ ...stats, [e.target.name]: e.target.value });
    setError('');
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateMetrics(stats);
    if (!result) {
      setError("Please check your measurements. For accurate calculation, ensure waist is larger than neck.");
      return;
    }
    setMetrics(result);
    setStep(2);
  };

  const handleGenerate = (selectedDays: TrainingDays) => {
    setDays(selectedDays);
    if (style === 'Gym' && goal) {
      setWorkout(generateGymWorkout(goal, selectedDays));
    } else if (style === 'Calisthenics') {
      setWorkout(generateCalisthenicsWorkout(caliLevel, selectedDays));
    }
    setStep(6);
  };

  const reset = () => {
    setStep(1);
    setGoal(null);
    setStyle(null);
    setCaliLevel('Beginner');
    setDays(null);
    setWorkout(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="flex justify-between items-center mb-10 pb-4 border-b border-gray-800">
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
            Fitness Forge
          </h1>
          {step > 1 && (
            <button onClick={reset} className="text-sm text-gray-400 hover:text-white transition-colors">
              Restart Plan
            </button>
          )}
        </header>

        {/* Step 1: Body Metrics */}
        {step === 1 && (
          <div>
            <h2 className="text-3xl font-bold mb-2">Let's get your baseline.</h2>
            <p className="text-gray-400 mb-8">Enter your metrics to calculate your starting point (Metric units).</p>
            
            <form onSubmit={handleStep1Submit} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-300 block mb-1">Gender</label>
                  <select name="gender" value={stats.gender} onChange={handleStatChange} className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 block mb-1">Age</label>
                  <input required type="number" min="10" max="120" name="age" value={stats.age} onChange={handleStatChange} placeholder="Years" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 block mb-1">Weight (kg)</label>
                  <input required type="number" step="0.1" min="20" max="300" name="weight" value={stats.weight} onChange={handleStatChange} placeholder="kg" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 block mb-1">Height (cm)</label>
                  <input required type="number" min="100" max="250" name="height" value={stats.height} onChange={handleStatChange} placeholder="cm" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 block mb-1">Waist Circumference (cm)</label>
                  <input required type="number" step="0.1" name="waist" value={stats.waist} onChange={handleStatChange} placeholder="at navel" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 block mb-1">Neck Circumference (cm)</label>
                  <input required type="number" step="0.1" name="neck" value={stats.neck} onChange={handleStatChange} placeholder="below Adam's apple" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white" />
                </div>
                {stats.gender === 'Female' && (
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-gray-300 block mb-1">Hip Circumference (cm)</label>
                    <input required type="number" step="0.1" name="hip" value={stats.hip} onChange={handleStatChange} placeholder="widest point" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white" />
                  </div>
                )}
              </div>
              {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}
              <button type="submit" className="w-full mt-8 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition">
                Calculate Metrics &rarr;
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Goal Selection */}
        {step === 2 && metrics && (
          <div>
            <button onClick={() => setStep(1)} className="text-gray-400 mb-6 hover:text-white">&larr; Back</button>
            <div className="bg-blue-950/40 border border-blue-500/30 rounded-2xl p-6 mb-8">
              <h3 className="text-blue-400 font-semibold mb-3">Your Baseline Estimates</h3>
              <div className="grid grid-cols-2 gap-4 text-lg">
                <div>BMI: <span className="text-white font-bold">{metrics.bmi}</span> <span className="text-sm text-gray-400 block">{metrics.bmiCategory}</span></div>
                <div>Body Fat: <span className="text-white font-bold">{metrics.bodyFat}%</span> <span className="text-sm text-gray-400 block">U.S. Navy Method</span></div>
              </div>
              <p className="text-xs text-gray-500 mt-4">BMI and body-fat percentage are non-medical estimates for general screening purposes.</p>
            </div>

            <h2 className="text-2xl font-bold mb-2">Select Your Goal</h2>
            <p className="text-gray-400 mb-6">Recommendation: <span className="text-blue-400 font-medium">{recommendGoal(metrics, Number(stats.age), stats.gender)}</span></p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(['Bulk', 'Cut', 'Maintain'] as Goal[]).map(g => (
                <button 
                  key={g} 
                  onClick={() => { setGoal(g); setStep(3); }}
                  className="bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-2xl p-6 text-left transition group"
                >
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">{g}</h4>
                  <p className="text-sm text-gray-400">
                    {g === 'Bulk' && 'Build muscle and increase lean mass over time.'}
                    {g === 'Cut' && 'Burn body fat while maintaining muscle tissue.'}
                    {g === 'Maintain' && 'Preserve current body weight and optimize performance.'}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Training Style */}
        {step === 3 && (
          <div>
            <button onClick={() => setStep(2)} className="text-gray-400 mb-6 hover:text-white">&larr; Back</button>
            <h2 className="text-2xl font-bold mb-6">Choose Your Training Style</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button onClick={() => { setStyle('Gym'); setStep(5); }} className="bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-2xl p-6 text-left transition">
                <h4 className="text-xl font-bold text-white mb-2">Gym Workout</h4>
                <p className="text-sm text-gray-400">Full access to barbells, dumbbells, and machines.</p>
              </button>

              <button onClick={() => { setStyle('Calisthenics'); setStep(4); }} className="bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-2xl p-6 text-left transition">
                <h4 className="text-xl font-bold text-white mb-2">Calisthenics</h4>
                <p className="text-sm text-gray-400">Master bodyweight strength, bars, and skill progressions.</p>
              </button>

              <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 text-left opacity-50 relative">
                <span className="absolute top-4 right-4 bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded">Coming Soon</span>
                <h4 className="text-xl font-bold text-gray-300 mb-2">Home Workout</h4>
                <p className="text-sm text-gray-500">Minimal equipment routines for small spaces.</p>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Calisthenics Level Selection */}
        {step === 4 && (
          <div>
            <button onClick={() => setStep(3)} className="text-gray-400 mb-6 hover:text-white">&larr; Back</button>
            <h2 className="text-2xl font-bold mb-6">Select Your Calisthenics Skill Level</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(['Beginner', 'Intermediate', 'Advanced'] as CalisthenicsLevel[]).map(lvl => (
                <button 
                  key={lvl} 
                  onClick={() => { setCaliLevel(lvl); setStep(5); }}
                  className="bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-2xl p-6 text-left transition group"
                >
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">{lvl}</h4>
                  <p className="text-sm text-gray-400">
                    {lvl === 'Beginner' && 'Foundational movements: knee/incline push-ups, dead hangs, and mobility.'}
                    {lvl === 'Intermediate' && 'Standard push-ups, pull-ups, dips, and preliminary wall handstands.'}
                    {lvl === 'Advanced' && 'High-skill strength: muscle-ups, levers, planche, and handstand push-ups.'}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Training Days */}
        {step === 5 && (
          <div>
            <button onClick={() => setStep(style === 'Calisthenics' ? 4 : 3)} className="text-gray-400 mb-6 hover:text-white">&larr; Back</button>
            <h2 className="text-2xl font-bold mb-6">How many days per week will you train?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {([2, 3, 4, 5] as TrainingDays[]).map(d => (
                <button 
                  key={d} 
                  onClick={() => handleGenerate(d)}
                  className="bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-2xl py-8 text-center transition group"
                >
                  <span className="text-4xl font-extrabold text-white group-hover:text-blue-400 block mb-1">{d}</span>
                  <span className="text-sm text-gray-400">Days / week</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Dashboard */}
        {step === 6 && workout && metrics && (
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Your Program Summary</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <div><span className="text-gray-400 block">Style</span><span className="font-semibold text-white">{style} {style === 'Calisthenics' && `(${caliLevel})`}</span></div>
                <div><span className="text-gray-400 block">Goal</span><span className="font-semibold text-white">{goal}</span></div>
                <div><span className="text-gray-400 block">Frequency</span><span className="font-semibold text-white">{days} Days / Week</span></div>
                <div><span className="text-gray-400 block">Body Fat</span><span className="font-semibold text-white">~{metrics.bodyFat}%</span></div>
              </div>

              {/* Nutrition Guidance Box */}
              {goal === 'Cut' && (
                <div className="mt-4 p-4 rounded-xl bg-orange-950/40 border border-orange-500/30 text-orange-300 text-sm">
                  💡 <strong>Nutrition Note:</strong> If you want to cut, go into a calorie deficit, drink plenty of water, and fulfill your daily protein needs.
                </div>
              )}
              {goal === 'Bulk' && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-sm">
                  💡 <strong>Nutrition Note:</strong> If you want to bulk, increase your calories with nutrient-dense foods and keep protein intake high.
                </div>
              )}

              {/* Calisthenics Level Progression Guidance */}
              {style === 'Calisthenics' && caliLevel === 'Beginner' && (
                <div className="mt-4 p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-300 text-sm">
                  📌 <strong>Progression Note:</strong> Once these beginner exercises start feeling easy, jump up to the <strong>Intermediate</strong> level! (Note: You will need a bar or sturdy overhead support for pulling exercises).
                </div>
              )}
              {style === 'Calisthenics' && caliLevel === 'Intermediate' && (
                <div className="mt-4 p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-300 text-sm">
                  📌 <strong>Progression Note:</strong> Once you feel these exercises become easy, increase your sets and reps, then jump up to the <strong>Advanced</strong> skills!
                </div>
              )}
            </div>

            {/* Weekly Workout Days */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Weekly Routine</h3>
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
                          <span>{ex.sets} sets</span>
                          <span>&bull;</span>
                          <span>{ex.reps}</span>
                          <span>&bull;</span>
                          <span>{ex.rest} rest</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
