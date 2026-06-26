import { useState } from "react";
import { useStore } from "../store/useStore";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";

export default function FavoritesPage() {
  const [detailId, setDetailId] = useState<string | null>(null);

  const userData = useStore((s) => s.userData);
  const toggleFav = useStore((s) => s.toggleFav);
  const getRecipeById = useStore((s) => s.getRecipeById);

  const recipes = userData.favorites
    .map((id) => getRecipeById(id))
    .filter(Boolean) as NonNullable<ReturnType<typeof getRecipeById>>[];

  return (
    <div className="min-h-dvh pt-3 pb-24">
      <div className="px-4 mb-3">
        <p className="text-sm text-gray-400">
          共收藏 <span className="text-orange-500 font-semibold">{recipes.length}</span> 道菜
        </p>
      </div>
      <RecipeList
        recipes={recipes}
        favorites={userData.favorites}
        
        emptyText="还没有收藏的菜，去首页收藏吧 ❤️"
        onTap={(r) => setDetailId(r.id)}
        onToggleFav={toggleFav}
        />

      {detailId && (
        <RecipeDetail
          recipe={getRecipeById(detailId)!}
          isFavorite={true}
          onClose={() => setDetailId(null)}
          onToggleFav={() => toggleFav(detailId)}
          />
      )}
    </div>
  );
}
