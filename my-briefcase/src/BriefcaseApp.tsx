import { Route, Routes } from "react-router";
import { BriefcasePage, DetailProjectPage } from "./pages";
import { ContentPageLayout } from "./layout";

export const BriefcaseApp = () => {
  return (
    <Routes>
      <Route path='' element={<ContentPageLayout />}>
        <Route path='/' element={<BriefcasePage />} />
        <Route path='/detail/:id' element={<DetailProjectPage />} />
      </Route>
    </Routes>
  );
};
