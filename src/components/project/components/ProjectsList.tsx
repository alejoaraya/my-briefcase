import { ProjectItem } from "./ProjectItem";

import { GrReactjs } from "react-icons/gr";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiThymeleaf, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const ProjectsList = () => {
  return (
    <div className="grid grid-col-1 gap-5 lg:gap-16 md:grid-cols-2 place-items-center lg:place-items-stretch lg:grid-cols-3">
      <ProjectItem
        url={{ github: "https://github.com/alejoaraya/StockWiseApp", demo: "" }}
        description='Heroes Gallery to explore Marvel and DC characters. Includes search and filters for a dynamic user experience. Built with React and Tailwind CSS.'
        title='StockWise'
        stack={[
          { icon: GrReactjs, name: "React" },
          { icon: SiTypescript, name: "TypeScript" },
          { icon: SiTailwindcss, name: "Tailwind.css " }]}
      />
      <ProjectItem
        url={{ github: "https://github.com/RST-Sistemas/chatbot-landing", demo: "" }}
        description='Landing page for DanielBot, a chatbot that automates tasks via WhatsApp Web. Focused on accessibility and scalability. Built with React and Tailwind CSS.'
        title='DanielBot (Chatbot) - SPA'
        stack={[
          { icon: GrReactjs, name: "React" },
          { icon: SiJavascript, name: "JavaScript" },
          { icon: SiTailwindcss, name: "Tailwind.css " }]}
      />
      <ProjectItem
        url={{ github: "https://github.com/alejoaraya/duende-del-hilo", demo: "" }}
        description='Heroes Gallery to explore Marvel and DC characters. Includes search and filters for a dynamic user experience. Built with React and Tailwind CSS.'
        title='Cachavacha'
        stack={[
          { icon: SiNextdotjs, name: "Next" },
          { icon: SiTypescript, name: "TypeScript" },
          { icon: SiTailwindcss, name: "Tailwind.css " }]}
      />
      <ProjectItem
        url={{ github: "https://github.com/RodrigoXVargas/Buen-Sabor--Backend", demo: "" }}
        description='Heroes Gallery to explore Marvel and DC characters. Includes search and filters for a dynamic user experience. Built with React and Tailwind CSS.'
        title='Buen Sabor'
        stack={[
          { icon: FaJava, name: "Java" },
          { icon: SiThymeleaf, name: "Thymeleaf" },
          { icon: SiTailwindcss, name: "Tailwind.css " }]}
      />


    </div>
  );
};
