import { useEffect, useState } from "react";
import { useStore } from "./store/useStore";
import TopBar from "./components/TopBar";
import BottomNav from "./components/BottomNav";
import CuisineDrawer from "./components/CuisineDrawer";
import HomePage from "./components/HomePage";
import CuisinePage from "./components/CuisinePage";
import FridgePage from "./components/FridgePage";
import KidsPage from "./components/KidsPage";
import FavoritesPage from "./components/FavoritesPage";
import HistoryPage from "./components/HistoryPage";
import TomorrowPage from "./components/TomorrowPage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipePage from "./components/AddRecipePage";
import SearchDrawer from "./components/SearchDrawer";

export default function App() {
  const activeTab = useStore((s) => s.activeTab);
  const showKidsPage = useStore((s) => s.showKidsPage);
  const showDetail = useStore((s) => s.showDetail);
  const detailRecipeId = useStore((s) => s.detailRecipeId);
  const currentRecipe = useStore((s) => s.currentRecipe);
  const userData = useStore((s) => s.userData);
  const init = useStore((s) => s.init);
  const closeDetail = useStore((s) => s.closeDetail);
  const toggleFav = useStore((s) => s.toggleFav);
  const toggleTomorrow = useStore((s) => s.toggleTomorrow);
  const getRecipeById = useStore((s) => s.getRecipeById);
  const setTab = useStore((s) => s.setTab);
  const addPlanToTomorrow = useStore((s) => s.addPlanToTomorrow);
  const [showShareImport, setShowShareImport] = useState(false);
  const [sharedRecipeIds, setSharedRecipeIds] = useState<string[]>([]);
  const [showAddRecipe, setShowAddRecipe] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    init();
    // Check for shared menu in URL
    const params = new URLSearchParams(window.location.search);
    const share = params.get("share");
    if (share) {
      const ids = decodeURIComponent(share).split(",").filter(Boolean);
      if (ids.length > 0) {
        setSharedRecipeIds(ids);
        setShowShareImport(true);
      }
    }
    // Check for add-recipe action (from custom recipe share)
    if (params.get("action") === "add-recipe") {
      setShowAddRecipe(true);
    }
  }, []);

  if (showAddRecipe) {
    return <AddRecipePage onClose={() => setShowAddRecipe(false)} />;
  }
  if (showSearch) {
    return <SearchDrawer onClose={() => setShowSearch(false)} />;
  }

  if (showKidsPage) {
    return (<><KidsPage /><CuisineDrawer /></>);
  }

  const detailRecipe = detailRecipeId ? getRecipeById(detailRecipeId) : currentRecipe;

  return (
    <div className="min-h-dvh pb-16">
      <TopBar onOpenSearch={() => setShowSearch(true)} />
      {activeTab === "home" && <HomePage />}
      {activeTab === "cuisine" && <CuisinePage />}
      {activeTab === "fridge" && <FridgePage />}
      {activeTab === "favorites" && <FavoritesPage />}
      {activeTab === "history" && <HistoryPage />}
      {activeTab === "tomorrow" && <TomorrowPage />}
      {showDetail && detailRecipe && (
        <RecipeDetail recipe={detailRecipe} isFavorite={userData.favorites.includes(detailRecipe.id)}
          isInTomorrow={userData.tomorrowMenu.some(h => h.recipeId === detailRecipe.id)}
          onClose={closeDetail} onToggleFav={() => toggleFav(detailRecipe.id)}
          onToggleTomorrow={() => toggleTomorrow(detailRecipe.id)} />
      )}
      <CuisineDrawer />
      <BottomNav />

      {/* Share import modal */}
      {showShareImport && sharedRecipeIds.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl p-5 mx-4 max-w-sm w-full">
            <div className="text-3xl mb-2">📥</div>
            <h3 className="font-bold text-gray-800 mb-1">收到分享菜单</h3>
            <p className="text-sm text-gray-500 mb-3">
              {sharedRecipeIds.length} 道菜，要保存到你的明日菜单吗？
            </p>
            <div className="space-y-1.5 mb-4 max-h-40 overflow-y-auto">
              {sharedRecipeIds.map(id => {
                const r = getRecipeById(id);
                return r ? (
                  <div key={id} className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{r.emoji}</span><span>{r.name}</span>
                  </div>
                ) : null;
              })}
            </div>
            <div className="flex gap-2">
              <button onClick={() => {
                addPlanToTomorrow(sharedRecipeIds);
                setShowShareImport(false);
                setTab("tomorrow");
              }}
                className="flex-1 py-2.5 bg-orange-500 text-white rounded-xl text-sm font-medium">
                📅 保存到明日菜单
              </button>
              <button onClick={() => setShowShareImport(false)}
                className="px-4 py-2.5 bg-gray-100 text-gray-500 rounded-xl text-sm">关闭</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
