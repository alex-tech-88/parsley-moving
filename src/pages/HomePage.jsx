import { SEO } from '@hooks/useSEO'
import Hero from "@components/sections/Hero"
import AboutUs from "@components/sections/AboutUs"

export default function HomePage() {
  return (
    <>
      <SEO
        title="Professional Movers in the Bay Area"
        description="Parsley Moving offers reliable residential and commercial moving services across the San Francisco Bay Area. Available 7 days a week, 9am–9pm. Get a free quote today."
        canonical="https://parsleymoving.com/"
      />

      <Hero />
      <AboutUs />
    </>
  )
}