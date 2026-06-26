import { useState } from "react";
import { useStore } from "../store/useStore";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import recipes from "../data/recipes";
import { ArrowLeft, X } from "lucide-react";

function getMerged() {
  try {
    const raw = localStorage.getItem("eat-today-custom-recipes");
    return [...(raw ? JSON.parse(raw) : []), ...recipes];
  } catch { return recipes; }
}

export default function SearchDrawer({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [detailId, setDetailId] = useState<string | null>(null);
  const userData = useStore((s) => s.userData);
  const toggleFav = useStore((s) => s.toggleFav);
  const toggleTomorrow = useStore((s) => s.toggleTomorrow);
  const getStoreById = useStore((s) => s.getRecipeById);

  const allRecipes = getMerged();
  const results = query.trim()
    ? allRecipes.filter(r => r.name.includes(query.trim()))
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Search bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3 px-4 h-12">
          <button onClick={onClose} className="p-1 rounded-lg active:bg-gray-50">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2">
            <X className={`w-4 h-4 text-gray-400 cursor-pointer ${query ? "visible" : "invisible"}`} onClick={() => setQuery("")} />
            <input
              value={query} onChange={e => setQuery(e.target.value)}
              placeholder="输入菜名搜索…" autoFocus
              className="flex-1 text-sm outline-none bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="pt-3">
        {query.trim() === "" ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <span className="text-4xl mb-3">🔍</span>
            <p className="text-sm">输入菜名开始搜索</p>
          </div>
        ) : results.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <span className="text-4xl mb-3">😕</span>
            <p className="text-sm">没找到「{query}」</p>
          </div>
        ) : (
          <>
            <p className="px-4 text-xs text-gray-400 mb-2">找到 {results.length} 道菜</p>
            <RecipeList
              recipes={results}
              favorites={userData.favorites}
              onTap={(r) => setDetailId(r.id)}
              onToggleFav={toggleFav}
            />
          </>
        )}
      </div>

      {detailId && (
        <RecipeDetail recipe={getStoreById(detailId)!} isFavorite={userData.favorites.includes(detailId)}
          isInTomorrow={userData.tomorrowMenu.some(h => h.recipeId === detailId)}
          onClose={() => setDetailId(null)} onToggleFav={() => toggleFav(detailId)}
          onToggleTomorrow={() => toggleTomorrow(detailId)} />
      )}
    </div>
  );
}
