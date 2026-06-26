export type Category = "meat" | "veggie" | "soup" | "cold" | "staple" | "dessert";

export type Cuisine =
  | "all" | "chuan" | "xiang" | "lu" | "yue" | "su" | "zhe" | "min" | "hui"
  | "home" | "other" | "staple" | "soup_all" | "dessert";

export type TabKey = "home" | "cuisine" | "fridge" | "favorites" | "history" | "tomorrow";

export const CATEGORY_LABELS: Record<Category, string> = {
  meat: "荤菜", veggie: "素菜", soup: "汤羹", cold: "凉菜", staple: "主食", dessert: "甜品",
};

export const DIFFICULTY_LABELS: Record<number, string> = { 1: "简单", 2: "中等", 3: "复杂" };

export const CUISINE_INFO: Record<Cuisine, { name: string; emoji: string; desc: string }> = {
  all:   { name: "全部菜系", emoji: "🔥", desc: "" },
  chuan: { name: "川菜", emoji: "🌶️", desc: "麻辣鲜香" },
  xiang: { name: "湘菜", emoji: "🫘", desc: "香辣浓郁" },
  lu:    { name: "鲁菜", emoji: "🧅", desc: "咸鲜纯正" },
  yue:   { name: "粤菜", emoji: "🦐", desc: "清淡鲜美" },
  su:    { name: "苏菜", emoji: "🐟", desc: "清鲜平和" },
  zhe:   { name: "浙菜", emoji: "🥢", desc: "鲜嫩软滑" },
  min:   { name: "闽菜", emoji: "🍜", desc: "鲜香淡爽" },
  hui:   { name: "徽菜", emoji: "🍖", desc: "重油重色" },
  home:  { name: "家常", emoji: "🏠", desc: "家的味道" },
  other: { name: "其他", emoji: "🌍", desc: "西餐日韩" },
  staple:  { name: "主食", emoji: "🍚", desc: "米饭面食粥" },
  soup_all:{ name: "汤品", emoji: "🥣", desc: "暖心暖胃" },
  dessert: { name: "甜品", emoji: "🍰", desc: "饭后甜点" },
};

export const CUISINE_ORDER: Cuisine[] = [
  "chuan", "xiang", "lu", "yue", "su", "zhe", "min", "hui", "home", "other", "staple", "soup_all", "dessert",
];

export interface Ingredient { name: string; amount: string; }

export interface Recipe {
  id: string;
  name: string;
  category: Category;
  cuisine: Cuisine;
  difficulty: 1 | 2 | 3;
  cookingTime: number;
  mainIngredients: string[];
  allIngredients: Ingredient[];
  steps: string[];
  tips?: string;
  tags: string[];
  kidsFriendly: boolean;
  kidsAge?: "1-3" | "3-6" | "6+";
  emoji: string;
}

export interface UserData {
  history: { recipeId: string; date: string }[];
  favorites: string[];
  cuisineFilter: Cuisine;
  tomorrowMenu: { recipeId: string; date: string }[];
}

export interface RecommendFilters {
  category: Category | null;
  cuisine: Cuisine;
  maxTime: number;
  difficulty: number | null;
}
