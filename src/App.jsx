import { BrowserRouter as Router, Routes, Route, useMatch } from "react-router-dom";
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
import ContactPage from "@/pages/ContactPage";
import QuotePage from "@/pages/QuotePage";

function AppLayout() {
  const { mode } = useTheme();

  const isAreaPage    = useMatch("/areas/:slug");
  const isContactPage = useMatch("/contact");
  const isQuotePage   = useMatch("/quote");

  // Hide sections on "clean" pages
  const isCleanPage = isContactPage || isQuotePage;

  return (
    <div className={mode}>
      <div className="bg-white dark:bg-[#1a1a1a] text-graphite dark:text-[#f5f5f5] min-h-screen transition-colors duration-300">
        <ScrollToTop />
        <Navbar />
        <main className="pt-22 xl:pt-25">

          <Routes>
            <Route path="/"               element={<HomePage />} />
            <Route path="/areas/:slug"    element={<AreaPage />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/contact"        element={<ContactPage />} />
            <Route path="/quote"          element={<QuotePage />} />
          </Routes>

          {!isCleanPage && (
            <>
              <Reviews />
              <Gallery />
            </>
          )}

          {!isAreaPage && !isCleanPage && (
            <>
              <Services />
              <MovingAreas />
              <FAQ />
            </>
          )}

          <Footer />

        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}