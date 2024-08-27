import { Route, Routes } from "react-router";
import { ContentPageLayout } from "./layout";
import { BriefcasePage, ChatbotPage, ErrorPage } from "./pages";
import { GalleryHeroesPage } from "./pages/projects/gallery-heroes/GalleryHeroesPage";

export const BriefcaseApp = () => {
  return (
    <Routes>
      <Route path='/' element={<ContentPageLayout />}>
        <Route path='/' element={<BriefcasePage />} />
        <Route path='danielbot' element={<ChatbotPage />} />
        <Route path='gallery-heroes' element={<GalleryHeroesPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
