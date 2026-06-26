import type { UserData } from "../types";
import recipes from "../data/recipes";
import { Clock } from "lucide-react";

interface Props {
  userData: UserData;
}

export default function HistoryTimeline({ userData }: Props) {
  const today = new Date().toISOString().split("T")[0];
  const recentHistory = userData.history
    .filter((h) => h.date >= getRelativeDateStr(7))
    .slice(0, 8);

  if (recentHistory.length === 0) return null;

  return (
    <div className="px-4 pt-4 pb-8">
      <div className="flex items-center gap-1.5 mb-2">
        <Clock className="w-4 h-4 text-gray-400" />
        <span className="text-xs text-gray-400 font-medium">最近吃的</span>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {recentHistory.map((h) => {
          const recipe = recipes.find((r) => r.id === h.recipeId);
          if (!recipe) return null;
          const dateLabel = h.date === today ? "今天" : h.date.slice(5);
          return (
            <div
              key={`${h.recipeId}-${h.date}`}
              className="flex-shrink-0 bg-white rounded-xl px-3 py-2 border border-gray-100 text-center min-w-[72px]"
            >
              <span className="text-xs text-gray-400 block mb-0.5">
                {dateLabel}
              </span>
              <span className="text-sm text-gray-600 font-medium">
                {recipe.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getRelativeDateStr(daysAgo: number): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().split("T")[0];
}
