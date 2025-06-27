import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
} from "../components";
import { WorkspaceSection } from "../components/workspace/WorkspaceSection";
import { ContentLayout } from "../layout";

export const BriefcasePage = () => {
  return (
    <ContentLayout>
      <HeroSection />
      <WorkspaceSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </ContentLayout>
  );
};
