import { useState, useMemo } from "react";
import { useStore } from "../store/useStore";
import RecipeDetail from "./RecipeDetail";
import RecipeList from "./RecipeList";
import { Calendar, ShoppingCart, Trash2, Trash, AlertTriangle } from "lucide-react";

function getTomorrowLabel(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const days = ["日","一","二","三","四","五","六"];
  return `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 周${days[d.getDay()]}`;
}
function getTomorrowStr(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

export default function TomorrowPage() {
  const [detailId, setDetailId] = useState<string | null>(null);
  const userData = useStore((s) => s.userData);
  const toggleFav = useStore((s) => s.toggleFav);
  const toggleTomorrow = useStore((s) => s.toggleTomorrow);
  const markEaten = useStore((s) => s.markEaten);
  const getRecipeById = useStore((s) => s.getRecipeById);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const tomorrow = getTomorrowStr();

  const menuRecipes = userData.tomorrowMenu
    .filter((h) => h.date === tomorrow)
    .map((h) => getRecipeById(h.recipeId))
    .filter(Boolean) as NonNullable<ReturnType<typeof getRecipeById>>[];

  // 汇总食材: merge same name, separate from seasonings
  const { ingredients, seasonings } = useMemo(() => {
    const allIngs: { name: string; amount: string; cuisine?: string; dish?: string }[] = [];
    for (const r of menuRecipes) {
      for (const ing of r.allIngredients) {
        allIngs.push({ ...ing, cuisine: r.cuisine, dish: r.name });
      }
    }
    const seasoningNames = new Set(["盐","糖","生抽","老抽","蚝油","料酒","醋","香油","淀粉","白胡椒粉","花椒粉","辣椒油","豆瓣酱","番茄酱","甜面酱","黄豆酱","芝麻酱","食用油","油","姜","葱","蒜","香菜","白芝麻","干辣椒","花椒","八角","桂皮","香叶","冰糖","蜂蜜","鸡精","味精"]);
    const ings: { name: string; amount: string }[] = [];
    const seas: { name: string; amount: string }[] = [];
    for (const ing of allIngs) {
      if (seasoningNames.has(ing.name)) {
        const exist = seas.find(s => s.name === ing.name);
        if (exist) exist.amount += "、" + ing.amount;
        else seas.push({ name: ing.name, amount: ing.amount });
      } else {
        const exist = ings.find(s => s.name === ing.name);
        if (exist) exist.amount += "、" + ing.amount;
        else ings.push({ name: ing.name, amount: ing.amount });
      }
    }
    return { ingredients: ings, seasonings: seas };
  }, [menuRecipes]);

  const onToggleTomorrow = (id: string) => { toggleTomorrow(id); };

  return (
    <div className="min-h-dvh pb-24">
      {/* Date header */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 mb-1">
          <Calendar className="w-5 h-5 text-orange-500" />
          <span className="font-bold text-gray-800 text-lg">{getTomorrowLabel()}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">
            {menuRecipes.length === 0 ? "还没有安排菜单" : `共 ${menuRecipes.length} 道菜`}
          </p>
          {menuRecipes.length > 0 && (
            <button onClick={() => setShowClearConfirm(true)}
              className="flex items-center gap-1 px-2.5 py-1 bg-red-50 text-red-500 rounded-lg text-xs font-medium active:bg-red-100">
              <Trash className="w-3.5 h-3.5" /> 一键清除
            </button>
          )}
        </div>
      </div>

      {menuRecipes.length > 0 ? (
        <>
          {/* Dish list */}
          <div className="mb-4">
            <RecipeList
              recipes={menuRecipes}
              favorites={userData.favorites}
              
              emptyText=""
              onTap={(r) => setDetailId(r.id)}
              onToggleFav={toggleFav}
              extraBtn={(r) => (
                <button onClick={(e) => { e.stopPropagation(); onToggleTomorrow(r.id); }}
                  className="p-1 rounded text-gray-300 hover:text-red-400" title="移除">
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            />
          </div>

          {/* Shopping list */}
          <div className="px-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingCart className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-bold text-gray-700">采购清单</span>
              </div>

              {ingredients.length > 0 && (
                <div className="mb-3">
                  <p className="text-xs text-gray-400 mb-1.5">🥬 食材</p>
                  <div className="flex flex-wrap gap-1.5">
                    {ingredients.map((i) => (
                      <span key={i.name} className="bg-orange-50 text-orange-700 px-2.5 py-1 rounded-lg text-sm">
                        {i.name} <span className="text-orange-400 text-xs">{i.amount}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {seasonings.length > 0 && (
                <div>
                  <p className="text-xs text-gray-400 mb-1.5">🧂 调料</p>
                  <div className="flex flex-wrap gap-1.5">
                    {seasonings.map((i) => (
                      <span key={i.name} className="bg-gray-50 text-gray-600 px-2.5 py-1 rounded-lg text-sm">
                        {i.name} <span className="text-gray-400 text-xs">{i.amount}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <span className="text-5xl mb-3">📅</span>
          <p className="text-sm font-medium text-gray-500">明天的菜单还没安排</p>
          <p className="text-xs mt-1">去首页用自动配菜或者单独添加菜品</p>
        </div>
      )}

      {detailId && (
        <RecipeDetail recipe={getRecipeById(detailId)!} isFavorite={userData.favorites.includes(detailId)}
          isInTomorrow={userData.tomorrowMenu.some(h => h.recipeId === detailId && h.date === tomorrow)}
          onClose={() => setDetailId(null)} onToggleFav={() => toggleFav(detailId)}
          onToggleTomorrow={() => toggleTomorrow(detailId)} />
      )}

      {/* Clear confirmation modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setShowClearConfirm(false)}>
          <div className="bg-white rounded-2xl p-5 mx-4 max-w-sm w-full" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span className="font-bold text-gray-800">清除明日菜单</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">是否将菜单中的菜品记录到已吃？</p>
            <div className="flex gap-2">
              <button onClick={() => {
                for (const r of menuRecipes) markEaten(r.id, tomorrow);
                for (const r of menuRecipes) toggleTomorrow(r.id);
                setShowClearConfirm(false);
              }}
                className="flex-1 py-2.5 bg-green-500 text-white rounded-xl text-sm font-medium">
                ✅ 记录并清除
              </button>
              <button onClick={() => {
                for (const r of menuRecipes) toggleTomorrow(r.id);
                setShowClearConfirm(false);
              }}
                className="flex-1 py-2.5 bg-gray-200 text-gray-600 rounded-xl text-sm font-medium">
                直接清除
              </button>
            </div>
            <button onClick={() => setShowClearConfirm(false)}
              className="w-full mt-2 py-2 text-sm text-gray-400">取消</button>
          </div>
        </div>
      )}
    </div>
  );
}
