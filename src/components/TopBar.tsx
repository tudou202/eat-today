import { Menu, Baby, Plus, Search } from "lucide-react";
import { useStore } from "../store/useStore";
import { useState } from "react";
import AddRecipePage from "./AddRecipePage";

export default function TopBar({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const toggleDrawer = useStore((s) => s.toggleDrawer);
  const openKidsPage = useStore((s) => s.openKidsPage);
  const [showAdd, setShowAdd] = useState(false);

  if (showAdd) return <AddRecipePage onClose={() => setShowAdd(false)} />;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-orange-100">
      <div className="flex items-center justify-between px-4 h-12">
        <button onClick={toggleDrawer} className="p-1.5 rounded-lg active:bg-orange-50 transition-colors">
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
        <span className="text-base font-bold text-gray-800">今天吃什么</span>
        <div className="flex items-center gap-1.5">
          <button onClick={onOpenSearch} className="p-1.5 rounded-lg active:bg-gray-50">
            <Search className="w-5 h-5 text-gray-500" />
          </button>
          <button onClick={() => setShowAdd(true)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-100 text-sky-600 text-xs font-semibold active:bg-sky-200 transition-colors">
            <Plus className="w-3.5 h-3.5" />加菜
          </button>
          <button onClick={openKidsPage}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold active:bg-orange-200 transition-colors">
            <Baby className="w-3.5 h-3.5" />土豆
          </button>
        </div>
      </div>
    </header>
  );
}
