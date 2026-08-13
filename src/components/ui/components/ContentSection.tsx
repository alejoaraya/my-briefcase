import { ReactNode } from "react";
import { Title } from "./Title";

interface Props {
  children: ReactNode;
  id: "about" | "contact" | "projects" | "home" | "workspace" | "stack";
  title: string;
}

export const ContentSection = ({ children, id, title }: Props) => {
  return (
    <section className='pt-20 md:pt-32' id={id}>
      <div className='grid md:grid-rows-[auto_1fr] gap-14'>
        <Title title={title} />
        {children}
      </div>
    </section>
  );
};
