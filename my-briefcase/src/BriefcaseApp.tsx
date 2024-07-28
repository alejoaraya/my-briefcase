import { Route, Routes } from "react-router";
import { BriefcasePage, DetailProjectPage, ErrorPage } from "./pages";
import { ContentPageLayout } from "./layout";

export const BriefcaseApp = () => {
  return (
    <Routes>
      <Route path='' element={<ContentPageLayout />}>
        <Route path='/' element={<BriefcasePage />} />
        <Route path='/detail/:id' element={<DetailProjectPage />} />
      </Route>
      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  );
};
