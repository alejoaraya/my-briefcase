import { ReactNode } from "react";
import { Subtitle } from "../../ui";

interface Props {
  children: ReactNode;
  subtitle: "Get to know me!" | "Tecnologies" | "Soft Skills" | "Tools Used";
}

export const SkillsContent = ({ children, subtitle }: Props) => {
  return (
    <div className='flex flex-col gap-5'>
      <Subtitle subtitle={subtitle} />
      <div className='flex flex-wrap gap-4'>{children}</div>
    </div>
  );
};
