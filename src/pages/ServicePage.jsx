import { useParams } from "react-router-dom";
import { SERVICES } from "@/constant";
import Hero from "@components/sections/Hero";

export default function ServicePage() {
  const { slug } = useParams();

  const service = SERVICES.find((s) => s.id === slug);

  if (!service) return <Hero />;

  return (
    <Hero
      title={service.title}
      highlight="in the Bay Area"
         image={service.img}
    />
  );
}