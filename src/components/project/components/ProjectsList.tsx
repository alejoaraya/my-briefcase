import { ProjectItem } from "./ProjectItem";

export const ProjectsList = () => {
  return (
    <div className='grid grid-flow-row grid-cols-1 gap-10'>
      <ProjectItem
        url='project/danielbot'
        description='I developed the landing page for DanielBot, an innovative chatbot that integrates with WhatsApp Web to efficiently automate tasks. DanielBot stands out for its low cost and wide range of options, offering an accessible and versatile solution for businesses looking to enhance their communication and management through WhatsApp.'
        image='/assets/png/chatbot-background.png'
        title='DanielBot (Chatbot) - SPA'
        buttonText='CASE WORK'
      />
      <ProjectItem
        url='project/gallery-heroes'
        description='This project is a Heroes Gallery that lets users explore and find information about Marvel and DC heroes. Users can search for individual characters or browse the entire collection, providing an engaging experience in the world of superheroes.'
        image='/assets/png/heroes-background.png'
        title='Gallery Heroes - GIFS'
        buttonText='CASE STUDY'
      />
    </div>
  );
};
