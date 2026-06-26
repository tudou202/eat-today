import { useState, useMemo } from "react";
import { useStore } from "../store/useStore";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import recipes from "../data/recipes";
import { searchByIngredients } from "../utils/recommend";
import { X, Search } from "lucide-react";

const COMMON_INGREDIENTS = [
  "鸡蛋","番茄","土豆","青椒","豆腐","猪肉","鸡肉","牛肉",
  "白菜","胡萝卜","洋葱","面条","西兰花","虾","鱼","茄子",
  "黄瓜","豆角","辣椒","蘑菇","玉米","冬瓜","排骨","火腿",
];

export default function FridgePage() {
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [detailId, setDetailId] = useState<string | null>(null);

  const userData = useStore((s) => s.userData);
  const toggleFav = useStore((s) => s.toggleFav);
  const getRecipeById = useStore((s) => s.getRecipeById);

  const addIngredient = (name: string) => {
    const clean = name.trim();
    if (clean && !selected.includes(clean)) {
      setSelected([...selected, clean]);
    }
    setInput("");
  };

  const removeIngredient = (name: string) => {
    setSelected(selected.filter((s) => s !== name));
  };

  const results = useMemo(() => {
    if (selected.length === 0) return [];
    return searchByIngredients(recipes, selected);
  }, [selected]);

  const almostThere = useMemo(() => {
    if (selected.length < 2) return [];
    const resultIds = new Set(results.map((r) => r.recipe.id));
    return recipes
      .filter((r) => !resultIds.has(r.id))
      .map((r) => {
        // Count how many of the user's selected ingredients match this recipe
        let matchCount = 0;
        const missing: string[] = [];
        // Check recipe's mainIngredients against selected
        for (const mi of r.mainIngredients) {
          const found = selected.some((s) =>
            mi === s || mi.includes(s) || s.includes(mi)
          );
          if (found) matchCount++;
          else missing.push(mi);
        }
        return { recipe: r, matchCount, missing };
      })
      // Only show dishes where: at least 1 selected ingredient matched AND missing exactly 1
      .filter((r) => r.matchCount >= 1 && r.missing.length === 1)
      .sort((a, b) => b.matchCount - a.matchCount)
      .slice(0, 5);
  }, [selected, results]);

  return (
    <div className="min-h-dvh pb-24">
      <div className="px-4 py-3">
        <h2 className="font-bold text-gray-800 text-lg">🧊 冰箱里有什么？</h2>
        <p className="text-xs text-gray-400 mt-0.5">输入食材，看看能做什么菜</p>
      </div>

      {/* Input area */}
      <div className="px-4 mb-3">
        <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-200 px-3 py-2">
          <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") { addIngredient(input); } }}
            placeholder="输入食材名称…"
            className="flex-1 text-sm outline-none bg-transparent"
          />
        </div>

        {/* Common ingredients */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {COMMON_INGREDIENTS.filter((i) => !selected.includes(i)).map((i) => (
            <button
              key={i}
              onClick={() => addIngredient(i)}
              className="px-2.5 py-1 rounded-full bg-white border border-gray-200 text-xs text-gray-500 active:bg-orange-50 active:border-orange-200 active:text-orange-600 transition-colors"
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      {/* Selected ingredients */}
      {selected.length > 0 && (
        <div className="px-4 mb-3">
          <p className="text-xs text-gray-400 mb-1.5">已选食材</p>
          <div className="flex flex-wrap gap-1.5">
            {selected.map((s) => (
              <span key={s} className="inline-flex items-center gap-1 px-2.5 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                {s}
                <button onClick={() => removeIngredient(s)}>
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}
            <button
              onClick={() => { if (input.trim()) addIngredient(input); }}
              className="px-2.5 py-1 rounded-full border border-dashed border-gray-300 text-xs text-gray-400 active:bg-gray-50"
            >
              + 添加
            </button>
          </div>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="px-4 mb-1">
          <p className="text-xs text-gray-400 mb-1.5">
            可以做的菜（{results.length}道）
          </p>
          <RecipeList
            recipes={results.map((r) => r.recipe)}
            favorites={userData.favorites}
            
            emptyText=""
            onTap={(r) => setDetailId(r.id)}
            onToggleFav={toggleFav}
            />
        </div>
      )}

      {/* Almost there */}
      {almostThere.length > 0 && (
        <div className="px-4 mt-4">
          <p className="text-xs text-gray-400 mb-1.5">还差 1 样就能做</p>
          <div className="space-y-1.5">
            {almostThere.map(({ recipe, missing }) => (
              <div key={recipe.id} className="bg-white rounded-xl p-3 border border-gray-100 flex items-center gap-3">
                <span className="text-xl">🍽️</span>
                <div className="flex-1 min-w-0">
                  <span className="font-medium text-gray-700 text-sm">{recipe.name}</span>
                  <p className="text-xs text-orange-500">
                    缺：{missing.join("、")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {selected.length > 0 && results.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
          <span className="text-4xl mb-3">🔍</span>
          <p className="text-sm">这些食材搭配不出完整的菜</p>
          <p className="text-xs mt-1">试试减少或更换食材</p>
        </div>
      )}

      {selected.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
          <span className="text-4xl mb-3">🧊</span>
          <p className="text-sm">添加食材开始搜索</p>
        </div>
      )}

      {detailId && (
        <RecipeDetail
          recipe={getRecipeById(detailId)!}
          isFavorite={userData.favorites.includes(detailId)}
          onClose={() => setDetailId(null)}
          onToggleFav={() => toggleFav(detailId)}
          />
      )}
    </div>
  );
}
