import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "@context/useTheme";
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";
import Reviews from "@components/sections/Reviews";
import Gallery from "@components/sections/Gallery";
import Services from "@components/sections/Services";
import MovingAreas from "@components/sections/MovingAreas";
import ScrollToTop from "@components/utils/ScrollToTop";
import HomePage from "@/pages/HomePage";
import AreaPage from "@/pages/AreaPage";
import ServicePage from "@/pages/ServicePage";
import FAQ from "@components/sections/FAQ";

export default function App() {
  const { mode } = useTheme();

  return (
    <Router>
      <div className={mode}>
        <div className="bg-white dark:bg-[#1a1a1a] text-graphite dark:text-[#f5f5f5] min-h-screen transition-colors duration-300">
          <ScrollToTop />
          <Navbar />
          <main className="pt-22 xl:pt-25">

            <Routes>
              <Route path="/"                element={<HomePage />} />
              <Route path="/areas/:slug"     element={<AreaPage />} />
              <Route path="/services/:slug"  element={<ServicePage />} />
            </Routes>

            {/* Shared sections — render once, never remount on navigation */}
            <Reviews />
            <Gallery />
            <Services />
            <MovingAreas />
            <FAQ />
            <Footer />

          </main>
        </div>
      </div>
    </Router>
  );
}