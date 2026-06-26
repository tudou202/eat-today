import { X, Baby, Trophy } from "lucide-react";
import { useStore } from "../store/useStore";
import type { Cuisine } from "../types";
import { CUISINE_INFO, CUISINE_ORDER } from "../types";

export default function CuisineDrawer() {
  const drawerOpen = useStore((s) => s.drawerOpen);
  const currentCuisine = useStore((s) => s.filters.cuisine);
  const setCuisine = useStore((s) => s.setCuisine);
  const closeDrawer = useStore((s) => s.closeDrawer);
  const openKidsPage = useStore((s) => s.openKidsPage);
  const setTab = useStore((s) => s.setTab);

  const handleCuisine = (c: Cuisine) => {
    setCuisine(c);
  };

  const handleKids = () => {
    closeDrawer();
    openKidsPage();
  };

  const handleTop = () => {
    closeDrawer();
    setTab("tomorrow");
  };

  return (
    <>
      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/30 transition-opacity"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 w-64 bg-white shadow-2xl transform transition-transform duration-250 ease-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-12 border-b border-gray-100">
          <span className="font-bold text-gray-800">选择菜系</span>
          <button
            onClick={closeDrawer}
            className="p-1 rounded-lg active:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Cuisine List */}
        <div className="py-2 overflow-y-auto" style={{ maxHeight: "calc(100dvh - 120px)" }}>
          {CUISINE_ORDER.map((c) => {
            const info = CUISINE_INFO[c];
            const active = currentCuisine === c;
            return (
              <button
                key={c}
                onClick={() => handleCuisine(c)}
                className={`w-full flex items-center gap-3 px-4 py-3 transition-colors active:bg-gray-50 ${
                  active ? "bg-orange-50 text-orange-600" : "text-gray-700"
                }`}
              >
                <span className="text-xl w-7 text-center">{info.emoji}</span>
                <span className="text-sm font-medium">{info.name}</span>
                {c !== "all" && (
                  <span className="text-xs text-gray-400 ml-auto">{info.desc}</span>
                )}
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 ml-auto mr-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom shortcuts */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-white">
          <button
            onClick={handleKids}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 active:bg-gray-50"
          >
            <Baby className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium">🥔 土豆专区</span>
          </button>
          <button
            onClick={handleTop}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 active:bg-gray-50"
          >
            <Trophy className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-medium">好评榜</span>
          </button>
        </div>
      </div>
    </>
  );
}
