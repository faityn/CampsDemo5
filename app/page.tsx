import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Instagram,
  MapPin,
  Phone,
  Star,
  Utensils,
  Wifi,
  Flame,
  Mountain,
  Waves,
  Camera,
  Mail,
  House,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import BookingCard from "@/components/BookingCard";
import GallerySwiper from "@/components/GallerySwiper";

const stays = [
  {
    slug: "hoyor-zagal",
    title: "HOYOR ZAGAL LODGE",
    meta: "ELSEN TASARKHAI · COUNTRYSIDE ESCAPE",
    price: "250,000₮",
    img: "/images/hoyorzagal/a2.JPG",
    logo: "/images/hoyorzagal/logo.png",
    desc: "Comfortable accommodation, a restful bed, and your own private veranda.",
  },
  {
    slug: "alungoo",
    title: "ALUNGOO GER HOTEL",
    meta: "TERELJ · GER STAY",
    price: "150,000₮",
    img: "/images/alungoo/3.JPG",
    logo: "/images/alungoo/logo.png",
    desc: "Experience the warmth of a traditional Mongolian ger with modern comfort.",
  },
  {
    slug: "guru",
    title: "GURU ECO COMPLEX",
    meta: "TERELJ · ECO ESCAPE",
    price: "400,000₮",
    img: "/images/guru/11.JPG",
    logo: "/images/guru/logo.png",
    desc: "Spacious accommodation for a comfortable stay with family or friends.",
  },
];
const activities = [
  ["🐎", "Horse Riding", "Explore the steppe on horseback"],
  ["🥾", "Hiking", "Walk through fresh mountain air"],
  ["📷", "Nature Photography", "Capture Mongolia's beautiful landscapes"],
  ["🔥", "Campfire Evenings", "Make memorable nights outdoors"],
  ["🏹", "Archery", "Try a traditional Mongolian activity"],
  ["🚁", "Scenic Flights", "See the landscape from above"],
];
const gallery = [
  "/images/gallery1.png",
  "/images/gallery2.png",
  "/images/gallery3.png",
  "/images/gallery4.png",
  "/images/gallery5.png",
  "/images/gallery6.png",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          id="home"
          className="relative min-h-[720px] overflow-hidden pt-20"
        >
          <Image
            src="/images/guru/hero.png"
            alt="Tengeriin Amral resort"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-black/5" />
          <div className="container-x relative flex min-h-[640px] items-center py-20 lg:pb-36">
            <div className="relative z-20 max-w-2xl text-white">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold backdrop-blur-md">
                🌿 Close to nature · Far from the city noise
              </div>
              <h1 className="text-5xl font-black leading-[.98] tracking-tight sm:text-7xl">
                FIND PEACE IN NATURE
                <br />
                <span className="text-lime-200">REST YOUR WAY</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/95 drop-shadow-[0_2px_18px_rgba(0,0,0,0.7)] sm:text-lg">
                Escape the city and slow down in nature. Enjoy a peaceful stay
                with family and friends in the Mongolian countryside.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#stay" className="btn-light">
                  Book your stay <ArrowRight size={17} className="ml-2" />
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-white/50 px-6 py-3 text-sm font-bold backdrop-blur-md transition hover:bg-white/10"
                >
                  Discover more
                </a>
              </div>
            </div>
          </div>
          <div className="container-x relative z-10 mt-4 w-full lg:absolute lg:bottom-5 lg:left-1/2 lg:-translate-x-1/2">
            {/* <div className="grid overflow-hidden rounded-[28px] bg-white/95 shadow-2xl backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "🏔️",
                  "Unspoiled nature",
                  "Fresh air and beautiful surroundings",
                ],
                [
                  "🏡",
                  "Comfortable stays",
                  "Gers and spacious private accommodation",
                ],
                ["🍲", "Fresh food", "Enjoy wholesome, locally inspired meals"],
                [
                  "🔥",
                  "Memorable escapes",
                  "Activities and moments to remember",
                ],
              ].map(([a, b, c]) => (
                <div key={b} className="flex gap-3 p-5 sm:block sm:text-center">
                  <div className="text-2xl">{a}</div>
                  <div>
                    <div className="mt-1 text-sm font-extrabold text-deep">
                      {b}
                    </div>
                    <div className="mt-1 text-[11px] leading-4 text-slate-500">
                      {c}
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-5 ">
              {[
                [
                  "🏔️",
                  "Unspoiled nature",
                  "Fresh air and beautiful surroundings",
                ],
                [
                  "🏡",
                  "Comfortable stays",
                  "Gers and spacious private accommodation",
                ],
                ["🍲", "Fresh food", "Enjoy wholesome, locally inspired meals"],
                [
                  "🔥",
                  "Memorable escapes",
                  "Activities and moments to remember",
                ],
              ].map(([a, b, c]) => (
                <div
                  key={b}
                  className="rounded-3xl border border-green-100 bg-white flex gap-3 p-4 sm:block sm:text-center"
                >
                  <div className="text-2xl">{a}</div>
                  <div>
                    <div className="mt-1 text-sm font-extrabold text-deep">
                      {b}
                    </div>
                    <div className="mt-1 text-[11px] leading-4 text-slate-500">
                      {c}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  Mountain,
                  "Unspoiled nature",
                  "Fresh air and beautiful surroundings",
                ],
                [
                  House,
                  "Comfortable stays",
                  "Gers and spacious private accommodation",
                ],
                [Utensils, "Амттай хоол", "Өдөр бүр шинэхэн хоол"],
                [Flame, "Дурсамж", "Гэр бүлтэйгээ сайхан мөч"],
              ].map(([a, b, c]) => {
                return (
                  <div
                    key={b as string}
                    className="rounded-3xl border border-green-100 bg-white p-6"
                  >
                    <div className="text-2xl">{a}</div>
                    <div>
                      <div className="mt-1 text-sm font-extrabold text-deep">
                        {b}
                      </div>
                      <div className="mt-1 text-[11px] leading-4 text-slate-500">
                        {c}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}
          </div>
        </section>

        <section id="about" className="container-x py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <div className="eyebrow">About us</div>
              <h2 className="section-title">
                Step away from the city,
                <br />
                and reconnect with nature.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Hoyor Zagal offers a unique blend of comfort and nature,
                featuring cozy accommodations and traditional Mongolian gers for
                families, couples, and friends. Relax, reconnect, and experience
                the beauty of Mongolia in a peaceful setting.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Clean surroundings",
                  "24/7 security",
                  "On-site parking",
                  "Wi-Fi available",
                ].map((x) => (
                  <div
                    key={x}
                    className="flex items-center gap-2 text-sm font-bold text-deep"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-green-100 text-forest">
                      <Check size={14} />
                    </span>
                    {x}
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 font-bold text-forest"
              >
                Contact us <ArrowRight size={17} />
              </a>
            </div>
            <div className="relative overflow-hidden rounded-[36px] shadow-soft">
              <Image
                src="/images/hoyorzagal/3.JPG"
                alt="Resort accommodation"
                width={800}
                height={600}
                className="h-[460px] w-full object-cover"
              />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-4 shadow-xl">
                <div className="text-2xl font-black text-deep">4.9/5</div>
                <div className="flex gap-1 text-gold">★★★★★</div>
                <div className="text-xs text-slate-500">Guest rating</div>
              </div>
            </div>
          </div>
        </section>

        <section id="stay" className="bg-[#f4f8ef] py-24">
          <div className="container-x">
            <div className="text-center">
              <div className="eyebrow">Three escapes · One journey</div>
              <h2 className="section-title">Choose your escape</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                Three distinctive stays. One beautifully simple way to
                experience Mongolia.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {stays.map((s) => (
                <Link
                  key={s.title}
                  href={`/stays/${s.slug}`}
                  className="group relative block overflow-hidden rounded-[32px] shadow-soft ring-1 ring-black/5"
                >
                  <div className="absolute left-5 top-5 z-10 flex  items-center justify-center rounded-full border border-white/25 bg-white/10 p-3 backdrop-blur-sm">
                    <Image
                      src={s.logo}
                      alt={`${s.title} logo`}
                      width={128}
                      height={48}
                      className="h-12 w-auto object-contain brightness-0 invert"
                    />
                  </div>
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={700}
                    height={480}
                    className="h-[430px] w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div className="min-w-0 truncate rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-semibold tracking-[0.22em] text-white/80 backdrop-blur-sm">
                        {s.meta}
                      </div>
                      {/* <div className="rounded-full bg-white/90 px-3 py-1.5 text-sm font-black text-deep shadow-lg">
                        {s.price}
                      </div> */}
                    </div>
                    <div className="text-2xl font-black text-white">
                      {s.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className="container-x py-24">
          <div className="text-center">
            <div className="eyebrow">Activities</div>
            <h2 className="section-title">Make your stay memorable</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Enjoy a range of outdoor activities and create lasting memories in
              the Mongolian countryside.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {activities.map(([icon, title, desc]) => (
              <div key={title} className="group text-center">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-green-50 text-4xl shadow-inner ring-8 ring-white transition group-hover:-translate-y-1 group-hover:bg-green-100">
                  {icon}
                </div>
                <div className="mt-4 text-sm font-black text-deep">{title}</div>
                <div className="mt-1 text-[11px] leading-4 text-slate-400">
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <section id="gallery" className="bg-white py-10">
          <div className="container-x">
            <div className="flex items-end justify-between">
              <div>
                <div className="eyebrow">Gallery</div>
                <h2 className="section-title">A glimpse of your escape</h2>
              </div>
              <a
                href="#contact"
                className="hidden text-sm font-bold text-forest sm:flex items-center gap-1"
              >
                View all photos <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-8 overflow-hidden rounded-[32px] bg-[#f3f7ee] p-3 shadow-soft sm:p-4">
              <GallerySwiper gallery={gallery} />
            </div>
          </div>
        </section> */}

        {/* <section id="booking" className="container-x py-24">
          <div className="overflow-hidden rounded-[38px] bg-deep p-7 text-white sm:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <div className="eyebrow">Guest review</div>
                <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                  “A truly peaceful,
                  <br />
                  clean place to stay.”
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-6 text-white/65">
                  Beautiful nature, a comfortable setting, and a welcoming team.
                  A place we would gladly visit again.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-white/15">
                    👩🏻
                  </div>
                  <div>
                    <div className="text-sm font-bold">Б. Энхтуяа</div>
                    <div className="text-xs text-white/50">Guest</div>
                  </div>
                  <div className="ml-2 text-gold">★★★★★</div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[28px] p-7 sm:p-9">
                <Image
                  src="/images/hero.png"
                  alt="Байгаль"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-forest/80" />
                <div className="relative">
                  <div className="eyebrow !text-lime-200">Plan your escape</div>
                  <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                    Start planning your
                    <br />
                    memorable getaway today.
                  </h3>
                  <div className="mt-6">
                    <BookingCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="container-x pb-24">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                Mountain,
                "Natural surroundings",
                "Fresh air and green mountains",
              ],
              [Wifi, "Comfort", "Wi-Fi, warmth, and cleanliness"],
              [Utensils, "Good food", "Fresh meals every day"],
              [Flame, "Memories", "Beautiful moments with family"],
            ].map(([I, t, d]) => {
              const Icon = I as any;
              return (
                <div
                  key={t as string}
                  className="rounded-3xl border border-green-100 bg-white p-6"
                >
                  <Icon className="text-forest" size={25} />
                  <div className="mt-4 font-black text-deep">{t as string}</div>
                  <div className="mt-1 text-sm text-slate-500">
                    {d as string}
                  </div>
                </div>
              );
            })}
          </div>
        </section> */}
      </main>
      <footer id="contact" className="bg-[#edf4e8] pt-16">
        <div className="container-x grid gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              {/* <div className="grid h-[50px] w-[50px] place-items-center rounded-2xl  text-white">
                <Image
                  src="/images/hoyorzagal/logo2.png"
                  alt="Hoyor Zagal logo"
                  width={50}
                  height={50}
                  className="w-full h-full object-contain"
                />
              </div> */}
              <div>
                <div className="text-sm font-black text-deep">HOYOR ZAGAL</div>
                <div className="text-[10px] font-bold tracking-[.2em] text-forest">
                  RESORT & LODGES
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              A comfortable, nature-connected escape in the Mongolian
              countryside.
            </p>
            <div className="mt-4 flex gap-2">
              <a
                className="grid h-9 w-9 place-items-center rounded-full bg-white text-forest"
                href="#"
              >
                f
              </a>
              <a
                className="grid h-9 w-9 place-items-center rounded-full bg-white text-forest"
                href="#"
              >
                <Instagram size={16} />
              </a>
              <a
                className="grid h-9 w-9 place-items-center rounded-full bg-white text-forest"
                href="#"
              >
                ◎
              </a>
            </div>
          </div>
          <div>
            <div className="font-black text-deep">Quick links</div>
            <div className="mt-4 grid gap-3 text-sm text-slate-500">
              <a href="#home">Home</a>
              <a href="#about">About us</a>
              <a href="#stay">Stays</a>
            </div>
          </div>
          <div>
            <div className="font-black text-deep">Contact</div>
            <div className="mt-4 grid gap-4 text-sm text-slate-500">
              <div className="flex gap-3">
                <Phone size={18} className="text-forest" />
                +976 9998 4593
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="text-forest" />
                info@hoyorzagal.mn
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="text-forest" />
                Ulaanbaatar, Mongolia
              </div>
            </div>
          </div>
          <div>
            <div className="font-black text-deep">Plan your stay</div>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Choose the stay that fits your journey and discover a quieter side
              of Mongolia.
            </p>
            <a
              href="#stay"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-bold text-white transition hover:bg-deep"
            >
              Explore stays <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="border-t border-green-200 py-5 text-center text-xs text-slate-400">
          © 2026 HOYOR ZAGAL. All rights reserved.
        </div>
      </footer>
    </>
  );
}
