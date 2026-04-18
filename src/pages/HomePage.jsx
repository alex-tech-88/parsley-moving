import { SEO } from '@hooks/useSEO'
import Hero from "@components/sections/Hero"
import AboutUs from "@components/sections/AboutUs"

export default function HomePage() {
  return (
    <>
      <SEO
        title="Bay Area Movers | No Hidden Fees"
        description="Looking for movers in the Bay Area? Parsley Moving offers fast, careful service with transparent pricing and no hidden fees. Get a free quote today."
        canonical="https://parsleymoving.com/"
      />

      <Hero />
      <AboutUs />
    </>
  )
}
