import { ReactNode } from "react";
import { Title } from "./Title";

interface Props {
  children: ReactNode;
  id: "about" | "contact" | "projects" | "home" | "workspace";
  title:
    | "ABOUT ME"
    | "CONTACT"
    | "PROJECTS"
    | "PROFESSIONAL EXPERIENCE"
    | "LET'S PROGRAMING TOGETHER"
    | "LET'S WORK TOGETHER";
  text: string;
}

export const ContentSection = ({ children, id, title, text }: Props) => {
  return (
    <section className='pt-20 md:pt-40' id={id}>
      <div className='grid md:grid-rows-[auto_1fr] gap-14'>
        <Title title={title} text={text} />
        {children}
      </div>
    </section>
  );
};
