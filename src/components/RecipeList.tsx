import type { Recipe } from "../types";
import { DIFFICULTY_LABELS, CATEGORY_LABELS, CUISINE_INFO } from "../types";
import type { Cuisine } from "../types";
import { Clock, Flame, Heart } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  recipes: Recipe[];
  favorites: string[];
  emptyText?: string;
  onTap: (recipe: Recipe) => void;
  onToggleFav: (id: string) => void;
  extraBtn?: (recipe: Recipe) => ReactNode;
}

export default function RecipeList({
  recipes, favorites, emptyText = "还没有菜谱",
  onTap, onToggleFav, extraBtn,
}: Props) {
  if (recipes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <span className="text-4xl mb-3">🍽️</span>
        <p className="text-sm">{emptyText}</p>
      </div>
    );
  }

  return (
    <div className="px-4 space-y-2.5">
      {recipes.map((r) => {
        const isFav = favorites.includes(r.id);
        return (
          <div key={r.id} onClick={() => onTap(r)}
            className="bg-white rounded-xl p-3.5 border border-gray-100 shadow-sm active:scale-[0.98] transition-transform flex items-center gap-3">
            <span className="text-3xl flex-shrink-0">{r.emoji || "🍽️"}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-800 truncate">{r.name}</span>
                {isFav && <Heart className="w-3.5 h-3.5 text-red-400 flex-shrink-0" fill="currentColor" />}
              </div>
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                <span>{CUISINE_INFO[r.cuisine as Cuisine]?.name ?? ""}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-0.5"><Clock className="w-3 h-3" />{r.cookingTime}分</span>
                <span>·</span>
                <span className="inline-flex items-center gap-0.5"><Flame className="w-3 h-3" />{DIFFICULTY_LABELS[r.difficulty]}</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5 truncate">
                {CATEGORY_LABELS[r.category]}
                {r.kidsFriendly && " · 👶 儿童适合"}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <button onClick={(e) => { e.stopPropagation(); onToggleFav(r.id); }} className="p-0.5">
                <Heart className={`w-4 h-4 ${isFav ? "text-red-400 fill-red-400" : "text-gray-300"}`} />
              </button>
              {extraBtn && extraBtn(r)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
