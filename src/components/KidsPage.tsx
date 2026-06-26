import { useState } from "react";
import { useStore } from "../store/useStore";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import recipes from "../data/recipes";
import type { Category } from "../types";
import { ArrowLeft } from "lucide-react";

const KIDS_CATEGORIES: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "meat", label: "🥩 荤菜" },
  { key: "veggie", label: "🥬 素菜" },
  { key: "staple", label: "🍜 主食" },
  { key: "soup", label: "🍲 汤羹" },
  { key: "dessert", label: "🍰 甜品" },
];

export default function KidsPage() {
  const [catFilter, setCatFilter] = useState<Category | "all">("all");
  const [detailRecipe, setDetailRecipe] = useState<string | null>(null);

  const closeKidsPage = useStore((s) => s.closeKidsPage);
  const userData = useStore((s) => s.userData);
  const toggleFav = useStore((s) => s.toggleFav);
  const toggleTomorrow = useStore((s) => s.toggleTomorrow);
  const getRecipeById = useStore((s) => s.getRecipeById);
  const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split("T")[0];

  const kidsRecipes = recipes
    .filter((r) => r.kidsFriendly)
    .filter((r) => catFilter === "all" || r.category === catFilter);

  return (
    <div className="min-h-dvh bg-orange-50/30 pb-24">
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="flex items-center gap-3 px-4 h-12">
          <button onClick={closeKidsPage} className="p-1 rounded-lg active:bg-orange-50">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <span className="font-bold text-gray-800">🥔 土豆专区</span>
        </div>
        <p className="px-4 pb-2 text-xs text-gray-400">
          适合小朋友的菜 — 无刺无骨·口味温和·营养均衡
        </p>

        {/* Category filter instead of age */}
        <div className="flex gap-1.5 px-4 pb-2 overflow-x-auto">
          {KIDS_CATEGORIES.map((f) => {
            const active = catFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setCatFilter(f.key)}
  className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  active ? "bg-orange-500 text-white" : "bg-white text-gray-500 border border-gray-200"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-3">
        <RecipeList
          recipes={kidsRecipes}
          favorites={userData.favorites}
          
          emptyText="这个分类还没有菜谱"
          onTap={(r) => setDetailRecipe(r.id)}
          onToggleFav={toggleFav}
          extraBtn={(r) => (
            <button onClick={(e) => { e.stopPropagation(); toggleTomorrow(r.id); }}
className={`text-xs px-1.5 py-0.5 rounded ${userData.tomorrowMenu.some(h => h.recipeId === r.id && h.date === tomorrowStr) ? "bg-blue-50 text-blue-500" : "bg-gray-100 text-gray-400"}`}>
              {userData.tomorrowMenu.some(h => h.recipeId === r.id && h.date === tomorrowStr) ? "已加" : "📅"}
            </button>
          )}
        />
      </div>

      {detailRecipe && (
        <RecipeDetail
          recipe={getRecipeById(detailRecipe)!}
          isFavorite={userData.favorites.includes(detailRecipe)}
          onClose={() => setDetailRecipe(null)}
          onToggleFav={() => toggleFav(detailRecipe)}
          />
      )}
    </div>
  );
}
