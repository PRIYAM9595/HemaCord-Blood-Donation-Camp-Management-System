import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { TeamPage } from "./pages/TeamPage";
import { GalleryPage } from "./pages/GalleryPage";
import { OrganizeCampPage } from "./pages/OrganizeCampPage";
import { GetInvolvedPage } from "./pages/GetInvolvedPage";
import { SupportPage } from "./pages/SupportPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { LoginPage } from "./portal/LoginPage";
import { AdminPage, DonorPage, OrganizerPage } from "./portal/pages";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/organize-a-camp" element={<OrganizeCampPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/support-us" element={<SupportPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/donor" element={<DonorPage />} />
          <Route path="/organizer" element={<OrganizerPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
