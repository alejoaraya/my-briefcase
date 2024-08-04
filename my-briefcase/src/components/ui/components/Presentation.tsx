import { Button } from "..";

interface Props {
  title:
    | "HI, I’M ALEJO ARAYA"
    | "DanielBot - Chatbot"
    | "Gallery Heroes - GIFS";
  subtitle:
    | "This page contains the case study of Wilsonport Website which includes the Project Overview, Tools Used and Live Links to the official product."
    | " A Result-Oriented Web Developer building and mabnaging Websites and Web Aplications that leads to the success of the overwall product";
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
