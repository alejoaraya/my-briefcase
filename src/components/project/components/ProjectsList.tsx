import { ProjectItem } from "./ProjectItem";

export const ProjectsList = () => {
  return (
    <div className='grid grid-flow-row grid-cols-1 gap-15'>
      <ProjectItem
        url='project/danielbot'
        description='Landing page for DanielBot, a chatbot that automates tasks via WhatsApp Web. Focused on accessibility and scalability. Built with React and Tailwind CSS.'
        image='/assets/png/chatbot-background.png'
        title='DanielBot (Chatbot) - SPA'
        buttonText='CASE WORK'
      />
      <ProjectItem
        url='project/gallery-heroes'
        description='Heroes Gallery to explore Marvel and DC characters. Includes search and filters for a dynamic user experience. Built with React and Tailwind CSS.'
        image='/assets/png/heroes-background.png'
        title='Gallery Heroes - GIFS'
        buttonText='CASE STUDY'
      />
    </div>
  );
};
