import { useState } from "react";
import type { Recipe } from "../types";
import { DIFFICULTY_LABELS, CUISINE_INFO } from "../types";
import type { Cuisine } from "../types";
import { X, Clock, Flame, Heart, Copy, Check } from "lucide-react";

// Each cuisine gets a unique gradient for the hero image
const CUISINE_GRADIENT: Record<string, string> = {
  chuan: "from-red-500 via-orange-400 to-amber-300",
  xiang: "from-red-600 via-rose-500 to-amber-400",
  lu: "from-amber-700 via-yellow-600 to-orange-400",
  yue: "from-emerald-500 via-teal-400 to-green-300",
  su: "from-sky-500 via-blue-400 to-cyan-300",
  zhe: "from-teal-500 via-cyan-400 to-sky-300",
  min: "from-rose-400 via-pink-300 to-orange-200",
  hui: "from-stone-700 via-amber-800 to-yellow-700",
  home: "from-orange-400 via-amber-300 to-yellow-200",
  other: "from-purple-500 via-fuchsia-400 to-pink-300",
  staple: "from-yellow-600 via-amber-400 to-orange-300",
  soup_all: "from-blue-400 via-cyan-300 to-teal-200",
  dessert: "from-pink-400 via-rose-300 to-purple-300",
};

interface Props {
  recipe: Recipe;
  isFavorite: boolean;
  isInTomorrow?: boolean;
  onClose: () => void;
  onToggleFav: () => void;
  onToggleTomorrow?: () => void;
}

export default function RecipeDetail({ recipe, isFavorite, isInTomorrow, onClose, onToggleFav, onToggleTomorrow }: Props) {
  const gradient = CUISINE_GRADIENT[recipe.cuisine] || CUISINE_GRADIENT.home;
  const [copied, setCopied] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40" onClick={onClose}>
      <div className="animate-slide-up w-full max-w-sm max-h-[90dvh] bg-white rounded-t-2xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Drag indicator */}
        <div className="flex justify-center pt-3 pb-1 absolute top-0 left-0 right-0 z-10">
          <div className="w-10 h-1 bg-white/40 rounded-full" />
        </div>

        {/* CSS Generated Hero */}
        <div className={`relative w-full aspect-[16/9] bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
          {/* Decorative circles */}
          <div className="absolute top-4 right-8 w-24 h-24 rounded-full bg-white/10" />
          <div className="absolute bottom-2 left-6 w-16 h-16 rounded-full bg-white/10" />
          <div className="absolute top-8 left-12 w-8 h-8 rounded-full bg-white/15" />
          {/* Dish name in hero */}
          <span className="text-3xl font-bold text-white/80 relative z-10 drop-shadow-md">{recipe.name}</span>
          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="px-5 pb-6 -mt-8 relative z-10">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-xl font-bold text-gray-800">{recipe.name}</h2>
            <button onClick={onClose} className="p-1 rounded-full bg-white/80 hover:bg-white">
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-3 flex-wrap">
            <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full text-xs font-medium">
              {CUISINE_INFO[recipe.cuisine as Cuisine]?.name}
            </span>
            <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{recipe.cookingTime}分钟</span>
            <span className="inline-flex items-center gap-1"><Flame className="w-3.5 h-3.5" />{DIFFICULTY_LABELS[recipe.difficulty]}</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <button onClick={onToggleFav}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium ${isFavorite ? "bg-red-50 text-red-500" : "bg-gray-100 text-gray-500"}`}>
              <Heart className="w-4 h-4" fill={isFavorite ? "currentColor" : "none"} />{isFavorite ? "已收藏" : "收藏"}
            </button>
            {onToggleTomorrow && (
              <button onClick={onToggleTomorrow}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium ${isInTomorrow ? "bg-blue-50 text-blue-500" : "bg-gray-100 text-gray-500"}`}>
                📅 {isInTomorrow ? "已安排" : "明天吃"}
              </button>
            )}
            <button onClick={() => {
              const text = recipe.name + " 做法";
              const ta = document.createElement("textarea");
              ta.value = text;
              ta.style.position = "fixed";
              ta.style.left = "-9999px";
              document.body.appendChild(ta);
              ta.select();
              ta.setSelectionRange(0, 99999);
              document.execCommand("copy");
              document.body.removeChild(ta);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-500 active:bg-gray-200 transition-colors">
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              {copied ? "已复制" : "复制菜名"}
            </button>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">📦 食材清单</h3>
            <div className="flex flex-wrap gap-1.5">
              {recipe.allIngredients.map((ing) => (
                <span key={ing.name} className="inline-flex items-center gap-1 text-sm bg-orange-50 text-orange-700 px-2.5 py-1 rounded-lg">
                  {ing.name}<span className="text-orange-400 text-xs">{ing.amount}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">📝 步骤</h3>
            <ol className="space-y-2">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-600">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 text-orange-500 text-xs flex items-center justify-center font-medium">{i + 1}</span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {recipe.tips && (
            <div className="pb-2">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">💡 小贴士</h3>
              <p className="text-sm text-gray-500 bg-amber-50 rounded-xl p-3 border border-amber-100">{recipe.tips}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
