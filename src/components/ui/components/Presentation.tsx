import { Button } from "..";

interface Props {
  title:
    | "HI, I’M ALEJO ARAYA"
    | "DanielBot (Chatbot) - SPA"
    | "Gallery Heroes - GIFS";
  subtitle:
    | "This page contains the case study the Gallery Heroes - GIFS, including the Project Overview, Tools Used, and Live Links to the official product."
    | "This page contains the case work  the DanielBot - Chatbot Website, including the Project Overview, Tools Used, and Live Links to the official product."
    | "A Back-End Developer focused on building robust, scalable, and secure server-side solutions that power modern web applications.";
  url: string;
  title_button:
    | "PROJECTS"
    | "CASE WORK"
    | "SUBMIT"
    | "CONTACT"
    | "CASE STUDY"
    | "CONTACT ME"
    | "LIVE LINK";
  blank?: boolean;
}

export const Presentation = ({
  title,
  subtitle,
  url,
  blank,
  title_button,
}: Props) => {
  return (
    <div className='text-center hero-content text-neutral'>
      <div>
        <h1 className='mb-5 text-4xl md:text-6xl poppins-bold'>{title}</h1>
        <div className='mb-5'>
          <p className='w-full text-base text-center md:text-lg md:px-36'>
            {subtitle}
          </p>
        </div>
        <Button blank={blank} size='w-64' text={title_button} url={url} />
      </div>
    </div>
  );
};
