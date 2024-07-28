import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
} from "../components";
import { ContentLayout } from "../layout";

export const BriefcasePage = () => {
  return (
    <>
      <HeroSection />
      <ContentLayout>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </ContentLayout>
    </>
  );
};
