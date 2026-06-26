import { useState } from "react";
import { useStore } from "../store/useStore";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import recipes from "../data/recipes";
import { CUISINE_INFO, CUISINE_ORDER } from "../types";
import type { Cuisine } from "../types";
import { ArrowLeft } from "lucide-react";

export default function CuisinePage() {
  const [selected, setSelected] = useState<Cuisine | null>(null);
  const [detailId, setDetailId] = useState<string | null>(null);
  const userData = useStore((s) => s.userData);
  const toggleFav = useStore((s) => s.toggleFav);
  const toggleTomorrow = useStore((s) => s.toggleTomorrow);
  const getRecipeById = useStore((s) => s.getRecipeById);
  const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  if (!selected) {
    // Show cuisine grid
    const counts: Record<string, number> = {};
    recipes.forEach((r) => { counts[r.cuisine] = (counts[r.cuisine] || 0) + 1; });
    // Also count by category for special entries
    counts["staple"] = recipes.filter(r => r.category === "staple").length;
    counts["soup_all"] = recipes.filter(r => r.category === "soup").length;
    counts["dessert"] = recipes.filter(r => r.category === "dessert").length;

    return (
      <div className="min-h-dvh pb-24">
        <div className="px-4 py-3">
          <h2 className="font-bold text-gray-800 text-lg">🍳 菜系浏览</h2>
          <p className="text-xs text-gray-400 mt-0.5">选一个菜系，看看有什么好吃的</p>
        </div>
        <div className="px-4 grid grid-cols-2 gap-2.5">
          {CUISINE_ORDER.map((c) => {
            const info = CUISINE_INFO[c];
            const count = counts[c] || 0;
            return (
              <button key={c} onClick={() => setSelected(c)}
                className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm active:scale-95 transition-transform text-left">
                <span className="text-3xl block mb-2">{info.emoji}</span>
                <span className="font-semibold text-gray-800 text-sm">{info.name}</span>
                <p className="text-xs text-gray-400 mt-0.5">{info.desc}</p>
                <span className="text-xs text-orange-500 mt-1 block">{count} 道菜</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Filter recipes by cuisine or category
  let cuisineRecipes: typeof recipes;
  if (selected === "staple") {
    cuisineRecipes = recipes.filter(r => r.category === "staple");
  } else if (selected === "soup_all") {
    cuisineRecipes = recipes.filter(r => r.category === "soup");
  } else if (selected === "dessert") {
    cuisineRecipes = recipes.filter(r => r.category === "dessert");
  } else {
    cuisineRecipes = recipes.filter(r => r.cuisine === selected);
  }

  const info = CUISINE_INFO[selected];
  return (
    <div className="min-h-dvh pb-24">
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="flex items-center gap-3 px-4 h-12">
          <button onClick={() => setSelected(null)} className="p-1 rounded-lg active:bg-orange-50">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <span className="font-bold text-gray-800">{info.emoji} {info.name}</span>
          <span className="text-xs text-gray-400">{cuisineRecipes.length} 道菜</span>
        </div>
      </div>
      <div className="pt-3">
        <RecipeList recipes={cuisineRecipes} favorites={userData.favorites}
          emptyText="该分类暂无菜谱" onTap={(r) => setDetailId(r.id)}
          onToggleFav={toggleFav}
          extraBtn={(r) => (
            <button onClick={(e) => { e.stopPropagation(); toggleTomorrow(r.id); }}
className={`text-xs px-1.5 py-0.5 rounded ${userData.tomorrowMenu.some(h => h.recipeId === r.id && h.date === tomorrowStr) ? "bg-blue-50 text-blue-500" : "bg-gray-100 text-gray-400"}`}>
              {userData.tomorrowMenu.some(h => h.recipeId === r.id && h.date === tomorrowStr) ? "已加" : "📅"}
            </button>
          )} />
      </div>
      {detailId && (
        <RecipeDetail recipe={getRecipeById(detailId)!} isFavorite={userData.favorites.includes(detailId)}
          onClose={() => setDetailId(null)}
          onToggleFav={() => toggleFav(detailId)} />
      )}
    </div>
  );
}
