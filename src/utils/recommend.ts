import type { Recipe, RecommendFilters } from "../types";
import { getRecentRecipeIds, loadUserData } from "./storage";

export function pickRecipe(recipes: Recipe[], filters: RecommendFilters): Recipe | null {
  const userData = loadUserData();
  const recentIds = getRecentRecipeIds(7);
  const favoriteIds = userData.favorites;

  let pool = recipes.filter((r) => {
    if (filters.cuisine !== "all" && r.cuisine !== filters.cuisine) return false;
    if (filters.category && r.category !== filters.category) return false;
    if (filters.maxTime < Infinity && r.cookingTime > filters.maxTime) return false;
    if (filters.difficulty !== null && r.difficulty !== filters.difficulty) return false;
    if (recentIds.includes(r.id)) return false;
    return true;
  });

  if (pool.length === 0) {
    pool = recipes.filter((r) => {
      if (filters.cuisine !== "all" && r.cuisine !== filters.cuisine) return false;
      if (filters.category && r.category !== filters.category) return false;
      if (filters.maxTime < Infinity && r.cookingTime > filters.maxTime) return false;
      if (filters.difficulty !== null && r.difficulty !== filters.difficulty) return false;
      return true;
    });
  }

  if (pool.length === 0) pool = recipes;

  const scored = pool.map((r) => {
    let score = 0;
    if (favoriteIds.includes(r.id)) score += 3;
    score += Math.random() - 0.5;
    return { recipe: r, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const topCount = Math.max(1, Math.ceil(scored.length * 0.6));
  const pick = scored[Math.floor(Math.random() * topCount)];
  return pick?.recipe ?? null;
}

// 食材匹配：检查所选食材在菜谱的所有食材中出现了多少个
// 改为匹配 allIngredients 中的 name，更精确
export function searchByIngredients(
  recipes: Recipe[],
  ingredients: string[]
): { recipe: Recipe; matchCount: number; totalCount: number }[] {
  const inputs = ingredients.map((s) => s.trim());
  const results = recipes.map((r) => {
    // 从 allIngredients 中检查每个食材名是否匹配用户输入的任一食材
    let matchCount = 0;
    for (const input of inputs) {
      // 检查是否匹配菜谱中的任一个食材（精确匹配食材名）
      const found = r.allIngredients.some((ing) => {
        const ingName = ing.name;
        // 双向包含匹配更准确：用户输入"鸡蛋"匹配"鸡蛋"，用户输入"肉"匹配"猪肉""鸡肉"等
        return ingName === input || ingName.includes(input) || input.includes(ingName);
      });
      if (found) matchCount++;
    }
    return { recipe: r, matchCount, totalCount: inputs.length };
  });
  // 匹配阈值：选1-2个食材，至少匹配1个；选3+个，至少匹配2个
  const minMatch = inputs.length >= 3 ? 2 : 1;
  return results.filter((r) => r.matchCount >= minMatch).sort((a, b) => b.matchCount - a.matchCount);
}
