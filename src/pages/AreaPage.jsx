import { useParams } from "react-router-dom";
import { ACCORDION_AREAS, SERVICES, ABOUT_BY_CITY, getPhotoBySlug } from "@/constant";
import Hero from "@components/sections/Hero";
import AboutUs from "@components/sections/AboutUs";
import AreaWhy from "@components/sections/AreaWhy";
import AreaFAQ from "@components/sections/AreaFAQ";

const defaultImage = SERVICES.find((s) => s.id === "local-moving")?.img;

export default function AreaPage() {
  const { slug } = useParams();

  const city = ACCORDION_AREAS
    .flatMap((group) => group.cities)
    .find((c) => c.slug === slug);

  if (!city) {
    return (
      <>
        <Hero />
        <AboutUs />
      </>
    );
  }

  const cityAbout = ABOUT_BY_CITY[slug] ?? {
    text1: `We provide professional moving services in ${city.name} and the surrounding area. Our team handles every relocation with care, from loading and transport to careful placement at your new home.`,
    text2: `Parsley Moving has completed hundreds of moves across the Bay Area including ${city.name}. We know the area, respect your schedule, and make sure everything arrives safely.`,
  }

  return (
    <>
      <Hero
        title="Professional Moving"
        highlight={`in ${city.name}`}
        image={defaultImage}
      />
      <AboutUs
        title="Your Local"
        highlight={`${city.name} Moving Experts`}
        location={`${city.name}, CA`}
        img={getPhotoBySlug(slug)}
        text1={cityAbout.text1}
        text2={cityAbout.text2}
      />
      <AreaWhy city={city.name} />
     <AreaFAQ slug={slug} cityName={city.name} />
    </>
  );
}