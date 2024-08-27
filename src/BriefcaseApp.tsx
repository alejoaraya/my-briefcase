import { Route, Routes } from "react-router";
import { Footer, Navbar } from "./components";
import { BriefcasePage, ChatbotPage, ErrorPage } from "./pages";
import { GalleryHeroesPage } from "./pages/projects/gallery-heroes/GalleryHeroesPage";

export const BriefcaseApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<BriefcasePage />} />
        <Route path='/project/'>
          <Route path='danielbot' element={<ChatbotPage />} />
          <Route path='gallery-heroes' element={<GalleryHeroesPage />} />
        </Route>
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};
