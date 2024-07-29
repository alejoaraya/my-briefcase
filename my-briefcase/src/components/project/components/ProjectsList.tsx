import { ProjectItem } from "./ProjectItem";

export const ProjectsList = () => {
  return (
    <div className='grid grid-flow-row grid-cols-1 gap-10'>
      <ProjectItem />
      <ProjectItem />
    </div>
  );
};
