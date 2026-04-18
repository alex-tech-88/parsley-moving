import { useParams } from "react-router-dom"
import { SEO } from '@hooks/useSEO'
import { SERVICES, ABOUT_BY_SERVICE, getPhotoBySlug } from "@/constant"
import Hero from "@components/sections/Hero"
import AboutUs from "@components/sections/AboutUs"

export default function ServicePage() {
  const { slug } = useParams()
  const service = SERVICES.find((s) => s.id === slug)

  if (!service) {
    return (
      <>
        <SEO title="Moving Services" noindex={true} />
        <Hero />
        <AboutUs />
      </>
    )
  }

  const serviceAbout = ABOUT_BY_SERVICE[slug] ?? {
    title: "Your",
    highlight: `${service.title} Experts`,
    text1: `We provide professional ${service.title.toLowerCase()} services across the Bay Area. Our experienced team handles every job with care and efficiency.`,
    text2: "Parsley Moving is committed to making your relocation as smooth as possible. Contact us today to get a free quote.",
  }

  return (
    <>
      <SEO
        title={`${service.title} in the Bay Area`}
        description={`${service.title} services by Parsley Moving. Serving the San Francisco Bay Area 7 days a week, 9am–9pm. Reliable, professional, and fully equipped.`}
        canonical={`https://parsleymoving.com/services/${slug}`}
      />

      <Hero
        title={service.title}
        highlight="in the Bay Area"
        image={service.img}
      />
      <AboutUs
        title={serviceAbout.title}
        highlight={serviceAbout.highlight}
        img={getPhotoBySlug(slug)}
        text1={serviceAbout.text1}
        text2={serviceAbout.text2}
      />
    </>
  )
}