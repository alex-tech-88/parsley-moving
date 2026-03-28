import { useTheme } from '@context/useTheme'
import Navbar from '@components/layout/Navbar'
import Hero from '@components/sections/Hero'
import AboutUs from '@components/sections/AboutUs'
import Reviews from '@components/sections/Reviews'
import Gallery from "@components/sections/Gallery"
import Services from '@components/sections/Services'
import Footer from '@components/layout/Footer'

export default function App() {
  const { mode } = useTheme()

  return (
    <div className={mode}>
      <div className="bg-white dark:bg-[#1a1a1a] text-graphite dark:text-[#f5f5f5] min-h-screen transition-colors duration-300">
        <Navbar />
        <main className="pt-22 xl:pt-25">
          <Hero />
          <AboutUs />
          <Reviews />
          <Gallery />
          <Services />
          <Footer />
        </main>
      </div>
    </div>
  )
}
