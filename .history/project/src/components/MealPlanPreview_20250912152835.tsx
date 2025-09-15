import React, { useEffect, useMemo, useState } from 'react';

type Pet = {
  _id: string;
  name: string;
  species: 'dog' | 'cat';
  breed?: string;
  ageYears: number;
  weightKg: number;
  activityLevel: 'low' | 'moderate' | 'high';
  allergies?: string[];
};

type PlanItem = { meal: 'breakfast'|'lunch'|'dinner'|'snack'; name: string; grams: number; notes?: string };

type DayPlan = { dateISO: string; items: PlanItem[]; summaryText?: string };

type Plan = {
  _id: string;
  petId: string;
  weekISO: string;
  days: DayPlan[];
};

function startOfWeekISO(d = new Date()) {
  const date = new Date(d);
  const day = date.getDay();
  const diff = (day === 0 ? -6 : 1) - day; // move to Monday
  date.setDate(date.getDate() + diff);
  return date.toISOString().slice(0,10);
}

export default function MealPlanPreview() {
  const [loading, setLoading] = useState(true);
  const [pets, setPets] = useState<Pet[]>([]);
  const [plan, setPlan] = useState<Plan | null>(null);
  const [error, setError] = useState<string | null>(null);

  const firstPet = pets[0];

  const weekParam = useMemo(() => {
    // keep backend default (current week) by omitting query unless needed later
    return '';
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      try {
        setLoading(true);
        setError(null);
        const petsRes = await fetch('/api/pets');
        if (!petsRes.ok) throw new Error('Failed to load pets');
        const petsJson: Pet[] = await petsRes.json();
        if (cancelled) return;
        setPets(petsJson);

        if (petsJson.length > 0) {
          const petId = petsJson[0]._id;
          const planRes = await fetch(`/api/plans/${petId}${weekParam}`);
          if (planRes.ok) {
            const planJson: Plan = await planRes.json();
            if (!cancelled) setPlan(planJson);
          } else if (planRes.status === 404) {
            setPlan(null);
          } else {
            throw new Error('Failed to load plan');
          }
        }
      } catch (e: any) {
        if (!cancelled) setError(e.message || 'Something went wrong');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    run();
    return () => { cancelled = true; };
  }, [weekParam]);

  async function handleGenerate() {
    if (!firstPet) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/plans/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ petId: firstPet._id, startDateISO: startOfWeekISO() })
      });
      if (!res.ok) throw new Error('Failed to generate plan');
      const planJson: Plan = await res.json();
      setPlan(planJson);
    } catch (e: any) {
      setError(e.message || 'Failed to generate');
    } finally {
      setLoading(false);
    }
  }

  const today = new Date().toISOString().slice(0,10);
  const todayPlan = plan?.days?.find(d => d.dateISO === today) || plan?.days?.[0];

  return (
    <section className="section-premium container mx-auto px-4">
      <div className="bg-white rounded-xl shadow border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Your Meal Plan</h2>
          {firstPet && (
            <button
              onClick={handleGenerate}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              {plan ? 'Regenerate Week' : 'Generate Week'}
            </button>
          )}
        </div>

        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !firstPet && (
          <div className="text-gray-700">
            <p>No pet profile yet. Create your pet to get a personalized plan.</p>
          </div>
        )}

        {!loading && firstPet && !plan && (
          <div className="text-gray-700">
            <p>No plan found for {firstPet.name}. Click "Generate Week" to create one.</p>
          </div>
        )}

        {!loading && firstPet && plan && (
          <div>
            <p className="text-gray-700 mb-3">
              Showing week: <span className="font-medium">{plan.weekISO}</span> • Pet: <span className="font-medium">{firstPet.name}</span>
            </p>
            {todayPlan?.summaryText && (
              <p className="mb-4 text-gray-800">{todayPlan.summaryText}</p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {todayPlan?.items?.map((it, idx) => (
                <div key={idx} className="border rounded p-3">
                  <div className="text-sm uppercase tracking-wide text-gray-500">{it.meal}</div>
                  <div className="font-medium">{it.name}</div>
                  <div className="text-gray-600">{it.grams} g</div>
                  {it.notes && <div className="text-gray-500 text-sm mt-1">{it.notes}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}