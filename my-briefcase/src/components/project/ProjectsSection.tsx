import { ContentSection } from "../ui";
import { ProjectsList } from "./components/ProjectsList";

export const ProjectsSection = () => {
  return (
    <ContentSection
      id='projects'
      text='Here you will find some of the personal and clients projects that I
                created with each project containing its own case study'
      title='PROJECTS'
    >
      <ProjectsList />
    </ContentSection>
  );
};