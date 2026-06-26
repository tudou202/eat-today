import { useEffect } from "react";
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

  useEffect(() => { init(); }, []);

  if (showKidsPage) {
    return (<><KidsPage /><CuisineDrawer /></>);
  }

  const detailRecipe = detailRecipeId ? getRecipeById(detailRecipeId) : currentRecipe;

  return (
    <div className="min-h-dvh pb-16">
      <TopBar />
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
    </div>
  );
}
