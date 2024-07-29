import { ReactNode } from "react";
import { Title } from "./Title";

interface Props {
  children: ReactNode;
  id: "about" | "contact" | "projects" | "home";
  title: "ABOUT ME" | "CONTACT" | "PROJECTS";
  text: string;
}

export const ContentSection = ({ children, id, title, text }: Props) => {
  return (
    <section className='py-[120px]' id={id}>
      <div className='grid grid-rows-[auto_1fr] gap-14'>
        <Title title={title} text={text} />
        {children}
      </div>
    </section>
  );
};
