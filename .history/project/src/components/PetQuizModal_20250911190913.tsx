import React, { useMemo, useState } from 'react';

// Simple quiz modal to collect pet info and show a recommendation
// Uses Tailwind for styling and minimal state for steps/results

type Props = {
  open: boolean;
  onClose: () => void;
};

type PetInfo = {
  type: 'Dog' | 'Cat' | 'Other';
  otherType?: string;
  breed?: string;
  age: 'Puppy/Kitten' | 'Adult' | 'Senior';
  weight?: string; // keep string for easy input (e.g., 12 kg / 26 lb)
  activity: 'Low' | 'Medium' | 'High';
  concerns: string[];
  preferences: string[];
};

const defaultInfo: PetInfo = {
  type: 'Dog',
  age: 'Adult',
  activity: 'Medium',
  concerns: [],
  preferences: [],
};

const concernOptions = ['Allergies', 'Digestion', 'Joint Health', 'Skin/Coat', 'Weight Management', 'None'];
const preferenceOptions = ['Dry', 'Wet', 'Grain-free', 'High-protein', 'Natural/limited ingredients', 'No chicken', 'No beef'];

const PetQuizModal: React.FC<Props> = ({ open, onClose }) => {
  const [step, setStep] = useState<'form' | 'result'>('form');
  const [info, setInfo] = useState<PetInfo>(defaultInfo);

  const recommendation = useMemo(() => {
    // Very simple heuristic for demo purposes
    const base = info.type === 'Cat' ? 'Feline' : 'Canine';
    const protein = info.activity === 'High' ? 'High Protein' : info.activity === 'Low' ? 'Balanced' : 'Active';
    const main = info.preferences.includes('No chicken') ? 'Salmon & Brown Rice' : 'Chicken & Brown Rice';
    const grainFree = info.preferences.includes('Grain-free') ? 'Grain-Free ' : '';

    const title = `${protein} ${grainFree}${main} for ${base}s`;

    const health: string[] = [];
    if (info.concerns.includes('Digestion')) health.push('Prebiotics for gut health');
    if (info.concerns.includes('Joint Health')) health.push('Glucosamine & Chondroitin for joints');
    if (info.concerns.includes('Skin/Coat')) health.push('Omega-3 & Omega-6 for skin and coat');
    if (info.age === 'Senior') health.push('Antioxidants for healthy aging');
    if (info.activity === 'High') health.push('Extra calories to fuel activity');

    const nutrition = {
      protein: info.activity === 'High' ? '30%' : '26%',
      fat: info.activity === 'Low' ? '12%' : '16%',
      fiber: '4%',
      moisture: '10%',
    };

    const portionGuide = info.weight ? `~1 cup per 10 lb (${info.weight} provided as reference)` : '~1 cup per 10 lb (adjust to body condition)';

    return {
      title,
      image: 'https://images.pexels.com/photos/1407784/pexels-photo-1407784.jpeg?auto=compress&cs=tinysrgb&w=800',
      nutrition,
      portionGuide,
      healthBenefits: health.length ? health : ['Complete & balanced nutrition'],
    };
  }, [info]);

  if (!open) return null;

  const toggleArrayValue = (arr: string[], value: string) =>
    arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-2xl rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h3 className="text-xl font-semibold">Find Your Ideal Recipe</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        {step === 'form' && (
          <div className="max-h-[70vh] overflow-y-auto px-6 py-4 space-y-4">
            {/* Pet type */}
            <div>
              <label className="block text-sm font-medium mb-1">Pet type</label>
              <div className="flex gap-3">
                {(['Dog', 'Cat', 'Other'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setInfo((p) => ({ ...p, type: t }))}
                    className={`px-3 py-2 border rounded ${info.type === t ? 'bg-blue-600 text-white border-blue-600' : 'bg-white'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {info.type === 'Other' && (
                <input
                  className="mt-2 w-full rounded border px-3 py-2"
                  placeholder="Specify pet type"
                  value={info.otherType || ''}
                  onChange={(e) => setInfo((p) => ({ ...p, otherType: e.target.value }))}
                />
              )}
            </div>

            {/* Breed */}
            <div>
              <label className="block text-sm font-medium mb-1">Breed (optional)</label>
              <input
                className="w-full rounded border px-3 py-2"
                placeholder="e.g., Labrador Retriever"
                value={info.breed || ''}
                onChange={(e) => setInfo((p) => ({ ...p, breed: e.target.value }))}
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium mb-1">Age group</label>
              <select
                className="w-full rounded border px-3 py-2"
                value={info.age}
                onChange={(e) => setInfo((p) => ({ ...p, age: e.target.value as PetInfo['age'] }))}
              >
                <option>Puppy/Kitten</option>
                <option>Adult</option>
                <option>Senior</option>
              </select>
            </div>

            {/* Weight */}
            <div>
              <label className="block text-sm font-medium mb-1">Weight & units</label>
              <input
                className="w-full rounded border px-3 py-2"
                placeholder="e.g., 12 kg or 26 lb"
                value={info.weight || ''}
                onChange={(e) => setInfo((p) => ({ ...p, weight: e.target.value }))}
              />
            </div>

            {/* Activity */}
            <div>
              <label className="block text-sm font-medium mb-1">Activity level</label>
              <select
                className="w-full rounded border px-3 py-2"
                value={info.activity}
                onChange={(e) => setInfo((p) => ({ ...p, activity: e.target.value as PetInfo['activity'] }))}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            {/* Concerns */}
            <div>
              <label className="block text-sm font-medium mb-1">Health concerns</label>
              <div className="flex flex-wrap gap-2">
                {concernOptions.map((c) => (
                  <button
                    key={c}
                    onClick={() => setInfo((p) => ({ ...p, concerns: toggleArrayValue(p.concerns, c) }))}
                    className={`px-3 py-1 border rounded-full text-sm ${info.concerns.includes(c) ? 'bg-blue-600 text-white border-blue-600' : 'bg-white'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div>
              <label className="block text-sm font-medium mb-1">Food preferences</label>
              <div className="flex flex-wrap gap-2">
                {preferenceOptions.map((c) => (
                  <button
                    key={c}
                    onClick={() => setInfo((p) => ({ ...p, preferences: toggleArrayValue(p.preferences, c) }))}
                    className={`px-3 py-1 border rounded-full text-sm ${info.preferences.includes(c) ? 'bg-blue-600 text-white border-blue-600' : 'bg-white'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button className="px-4 py-2 rounded border" onClick={onClose}>Cancel</button>
              <button
                className="px-4 py-2 rounded bg-blue-600 text-white"
                onClick={() => setStep('result')}
              >
                Get Recommendation
              </button>
            </div>
          </div>
        )}

        {step === 'result' && (
          <div className="px-6 py-5 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <img src={recommendation.image} alt="Recommended" className="w-full md:w-60 h-40 object-cover rounded border" />
              <div className="flex-1">
                <h4 className="text-lg font-semibold">{recommendation.title}</h4>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                  <div><span className="font-medium">Protein:</span> {recommendation.nutrition.protein}</div>
                  <div><span className="font-medium">Fat:</span> {recommendation.nutrition.fat}</div>
                  <div><span className="font-medium">Fiber:</span> {recommendation.nutrition.fiber}</div>
                  <div><span className="font-medium">Moisture:</span> {recommendation.nutrition.moisture}</div>
                </div>
                <div className="mt-3 text-sm"><span className="font-medium">Portion guide:</span> {recommendation.portionGuide}</div>
                <ul className="mt-3 list-disc pl-5 text-sm">
                  {recommendation.healthBenefits.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button className="px-4 py-2 rounded border" onClick={() => setStep('form')}>Back</button>
              <button className="px-4 py-2 rounded bg-emerald-600 text-white">Add to Cart</button>
              <button className="px-4 py-2 rounded bg-blue-600 text-white">Talk to Our Vet Nutritionist</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetQuizModal;