import { Footer, Navbar } from "./components";
import { LanguageProvider } from "./provider/LanguageProvider";
import { RouterApp } from "./router/RouterApp";

export const BriefcaseApp = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <RouterApp />
      <Footer />
    </LanguageProvider>
  );
};
