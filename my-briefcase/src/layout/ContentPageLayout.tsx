import { Outlet } from "react-router";
import { Footer, Navbar } from "../components";

export const ContentPageLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
