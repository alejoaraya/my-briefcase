import { Route, Routes } from "react-router";
import {
  BriefcasePage,
  ErrorPage,
} from "../pages";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<BriefcasePage />} />
      <Route path='/en/' element={<BriefcasePage />} />
      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  );
};
