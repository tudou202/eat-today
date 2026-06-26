import { useState } from "react";
import { CATEGORY_LABELS, CUISINE_INFO, DIFFICULTY_LABELS } from "../types";
import type { Category, Cuisine } from "../types";
import { ArrowLeft, Plus, X } from "lucide-react";

const STORAGE_KEY = "eat-today-custom-recipes";

export function loadCustomRecipes(): any[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}
function saveCustomRecipes(recipes: any[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

interface Props { onClose: () => void; }

export default function AddRecipePage({ onClose }: Props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<Category>("meat");
  const [cuisine, setCuisine] = useState<Cuisine>("home");
  const [difficulty, setDifficulty] = useState<1|2|3>(2);
  const [cookingTime, setCookingTime] = useState(30);
  const [mainIngs, setMainIngs] = useState<string[]>([]);
  const [mainInput, setMainInput] = useState("");
  const [allIngs, setAllIngs] = useState<{name:string;amount:string}[]>([]);
  const [ingName, setIngName] = useState("");
  const [ingAmount, setIngAmount] = useState("");
  const [steps, setSteps] = useState<string[]>([]);
  const [stepInput, setStepInput] = useState("");
  const [tips, setTips] = useState("");
  const [saved, setSaved] = useState(false);

  const addMainIng = () => { if (mainInput.trim()) { setMainIngs([...mainIngs, mainInput.trim()]); setMainInput(""); } };
  const addIng = () => { if (ingName.trim() && ingAmount.trim()) { setAllIngs([...allIngs, {name:ingName.trim(), amount:ingAmount.trim()}]); setIngName(""); setIngAmount(""); } };
  const addStep = () => { if (stepInput.trim()) { setSteps([...steps, stepInput.trim()]); setStepInput(""); } };

  const save = () => {
    if (!name.trim() || mainIngs.length === 0 || steps.length === 0) return;
    const emojis: Record<string,string> = { meat: "🥩", veggie: "🥬", soup: "🍲", cold: "🥗", staple: "🍜", dessert: "🍰" };
    const recipe = {
      id: "custom_" + Date.now(),
      name: name.trim(),
      category,
      cuisine,
      difficulty,
      cookingTime,
      mainIngredients: mainIngs,
      allIngredients: allIngs,
      steps,
      tips: tips.trim() || undefined,
      kidsFriendly: false,
      emoji: emojis[category] || "🍽️",
      tags: ["自定义"],
    };
    const existing = loadCustomRecipes();
    existing.push(recipe);
    saveCustomRecipes(existing);
    setSaved(true);
    // Trigger reload to merge custom recipe into app
    setTimeout(() => window.location.reload(), 800);
  };

  return (
    <div className="min-h-dvh bg-white pb-20">
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="flex items-center gap-3 px-4 h-12">
          <button onClick={onClose} className="p-1 rounded-lg active:bg-gray-50"><ArrowLeft className="w-5 h-5 text-gray-600" /></button>
          <span className="font-bold text-gray-800">手动添加菜品</span>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4 max-w-lg">
        {saved ? (
          <div className="text-center py-12">
            <span className="text-4xl">✅</span>
            <p className="text-gray-700 font-medium mt-2">添加成功！</p>
          </div>
        ) : (<>
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-600">菜名 *</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="输入菜名..."
              className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-xl text-sm outline-none focus:border-orange-300" />
          </div>

          {/* Category & Cuisine */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-gray-600">类型</label>
              <select value={category} onChange={e => setCategory(e.target.value as Category)}
                className="w-full mt-1 px-2 py-2 border border-gray-200 rounded-xl text-sm bg-white">
                {Object.entries(CATEGORY_LABELS).map(([k,v]) => <option key={k} value={k}>{v}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">菜系</label>
              <select value={cuisine} onChange={e => setCuisine(e.target.value as Cuisine)}
                className="w-full mt-1 px-2 py-2 border border-gray-200 rounded-xl text-sm bg-white">
                {Object.entries(CUISINE_INFO).map(([k,v]) => <option key={k} value={k}>{v.emoji} {v.name}</option>)}
              </select>
            </div>
          </div>

          {/* Difficulty & Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-gray-600">难度</label>
              <select value={difficulty} onChange={e => setDifficulty(Number(e.target.value) as 1|2|3)}
                className="w-full mt-1 px-2 py-2 border border-gray-200 rounded-xl text-sm bg-white">
                {Object.entries(DIFFICULTY_LABELS).map(([k,v]) => <option key={k} value={k}>{v}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">时间(分钟)</label>
              <input type="number" value={cookingTime} onChange={e => setCookingTime(Number(e.target.value))}
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-xl text-sm" />
            </div>
          </div>

          {/* Main ingredients */}
          <div>
            <label className="text-sm font-medium text-gray-600">主要食材</label>
            <div className="flex gap-2 mt-1">
              <input value={mainInput} onChange={e => setMainInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") addMainIng(); }}
                placeholder="例如: 鸡蛋" className="flex-1 px-3 py-2 border border-gray-200 rounded-xl text-sm outline-none" />
              <button onClick={addMainIng} className="px-3 py-2 bg-orange-100 text-orange-600 rounded-xl text-sm"><Plus className="w-4 h-4" /></button>
            </div>
            {mainIngs.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {mainIngs.map((s,i) => (
                  <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 bg-orange-50 text-orange-700 text-xs rounded-full">
                    {s}<button onClick={() => setMainIngs(mainIngs.filter((_,j) => j !== i))}><X className="w-3 h-3" /></button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Detailed ingredients */}
          <div>
            <label className="text-sm font-medium text-gray-600">完整食材清单</label>
            <div className="flex gap-2 mt-1">
              <input value={ingName} onChange={e => setIngName(e.target.value)}
                placeholder="食材名" className="flex-1 px-3 py-2 border border-gray-200 rounded-xl text-sm outline-none" />
              <input value={ingAmount} onChange={e => setIngAmount(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") addIng(); }}
                placeholder="用量" className="w-20 px-3 py-2 border border-gray-200 rounded-xl text-sm outline-none" />
              <button onClick={addIng} className="px-3 py-2 bg-orange-100 text-orange-600 rounded-xl text-sm"><Plus className="w-4 h-4" /></button>
            </div>
            {allIngs.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {allIngs.map((s,i) => (
                  <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 bg-orange-50 text-orange-700 text-xs rounded-full">
                    {s.name} {s.amount}<button onClick={() => setAllIngs(allIngs.filter((_,j) => j !== i))}><X className="w-3 h-3" /></button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Steps */}
          <div>
            <label className="text-sm font-medium text-gray-600">步骤</label>
            <div className="flex gap-2 mt-1">
              <input value={stepInput} onChange={e => setStepInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") addStep(); }}
                placeholder="例如: 鸡蛋打散加盐" className="flex-1 px-3 py-2 border border-gray-200 rounded-xl text-sm outline-none" />
              <button onClick={addStep} className="px-3 py-2 bg-orange-100 text-orange-600 rounded-xl text-sm"><Plus className="w-4 h-4" /></button>
            </div>
            {steps.length > 0 && (
              <ol className="mt-1.5 space-y-1">
                {steps.map((s,i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-xs text-orange-400">{i+1}.</span>
                    <span className="flex-1">{s}</span>
                    <button onClick={() => setSteps(steps.filter((_,j) => j !== i))}><X className="w-3 h-3 text-gray-300" /></button>
                  </li>
                ))}
              </ol>
            )}
          </div>

          {/* Tips */}
          <div>
            <label className="text-sm font-medium text-gray-600">小贴士</label>
            <input value={tips} onChange={e => setTips(e.target.value)}
              placeholder="做菜小窍门（可选）"
              className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-xl text-sm outline-none" />
          </div>

          {/* Save */}
          <button onClick={() => {
            if (!name.trim()) return alert("请填写菜名");
            if (mainIngs.length === 0) return alert("请添加主要食材（输入后点+或回车）");
            if (steps.length === 0) return alert("请添加做菜步骤（输入后点+或回车）");
            save();
          }}
            className="w-full py-3 bg-orange-500 text-white rounded-2xl font-medium text-sm active:bg-orange-600">
            保存菜品
          </button>
        </>)}
      </div>
    </div>
  );
}
