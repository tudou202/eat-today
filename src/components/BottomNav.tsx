import type { TabKey } from "../types";
import { useStore } from "../store/useStore";
import { Home, ChefHat, Refrigerator, Heart, ListOrdered, Calendar } from "lucide-react";

const TABS: { key: TabKey; label: string; icon: typeof Home }[] = [
  { key: "home", label: "首页", icon: Home },
  { key: "cuisine", label: "菜系", icon: ChefHat },
  { key: "fridge", label: "冰箱", icon: Refrigerator },
  { key: "favorites", label: "收藏", icon: Heart },
  { key: "history", label: "已吃", icon: ListOrdered },
  { key: "tomorrow", label: "明日", icon: Calendar },
];

export default function BottomNav() {
  const activeTab = useStore((s) => s.activeTab);
  const setTab = useStore((s) => s.setTab);
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-gray-100 safe-area-bottom">
      <div className="flex items-center justify-around h-14 max-w-lg mx-auto">
        {TABS.map(({ key, label, icon: Icon }) => {
          const active = activeTab === key;
          return (
            <button key={key} onClick={() => setTab(key)}
              className={`flex flex-col items-center justify-center gap-0.5 w-14 h-full transition-colors ${active ? "text-orange-500" : "text-gray-400"}`}>
              <Icon className="w-5 h-5" fill={active ? "currentColor" : "none"} />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
