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

export default function LocationMapHome({
  title,
  mapCenter,
  compact = false,
}: LocationMapProps) {
  const [mapLayer, setMapLayer] = useState<MapLayer>("terrain");

  return (
    <div
      className={`relative mt-2 overflow-hidden rounded-[32px] border border-black/5 bg-[#e8e3d8] shadow-soft ${
        compact
          ? "min-h-[220px] sm:min-h-[200px]"
          : "min-h-[360px] sm:min-h-[460px]"
      }`}
    >
      <iframe
        title={`${title} location map`}
        src={`https://www.google.com/maps?q=${mapCenter}&z=11&output=embed&t=${mapLayer === "satellite" ? "k" : "p"}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
