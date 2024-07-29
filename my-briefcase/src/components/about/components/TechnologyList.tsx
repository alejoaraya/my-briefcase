import { KnowledgeItem } from "./KnowledgeItem";
import { SkillsContent } from "./SkillsContent";

export const TechnologyList = () => {
  return (
    <SkillsContent subtitle='Tecnologies'>
      <KnowledgeItem text='React' />
      <KnowledgeItem text='NextJs' />
      <KnowledgeItem text='TypeScript' />
      <KnowledgeItem text='Redux' />
      <KnowledgeItem text='Tailwind' />
      <KnowledgeItem text='Github' />
      <KnowledgeItem text='Responsive Design' />
    </SkillsContent>
  );
};
