import { Route, Routes } from "react-router";
import {
  BriefcasePage,
  ChatbotPage,
  ErrorPage,
  GalleryHeroesPage,
} from "../pages";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<BriefcasePage />} />
      <Route path='/project/'>
        <Route path='danielbot' element={<ChatbotPage />} />
        <Route path='gallery-heroes' element={<GalleryHeroesPage />} />
      </Route>
      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  );
};
