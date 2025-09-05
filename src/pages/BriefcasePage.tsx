import { AboutSection, HeroSection, ProjectsSection } from "../components";
import { StackSection } from "../components/stack/StackSection";
import { WorkspaceSection } from "../components/workspace/WorkspaceSection";
import { ContentLayout } from "../layout";

export const BriefcasePage = () => {
  return (
    <ContentLayout>
      <HeroSection />
      <WorkspaceSection />
      <ProjectsSection />
      <StackSection />
      <AboutSection />
    </ContentLayout>
  );
};
