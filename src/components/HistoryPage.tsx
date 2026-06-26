import { useState } from "react";
import { useStore } from "../store/useStore";
import { CUISINE_INFO, DIFFICULTY_LABELS } from "../types";
import type { Cuisine } from "../types";
import { Heart, ChevronDown, ChevronRight } from "lucide-react";

interface GroupedHistory {
  date: string;
  label: string;
  items: { recipeId: string; date: string }[];
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const days = ["周日","周一","周二","周三","周四","周五","周六"];
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  const prefix = dateStr === today ? "今天" : dateStr === yesterday ? "昨天" : "";
  return `${prefix} ${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 ${days[d.getDay()]}`;
}

export default function HistoryPage() {
  const userData = useStore((s) => s.userData);
  const toggleFav = useStore((s) => s.toggleFav);
  const getRecipeById = useStore((s) => s.getRecipeById);

  // Group by date
  const grouped: GroupedHistory[] = [];
  for (const h of userData.history) {
    const last = grouped[grouped.length - 1];
    if (last && last.date === h.date) {
      last.items.push(h);
    } else {
      grouped.push({ date: h.date, label: formatDate(h.date), items: [h] });
    }
  }

  // Track expanded states — first day expanded by default
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const s = new Set<string>();
    if (grouped.length > 0) s.add(grouped[0].date);
    return s;
  });

  const toggleDate = (date: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(date)) next.delete(date);
      else next.add(date);
      return next;
    });
  };

  const thisMonth = userData.history.filter((h) => {
    const d = new Date(h.date);
    const now = new Date();
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;

  return (
    <div className="min-h-dvh pb-24">
      <div className="px-4 py-3">
        <div className="bg-white rounded-xl p-3 border border-gray-100 text-center">
          <span className="text-2xl font-bold text-orange-500">{thisMonth}</span>
          <span className="text-sm text-gray-400 ml-1">本月已做</span>
        </div>
      </div>

      {grouped.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <span className="text-4xl mb-3">📋</span>
          <p className="text-sm">还没有已吃记录</p>
          <p className="text-xs mt-1">在明日菜单里记录已吃</p>
        </div>
      ) : (
        <div className="px-4 space-y-2">
          {grouped.map((g) => {
            const isOpen = expanded.has(g.date);
            return (
              <div key={g.date} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                {/* Date header — clickable */}
                <button
                  onClick={() => toggleDate(g.date)}
                  className="w-full flex items-center justify-between px-3 py-3 active:bg-gray-50"
                >
                  <div className="flex items-center gap-2">
                    {isOpen ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                    <span className="text-sm font-medium text-gray-700">{g.label}</span>
                  </div>
                  <span className="text-xs text-gray-400">{g.items.length}道</span>
                </button>

                {/* Dishes list — shown when expanded */}
                {isOpen && (
                  <div className="px-3 pb-3 space-y-1.5 border-t border-gray-50 pt-2">
                    {g.items.map((h) => {
                      const recipe = getRecipeById(h.recipeId);
                      if (!recipe) return null;
                      const isFav = userData.favorites.includes(recipe.id);
                      return (
                        <div key={`${h.recipeId}-${h.date}`}
                          className="flex items-center gap-3 py-1.5">
                          <span className="text-xl">{recipe.emoji || "🍽️"}</span>
                          <div className="flex-1 min-w-0">
                            <span className="font-medium text-gray-800 text-sm">{recipe.name}</span>
                            <p className="text-xs text-gray-400">
                              {CUISINE_INFO[recipe.cuisine as Cuisine]?.name} · {DIFFICULTY_LABELS[recipe.difficulty]}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button onClick={() => toggleFav(recipe.id)} className="p-1 rounded">
                              <Heart className={`w-4 h-4 ${isFav ? "text-red-400 fill-red-400" : "text-gray-300"}`} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
