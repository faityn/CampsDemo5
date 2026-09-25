"use client";

import { CalendarDays, Users, Search } from "lucide-react";
import { useState } from "react";

export default function BookingCard() {
  const [selectedDate, setSelectedDate] = useState("");
  const [guestCount, setGuestCount] = useState("2");

  return (
    <div className="rounded-[28px] bg-white p-2 shadow-2xl shadow-green-950/10 ring-1 ring-black/5 sm:p-3">
      <div className="grid gap-2 md:grid-cols-[1fr_1fr_auto]">
        <label className="flex items-center gap-3 rounded-2xl bg-stone-50 px-4 py-3">
          <CalendarDays size={19} className="text-forest" />
          <span className="flex-1">
            <span className="block text-[10px] font-bold uppercase text-slate-400">
              Date
            </span>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-transparent text-sm font-bold text-deep outline-none"
              aria-label="Date"
            />
          </span>
        </label>

        <label className="flex items-center gap-3 rounded-2xl bg-stone-50 px-4 py-3">
          <Users size={19} className="text-forest" />
          <span className="flex-1">
            <span className="block text-[10px] font-bold uppercase text-slate-400">
              Guests
            </span>
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              className="w-full appearance-none bg-transparent text-sm font-bold text-deep outline-none"
              aria-label="Guests"
            >
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="5+">5+ guests</option>
            </select>
          </span>
        </label>

        <button className="flex items-center justify-center gap-2 rounded-2xl bg-forest px-7 py-4 font-bold text-white transition hover:bg-deep">
          <Search size={18} /> Search
        </button>
      </div>
    </div>
  );
}
