import { create } from "zustand";
import type { Recipe, UserData, RecommendFilters, Cuisine, TabKey } from "../types";
import { loadUserData, addToHistory, toggleFavorite, setCuisineFilter, toggleTomorrowMenu, addMealPlanToTomorrow } from "../utils/storage";
import { pickRecipe } from "../utils/recommend";
import recipes from "../data/recipes";

function getMergedRecipes(): Recipe[] {
  try {
    const raw = localStorage.getItem("eat-today-custom-recipes");
    const custom = raw ? JSON.parse(raw) : [];
    return [...custom, ...recipes];
  } catch { return recipes; }
}

interface AppState {
  currentRecipe: Recipe | null;
  filters: RecommendFilters;
  userData: UserData;
  activeTab: TabKey;
  showDetail: boolean;
  drawerOpen: boolean;
  showKidsPage: boolean;
  detailRecipeId: string | null;
  cardKey: number;

  init: () => void;
  refresh: () => void;
  setFilter: (filters: Partial<RecommendFilters>) => void;
  setCuisine: (cuisine: Cuisine) => void;
  toggleFav: (recipeId: string) => void;
  toggleTomorrow: (recipeId: string) => void;
  addPlanToTomorrow: (recipeIds: string[]) => void;
  markEaten: (recipeId: string, dateStr?: string) => void;
  openDetail: (recipeId?: string) => void;
  closeDetail: () => void;
  setTab: (tab: TabKey) => void;
  toggleDrawer: () => void;
  closeDrawer: () => void;
  openKidsPage: () => void;
  closeKidsPage: () => void;
  getRecipeById: (id: string) => Recipe | undefined;
}

export const useStore = create<AppState>((set, get) => ({
  currentRecipe: null,
  filters: { category: null, cuisine: "all", maxTime: Infinity, difficulty: null },
  userData: { history: [], favorites: [], cuisineFilter: "all", tomorrowMenu: [] },
  activeTab: "home",
  showDetail: false,
  drawerOpen: false,
  showKidsPage: false,
  detailRecipeId: null,
  cardKey: 0,

  init: () => {
    const userData = loadUserData();
    const filters = { ...get().filters, cuisine: userData.cuisineFilter };
    const recipe = pickRecipe(getMergedRecipes(), filters);
    set({ userData, filters, currentRecipe: recipe });
  },

  refresh: () => {
    const { filters, cardKey } = get();
    const recipe = pickRecipe(getMergedRecipes(), filters);
    set({ currentRecipe: recipe, cardKey: cardKey + 1, showDetail: false, detailRecipeId: null });
  },

  setFilter: (partial) => {
    const filters = { ...get().filters, ...partial };
    const recipe = pickRecipe(getMergedRecipes(), filters);
    set({ filters, currentRecipe: recipe, cardKey: get().cardKey + 1, showDetail: false });
  },

  setCuisine: (cuisine) => {
    const userData = setCuisineFilter(cuisine);
    const filters = { ...get().filters, cuisine };
    const recipe = pickRecipe(getMergedRecipes(), filters);
    set({ userData, filters, currentRecipe: recipe, cardKey: get().cardKey + 1, drawerOpen: false, showDetail: false });
  },

  toggleFav: (recipeId) => { const userData = toggleFavorite(recipeId); set({ userData }); },
  toggleTomorrow: (recipeId) => { const userData = toggleTomorrowMenu(recipeId); set({ userData }); },
  addPlanToTomorrow: (recipeIds) => { const userData = addMealPlanToTomorrow(recipeIds); set({ userData }); },
  markEaten: (recipeId, dateStr?) => { const userData = addToHistory(recipeId, dateStr); set({ userData }); },

  openDetail: (recipeId) => set({ showDetail: true, detailRecipeId: recipeId || get().currentRecipe?.id || null }),
  closeDetail: () => set({ showDetail: false, detailRecipeId: null }),
  setTab: (tab) => set({ activeTab: tab, showDetail: false, showKidsPage: false }),
  toggleDrawer: () => set((s) => ({ drawerOpen: !s.drawerOpen })),
  closeDrawer: () => set({ drawerOpen: false }),
  openKidsPage: () => set({ showKidsPage: true }),
  closeKidsPage: () => set({ showKidsPage: false }),

  getRecipeById: (id) => getMergedRecipes().find((r: Recipe) => r.id === id),
}));
