import React, { useEffect, useMemo, useState } from 'react';

// Types kept local to component for simplicity
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

function formatDayLabel(dateISO: string) {
  const d = new Date(dateISO + 'T00:00:00');
  return d.toLocaleDateString(undefined, { weekday: 'short', day: '2-digit', month: 'short' });
}

function totalGrams(items: PlanItem[] = []) {
  return items.reduce((sum, i) => sum + (i.grams || 0), 0);
}

export default function MealPlanPreview() {
  const [loading, setLoading] = useState(true);
  const [pets, setPets] = useState<Pet[]>([]);
  const [plan, setPlan] = useState<Plan | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(0);

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
            if (!cancelled) {
              setPlan(planJson);
              // default select today if in week, else first day
              const todayISO = new Date().toISOString().slice(0,10);
              const idx = planJson.days?.findIndex(d => d.dateISO === todayISO) ?? -1;
              setSelectedDayIdx(idx >= 0 ? idx : 0);
            }
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
      const todayISO = new Date().toISOString().slice(0,10);
      const idx = planJson.days?.findIndex(d => d.dateISO === todayISO) ?? -1;
      setSelectedDayIdx(idx >= 0 ? idx : 0);
    } catch (e: any) {
      setError(e.message || 'Failed to generate');
    } finally {
      setLoading(false);
    }
  }

  const selectedDay = plan?.days?.[selectedDayIdx];
  const dayTotal = selectedDay ? totalGrams(selectedDay.items) : 0;

  return (
    <section className="section-premium container mx-auto px-4">
      <div className="bg-white rounded-xl shadow border p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
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
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-gray-700">
              <span>Week:</span>
              <span className="font-medium">{plan.weekISO}</span>
              <span className="mx-1">•</span>
              <span>Pet:</span>
              <span className="font-medium">{firstPet.name}</span>
              {selectedDay && (
                <>
                  <span className="mx-1">•</span>
                  <span>Day:</span>
                  <span className="font-medium">{formatDayLabel(selectedDay.dateISO)}</span>
                  <span className="mx-1">•</span>
                  <span>Total:</span>
                  <span className="font-semibold">{dayTotal} g/day</span>
                </>
              )}
            </div>

            {/* Day selector */}
            <div className="-mx-2 overflow-x-auto">
              <div className="px-2 flex gap-2">
                {plan.days?.map((d, i) => (
                  <button
                    key={d.dateISO}
                    onClick={() => setSelectedDayIdx(i)}
                    className={
                      'whitespace-nowrap px-3 py-2 rounded border text-sm ' +
                      (i === selectedDayIdx
                        ? 'bg-black text-white border-black'
                        : 'bg-white hover:bg-gray-50 border-gray-300 text-gray-800')
                    }
                    aria-pressed={i === selectedDayIdx}
                  >
                    {formatDayLabel(d.dateISO)}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary for the week (if provided on first day) */}
            {plan.days?.[0]?.summaryText && (
              <p className="text-gray-800 bg-gray-50 border rounded p-3">{plan.days[0].summaryText}</p>
            )}

            {/* Items for selected day */}
            {selectedDay && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedDay.items?.map((it, idx) => {
                  const pct = dayTotal ? Math.round((it.grams / dayTotal) * 100) : 0;
                  return (
                    <div key={idx} className="border rounded p-4">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <div className="text-xs uppercase tracking-wide text-gray-500">{it.meal}</div>
                          <div className="font-medium text-gray-900">{it.name}</div>
                        </div>
                        <div className="text-gray-700 font-semibold">{it.grams} g</div>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded">
                        <div
                          className="h-2 bg-gray-900 rounded"
                          style={{ width: `${pct}%` }}
                          aria-label={`${pct}% of daily total`}
                        />
                      </div>
                      {it.notes && <div className="text-gray-500 text-sm mt-2">{it.notes}</div>}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}