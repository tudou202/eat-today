import { useState } from "react";
import { useStore } from "../store/useStore";
import { CUISINE_INFO } from "../types";
import type { Recipe } from "../types";
import RecipeCard from "./RecipeCard";
import ActionButtons from "./ActionButtons";
import FilterBar from "./FilterBar";
import HistoryTimeline from "./HistoryTimeline";
import RecipeDetail from "./RecipeDetail";
import recipes from "../data/recipes";
import { ChevronDown, ChefHat, RefreshCw } from "lucide-react";

function randomPick(pool: Recipe[], count: number, excludeIds: Set<string>): Recipe[] {
  const available = pool.filter(r => !excludeIds.has(r.id));
  const result: Recipe[] = [];
  const used = new Set(excludeIds);
  for (let i = 0; i < count && available.length > 0; i++) {
    const idx = Math.floor(Math.random() * available.length);
    const pick = available.splice(idx, 1)[0];
    if (pick && !used.has(pick.id)) {
      result.push(pick);
      used.add(pick.id);
    }
  }
  return result;
}

export default function HomePage() {
  const currentRecipe = useStore((s) => s.currentRecipe);
  const filters = useStore((s) => s.filters);
  const userData = useStore((s) => s.userData);
  const cardKey = useStore((s) => s.cardKey);
  const showDetail = useStore((s) => s.showDetail);
  const detailRecipeId = useStore((s) => s.detailRecipeId);
  const getRecipeById = useStore((s) => s.getRecipeById);

  const refresh = useStore((s) => s.refresh);
  const setFilter = useStore((s) => s.setFilter);
  const toggleFav = useStore((s) => s.toggleFav);
  const openDetail = useStore((s) => s.openDetail);
  const closeDetail = useStore((s) => s.closeDetail);
  const toggleDrawer = useStore((s) => s.toggleDrawer);
  const setCuisine = useStore((s) => s.setCuisine);
  const addPlanToTomorrow = useStore((s) => s.addPlanToTomorrow);
  const toggleTomorrow = useStore((s) => s.toggleTomorrow);

  // Auto meal plan state
  const [mealPlan, setMealPlan] = useState<Recipe[] | null>(null);

  const generateMeal = (dishCount: number) => {
    const soups = recipes.filter(r => r.category === "soup");
    const others = recipes.filter(r => r.category !== "soup" && r.category !== "dessert");
    const soupPicks = randomPick(soups, 1, new Set());
    const dishPicks = randomPick(others, dishCount, new Set(soupPicks.map(s => s.id)));
    setMealPlan([...dishPicks, ...soupPicks]);
  };

  const detailRecipe = detailRecipeId ? getRecipeById(detailRecipeId) : currentRecipe;

  return (
    <div className="pb-2">
      {/* 当前菜系标签 */}
      <div className="px-4 py-2 flex items-center gap-2">
        <button onClick={toggleDrawer}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-gray-200 text-sm active:bg-gray-50 transition-colors">
          <span>{CUISINE_INFO[filters.cuisine]?.emoji} {CUISINE_INFO[filters.cuisine]?.name}</span>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </button>
        {filters.cuisine !== "all" && (
          <button onClick={() => setCuisine("all")}
            className="px-3 py-1.5 bg-white rounded-full border border-orange-200 text-sm text-orange-500 font-medium active:bg-orange-50 transition-colors">
            🔥 全部
          </button>
        )}
      </div>

      {/* 自动配菜 */}
      <div className="px-4 mb-3">
        <div className="bg-white rounded-2xl border border-orange-100 shadow-sm p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <ChefHat className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700">自动配菜</span>
          </div>
          <div className="flex gap-1.5">
            <button onClick={() => generateMeal(2)}
              className="flex-1 py-2 bg-orange-50 text-orange-600 rounded-xl text-sm font-medium active:bg-orange-100 transition-colors">
              两菜一汤
            </button>
            <button onClick={() => generateMeal(3)}
              className="flex-1 py-2 bg-orange-50 text-orange-600 rounded-xl text-sm font-medium active:bg-orange-100 transition-colors">
              三菜一汤
            </button>
            <button onClick={() => generateMeal(4)}
              className="flex-1 py-2 bg-orange-50 text-orange-600 rounded-xl text-sm font-medium active:bg-orange-100 transition-colors">
              🍽️ 四菜一汤
            </button>
          </div>
          {/* Meal plan result */}
          {mealPlan && (
            <div className="mt-2 pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-gray-400">
                  {mealPlan.filter(r => r.category === "soup").length > 0
                    ? `${mealPlan.length - 1}菜${1}汤`
                    : `${mealPlan.length}道菜`}
                </span>
                <button onClick={() => generateMeal(mealPlan.filter(r => r.category === "soup").length > 0 ? mealPlan.length - 1 : mealPlan.length)}
                  className="flex items-center gap-1 text-xs text-orange-500 active:text-orange-600">
                  <RefreshCw className="w-3 h-3" /> 换一桌
                </button>
                <button onClick={() => addPlanToTomorrow(mealPlan.map(r => r.id))}
                  className="flex items-center gap-1 text-xs text-blue-500 active:text-blue-600">
                  📅 加入明日菜单
                </button>
              </div>
              <div className="space-y-1">
                {mealPlan.map((r) => (
                  <div key={r.id} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-gray-50">
                    <span className="text-lg">{r.emoji}</span>
                    <span onClick={() => openDetail(r.id)} className="text-sm text-gray-700 flex-1 active:text-orange-500">{r.name}</span>
                    <span className="text-xs text-gray-400">{r.cookingTime}分</span>
                    <button onClick={() => toggleTomorrow(r.id)}
        className={`text-xs px-1.5 py-0.5 rounded ${userData.tomorrowMenu.some(h => h.recipeId === r.id) ? "bg-blue-50 text-blue-500" : "bg-gray-100 text-gray-400"}`}>
                      {userData.tomorrowMenu.some(h => h.recipeId === r.id) ? "已加" : "+"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recipe Card */}
      {currentRecipe ? (
        <>
          <RecipeCard recipe={currentRecipe} isFavorite={userData.favorites.includes(currentRecipe.id)}
            cardKey={cardKey} onOpenDetail={() => openDetail()} />
          <ActionButtons isFavorite={userData.favorites.includes(currentRecipe.id)}
            onRefresh={refresh}
            onToggleFavorite={() => toggleFav(currentRecipe.id)} />
        </>
      ) : (
        <div className="flex items-center justify-center py-16 text-gray-400">加载中…</div>
      )}

      <FilterBar filters={filters} onSetFilter={setFilter} />
      <HistoryTimeline userData={userData} />

      {/* Detail modal */}
      {showDetail && detailRecipe && (
        <RecipeDetail recipe={detailRecipe} isFavorite={userData.favorites.includes(detailRecipe.id)}
          onClose={closeDetail}
          onToggleFav={() => toggleFav(detailRecipe.id)} />
      )}
    </div>
  );
}
