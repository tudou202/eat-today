import type { Recipe } from "../types";
import { CATEGORY_LABELS, DIFFICULTY_LABELS, CUISINE_INFO } from "../types";
import type { Cuisine } from "../types";
import { Clock, Flame, Baby } from "lucide-react";

interface Props {
  recipe: Recipe;
  isFavorite: boolean;
  cardKey: number;
  onOpenDetail: () => void;
}

export default function RecipeCard({ recipe, isFavorite, cardKey, onOpenDetail }: Props) {
  return (
    <div className="px-4" key={cardKey}>
      <div
        className="animate-card-in relative mx-auto max-w-sm bg-white rounded-2xl shadow-lg shadow-orange-100/50
                    border border-orange-100 overflow-hidden active:scale-[0.98] transition-transform"
      >
        <div className="h-2 bg-gradient-to-r from-orange-400 to-orange-500" />

        <div className="p-5">
          {/* 菜名行 */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-3xl">{recipe.emoji || "🍽️"}</span>
              <h2 className="text-2xl font-bold text-gray-800">{recipe.name}</h2>
            </div>
            <div className="flex items-center gap-1">
              {recipe.kidsFriendly && (
                <span className="text-orange-400" title="儿童适合">
                  <Baby className="w-4 h-4" />
                </span>
              )}
              {isFavorite && <span className="text-red-400 text-lg">❤️</span>}
            </div>
          </div>

          {/* 菜系 + 时间 + 难度 */}
          <div className="flex items-center gap-3 mb-3 text-sm text-gray-500 flex-wrap">
            <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full text-xs font-medium">
              {CUISINE_INFO[recipe.cuisine as Cuisine]?.name}
            </span>
            <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded-full text-xs font-medium">
              {CATEGORY_LABELS[recipe.category]}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {recipe.cookingTime}分钟
            </span>
            <span className="inline-flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" />
              {DIFFICULTY_LABELS[recipe.difficulty]}
            </span>
          </div>

          {/* 标签 */}
          {recipe.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {recipe.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* 主要食材 */}
          <div className="mb-4">
            <p className="text-xs text-gray-400 mb-1">主要食材</p>
            <p className="text-sm text-gray-600">{recipe.mainIngredients.join("、")}</p>
          </div>

          {/* 点击看做法 */}
          <button
            onClick={() => onOpenDetail()}
            className="w-full py-2 text-sm text-orange-500 bg-orange-50 rounded-xl
                       active:bg-orange-100 transition-colors font-medium"
          >
            👆 点我看做法
          </button>
        </div>
      </div>
    </div>
  );
}
