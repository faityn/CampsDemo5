"use client";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
type SiteHeaderProps = {
  detail?: {
    title: string;
    logo: string;
  };
};

export default function SiteHeader({ detail }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const links = detail
    ? [
        ["The experience", "#experience"],
        ["Accommodations", "#accommodations"],
        ["Restaurant", "#restaurant"],
        ["Gallery", "#gallery"],
        ["How to get there", "#directions"],
        ["Contact us", "#contact"],
      ]
    : [
        ["Home", "#home"],
        ["About us", "#about"],
        ["Stays", "#stay"],
        ["Activities", "#activities"],
        ["Contact", "#contact"],
      ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/90 backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between">
        <a href={detail ? "#top" : "#home"} className="flex items-center gap-3">
          {/* {detail && (
            <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-white p-1">
              <Image
                src={detail.logo}
                alt={`${detail.title} logo`}
                width={44}
                height={44}
                className="h-full w-full object-contain"
              />
            </div>
          )} */}
          <div>
            <div className="text-lg font-black tracking-tight text-deep">
              {detail?.title ?? "HOYOR ZAGAL"}
            </div>
            <div className="text-[10px] font-semibold tracking-[.2em] text-forest">
              RESORT & RETREATS
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([t, h]) => (
            <a
              key={t}
              href={h}
              className="text-xs font-bold text-slate-600 transition hover:text-forest"
            >
              {t}
            </a>
          ))}
        </nav>
        <a
          href="tel:97699984593"
          className="hidden items-center gap-2 rounded-full bg-forest px-5 py-3 text-xs font-bold text-white md:flex"
        >
          <Phone size={15} />
          +976 9998 4593
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-full bg-green-50 text-forest lg:hidden"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-white px-5 py-4 lg:hidden">
          {links.map(([t, h]) => (
            <a
              onClick={() => setOpen(false)}
              key={t}
              href={h}
              className="block rounded-xl px-3 py-3 text-sm font-bold text-slate-700 hover:bg-green-50"
            >
              {t}
            </a>
          ))}
          <a
            href="tel:99091234"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-forest py-3 font-bold text-white"
          >
            <Phone size={16} /> 9909-1234
          </a>
        </div>
      )}
    </header>
  );
}
