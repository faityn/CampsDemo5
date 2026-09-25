"use client";

import { useState } from "react";

type MapLayer = "satellite" | "terrain";

const mapLayers: { id: MapLayer; label: string }[] = [
  { id: "satellite", label: "Satellite" },
  { id: "terrain", label: "Terrain" },
];

type LocationMapProps = {
  title: string;
  mapCenter: string;
  compact?: boolean;
};

export default function LocationMap({
  title,
  mapCenter,
  compact = false,
}: LocationMapProps) {
  const [mapLayer, setMapLayer] = useState<MapLayer>("terrain");

  return (
    <div
      className={`relative mt-8 overflow-hidden rounded-[32px] border border-black/5 bg-[#e8e3d8] shadow-soft ${
        compact
          ? "min-h-[220px] sm:min-h-[280px]"
          : "min-h-[360px] sm:min-h-[460px]"
      }`}
    >
      <iframe
        title={`${title} location map`}
        src={`https://www.google.com/maps?q=${mapCenter}&z=11&output=embed&t=${mapLayer === "satellite" ? "k" : "p"}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full border-0"
      />
      <div className="pointer-events-none absolute left-2 top-2 bg-white/95 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-deep shadow-lg rounded-[32px]">
        How to get there
      </div>
      <div className="absolute right-2 top-2 flex gap-1 bg-white/95 p-1 shadow-lg rounded-[32px]">
        {mapLayers.map((layer) => (
          <button
            key={layer.id}
            type="button"
            onClick={() => setMapLayer(layer.id)}
            className={`px-3  rounded-[32px] py-2 text-[9px] font-bold uppercase tracking-[0.14em] transition-colors ${
              mapLayer === layer.id
                ? "bg-forest text-white"
                : "text-slate-500 hover:text-deep"
            }`}
          >
            {layer.label}
          </button>
        ))}
      </div>
    </div>
  );
}
