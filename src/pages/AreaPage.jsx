import { useParams } from "react-router-dom";
import { ACCORDION_AREAS, SERVICES } from "@/constant";
import Hero from "@components/sections/Hero";

const defaultImage = SERVICES.find((s) => s.id === "local-moving")?.img;

export default function AreaPage() {
  const { slug } = useParams();

  const city = ACCORDION_AREAS
    .flatMap((group) => group.cities)
    .find((c) => c.slug === slug);

  if (!city) return <Hero />;

  return (
    <Hero
      title="Professional Moving"
      highlight={`in ${city.name}`}
      image={defaultImage}
    />
  );
}