import { UtensilsCrossed } from "lucide-react";

export default function Header() {
  return (
    <header className="text-center pt-6 pb-3 px-4">
      <div className="inline-flex items-center gap-2 mb-1">
        <UtensilsCrossed className="w-7 h-7 text-orange-500" />
        <h1 className="text-2xl font-bold text-gray-800">今天吃什么</h1>
      </div>
      <p className="text-sm text-gray-400">为做饭的人提供一点灵感 ✨</p>
    </header>
  );
}
