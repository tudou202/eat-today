import type { RecommendFilters, Category } from "../types";

interface Props {
  filters: RecommendFilters;
  onSetFilter: (f: Partial<RecommendFilters>) => void;
}

const CATEGORIES: (Category | null)[] = [null, "meat", "veggie", "soup", "cold", "staple"];
const CATEGORY_NAMES: Record<string, string> = {
  null: "全部类型",
  meat: "🥩 荤菜",
  veggie: "🥬 素菜",
  soup: "🍲 汤羹",
  cold: "🥒 凉菜",
  staple: "🍜 主食",
};

const TIME_OPTIONS = [
  { label: "不限时", value: Infinity },
  { label: "≤15分", value: 15 },
  { label: "≤30分", value: 30 },
  { label: "≤60分", value: 60 },
];

export default function FilterBar({ filters, onSetFilter }: Props) {
  return (
    <div className="px-4 space-y-2">
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {CATEGORIES.map((cat) => {
          const key = String(cat);
          const active = filters.category === cat;
          return (
            <button
              key={key}
              onClick={() => onSetFilter({ category: cat })}
              className={`filter-chip flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                active
                  ? "bg-orange-500 text-white shadow-sm"
                  : "bg-white text-gray-500 border border-gray-200 active:bg-gray-50"
              }`}
            >
              {CATEGORY_NAMES[key]}
            </button>
          );
        })}
      </div>
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {TIME_OPTIONS.map((opt) => {
          const active = filters.maxTime === opt.value;
          return (
            <button
              key={opt.label}
              onClick={() => onSetFilter({ maxTime: opt.value })}
              className={`filter-chip flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                active
                  ? "bg-gray-700 text-white shadow-sm"
                  : "bg-white text-gray-400 border border-gray-100 active:bg-gray-50"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
