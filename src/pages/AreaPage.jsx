import { useParams } from "react-router-dom";
import { ACCORDION_AREAS } from "@/constant";
import Hero from "@components/sections/Hero";

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
    />
  );
}