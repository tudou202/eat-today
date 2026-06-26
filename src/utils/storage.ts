import type { UserData } from "../types";

const STORAGE_KEY = "eat-today-v2";

const defaultData: UserData = {
  history: [],
  favorites: [],
  cuisineFilter: "all",
  tomorrowMenu: [],
};

export function loadUserData(): UserData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultData, history: [], favorites: [] };
    const parsed = JSON.parse(raw) as UserData;
    return {
      history: parsed.history || [],
      favorites: parsed.favorites || [],
      cuisineFilter: parsed.cuisineFilter || "all",
      tomorrowMenu: parsed.tomorrowMenu || [],
    };
  } catch {
    return { ...defaultData, history: [], favorites: [], tomorrowMenu: [] };
  }
}

export function toggleTomorrowMenu(recipeId: string): UserData {
  const data = loadUserData();
  const tomorrow = getTomorrowStr();
  const idx = data.tomorrowMenu.findIndex(h => h.recipeId === recipeId && h.date === tomorrow);
  if (idx >= 0) {
    data.tomorrowMenu.splice(idx, 1);
  } else {
    data.tomorrowMenu.push({ recipeId, date: tomorrow });
  }
  saveUserData(data);
  return data;
}

export function addMealPlanToTomorrow(recipeIds: string[]): UserData {
  const data = loadUserData();
  const tomorrow = getTomorrowStr();
  for (const id of recipeIds) {
    if (!data.tomorrowMenu.find(h => h.recipeId === id && h.date === tomorrow)) {
      data.tomorrowMenu.push({ recipeId: id, date: tomorrow });
    }
  }
  saveUserData(data);
  return data;
}

function getTomorrowStr(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

export function saveUserData(data: UserData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function addToHistory(recipeId: string, dateStr?: string): UserData {
  const data = loadUserData();
  const today = dateStr || new Date().toISOString().split("T")[0];
  data.history = [
    { recipeId, date: today },
    ...data.history.filter((h) => h.recipeId !== recipeId || h.date !== today),
  ].slice(0, 200);
  saveUserData(data);
  return data;
}

export function toggleFavorite(recipeId: string): UserData {
  const data = loadUserData();
  const idx = data.favorites.indexOf(recipeId);
  if (idx >= 0) {
    data.favorites.splice(idx, 1);
  } else {
    data.favorites.push(recipeId);
  }
  saveUserData(data);
  return data;
}

export function setCuisineFilter(cuisine: string): UserData {
  const data = loadUserData();
  data.cuisineFilter = cuisine as UserData["cuisineFilter"];
  saveUserData(data);
  return data;
}

export function getRecentRecipeIds(days = 7): string[] {
  const data = loadUserData();
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const cutoffStr = cutoff.toISOString().split("T")[0];
  return data.history
    .filter((h) => h.date >= cutoffStr)
    .map((h) => h.recipeId);
}
