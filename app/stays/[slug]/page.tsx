import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Utensils,
} from "lucide-react";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import GallerySwiper from "@/components/GallerySwiper";
import LightboxGallery from "@/components/LightboxGallery";
import LocationMap from "@/components/LocationMap";
import { getStay, stays } from "@/data/stays";

type StayPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return stays.map((stay) => ({ slug: stay.slug }));
}

export async function generateMetadata({ params }: StayPageProps) {
  const { slug } = await params;
  const stay = getStay(slug);

  return {
    title: stay ? `${stay.title} | Tengeriin Amral` : "Stay | Tengeriin Amral",
    description: stay?.desc,
  };
}

export default async function StayDetailPage({ params }: StayPageProps) {
  const { slug } = await params;
  const stay = getStay(slug);

  if (!stay) {
    notFound();
  }

  return (
    <>
      <SiteHeader detail={{ title: stay.title, logo: stay.logo }} />
      <main className="pt-20">
        <section
          id="top"
          className="relative isolate min-h-[620px] overflow-hidden bg-deep text-white"
        >
          <Image
            src={stay.img}
            alt={stay.title}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
          <div className="container-x relative flex min-h-[620px] flex-col justify-end pb-12 sm:pb-16">
            <Link
              href="/#stay"
              className="mb-auto mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-sm transition hover:bg-white/20"
            >
              <ArrowLeft size={16} /> Back to stays
            </Link>
            <div className="max-w-3xl">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <div className="flex w-fit items-center rounded-full border border-white/30 bg-white/10 p-3 backdrop-blur-sm">
                  <Image
                    src={stay.logo}
                    alt={`${stay.title} logo`}
                    width={128}
                    height={48}
                    className="h-12 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.18em] text-white/85 backdrop-blur-sm">
                  {stay.meta}
                </div>
              </div>
              <h1 className="text-4xl font-black leading-none tracking-tight sm:text-6xl">
                {stay.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
                {stay.desc}
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="container-x py-20 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div className="eyebrow">The experience</div>
              <h2 className="section-title">A slower way to see Mongolia.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              {stay.experience}
            </p>
          </div>
        </section>

        <section id="accommodations" className="bg-[#f4f8ef] py-20 sm:py-24">
          <div className="container-x grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div className="overflow-hidden rounded-[32px] shadow-soft">
              <GallerySwiper gallery={stay.accommodationGallery} />
            </div>
            <div className="lg:pl-8">
              <BedDouble className="text-forest" size={28} />
              <div className="eyebrow mt-6">Accommodations</div>
              <h2 className="section-title">
                Rest well, wake up close to nature.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                {stay.accommodations}
              </p>
            </div>
          </div>
        </section>

        <section id="restaurant" className="container-x py-20 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <Utensils className="text-forest" size={28} />
              <div className="eyebrow mt-6">Restaurant</div>
              <h2 className="section-title">
                Good food belongs in every escape.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                {stay.restaurant}
              </p>
            </div>
            <div className="overflow-hidden rounded-[28px] shadow-soft">
              <GallerySwiper
                gallery={stay.restaurantGallery}
                slidesPerView={2}
                imageClassName="h-[240px] w-full object-cover sm:h-[320px]"
              />
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-white py-10 sm:py-14">
          <div className="container-x">
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="eyebrow">Gallery</div>
                <h2 className="section-title">A glimpse of your stay.</h2>
              </div>
              {/* <Link
                href="/#stay"
                className="hidden items-center gap-1 text-sm font-bold text-forest sm:flex"
              >
                All stays <ArrowRight size={16} />
              </Link> */}
            </div>
            <div className="mt-8">
              <LightboxGallery gallery={stay.gallery} title={stay.title} />
            </div>
          </div>
        </section>

        <section id="directions" className="container-x py-20 sm:py-24">
          <div className="grid gap-8 rounded-[32px] bg-deep p-7 text-white sm:p-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <Navigation className="text-lime-200" size={28} />
              <div className="eyebrow mt-6 !text-lime-200">
                How to get there
              </div>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Make the journey part of the story.
              </h2>
            </div>
            <p className="text-base leading-7 text-white/75">{stay.location}</p>
          </div>
          <LocationMap title={stay.title} mapCenter={stay.mapCenter} />
        </section>

        <section
          id="contact"
          className="border-t border-green-100 bg-[#f4f8ef] py-20 sm:py-24"
        >
          <div className="container-x grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="eyebrow">Contact us</div>
              <h2 className="section-title">Ready to plan your escape?</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                {stay.contact}
              </p>
            </div>
            <div className="grid gap-3 text-sm font-bold text-deep sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={`tel:${stay.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm transition hover:text-forest"
              >
                <Phone size={17} className="text-forest" /> {stay.phone}
              </a>
              <a
                href={`mailto:${stay.email}`}
                className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm transition hover:text-forest"
              >
                <Mail size={17} className="text-forest" /> {stay.email}
              </a>
              <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm sm:col-span-2 lg:col-span-1">
                <MapPin size={17} className="text-forest" />{" "}
                {stay.meta.split(" · ")[0]}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
