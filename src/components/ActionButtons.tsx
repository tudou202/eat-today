import { RefreshCw, Heart } from "lucide-react";
import { useState } from "react";

interface Props {
  isFavorite: boolean;
  onRefresh: () => void;
  onToggleFavorite: () => void;
}

export default function ActionButtons({ isFavorite, onRefresh, onToggleFavorite }: Props) {
  const [heartAnimate, setHeartAnimate] = useState(false);
  return (
    <div className="flex items-center justify-center gap-2.5 px-4 py-3">
      <button onClick={onRefresh}
        className="flex items-center gap-2 px-5 py-3 bg-orange-500 text-white rounded-2xl font-medium shadow-lg shadow-orange-200 active:scale-95 transition-transform text-sm">
        <RefreshCw className="w-5 h-5" />换一道
      </button>
      <button onClick={() => { setHeartAnimate(true); onToggleFavorite(); setTimeout(() => setHeartAnimate(false), 400); }}
        className={`flex items-center gap-1.5 px-3.5 py-3 rounded-2xl font-medium border transition-colors active:scale-95 ${isFavorite ? "bg-red-50 border-red-200 text-red-500" : "bg-white border-gray-200 text-gray-500"}`}>
        <Heart className={`w-5 h-5 ${heartAnimate ? "animate-heart" : ""}`} fill={isFavorite ? "currentColor" : "none"} />
      </button>
    </div>
  );
}
