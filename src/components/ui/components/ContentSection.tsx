import { ReactNode } from "react";
import { Title } from "./Title";

interface Props {
  children: ReactNode;
  id: "about" | "contact" | "projects" | "home" | "workspace" | "stack";
  title:
  | "ABOUT ME"
  | "SOBRE MÍ"
  | "CONTACT"
  | "CONTACTAR"
  | "PROJECTS"
  | "PROYECTOS"
  | "PROFESSIONAL EXPERIENCE"
  | "EXPERIENCIA PROFESIONAL"
  | "LET'S PROGRAMING TOGETHER"
  | "PROGRAMEMOS JUNTOS"
  | "LET'S WORK TOGETHER"
  | "STACK"
  | "HABILIDADES"
  | "TRABAJEMOS JUNTOS";
  text: string;
}

export const ContentSection = ({ children, id, title, text }: Props) => {
  return (
    <section className='pt-20 md:pt-32' id={id}>
      <div className='grid md:grid-rows-[auto_1fr] gap-14'>
        <Title title={title} text={text} />
        {children}
      </div>
    </section>
  );
};
