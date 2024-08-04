import { ProjectItem } from "./ProjectItem";

export const ProjectsList = () => {
  return (
    <div className='grid grid-flow-row grid-cols-1 gap-10'>
      <ProjectItem
        url='danielbot'
        description='Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally'
        image='/assets/png/chatbot-background.png'
        title='DanielBot - Chatbot'
      />
      <ProjectItem
        url='gallery-heroes'
        description='Gallery Heroes is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally'
        image='/assets/png/chatbot-background.png'
        title='Gallery Heroes - GIFS'
      />
    </div>
  );
};
