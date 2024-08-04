import { KnowledgeItem } from "./KnowledgeItem";
import { SkillsContent } from "./SkillsContent";

export const SoftSkillsList = () => {
  return (
    <SkillsContent subtitle='Soft Skills'>
      <KnowledgeItem text='Adaptability' />
      <KnowledgeItem text='Assertive' />
      <KnowledgeItem text='Comunication' />
      <KnowledgeItem text='Efficient' />
      <KnowledgeItem text='Resoult-Oriented' />
      <KnowledgeItem text='Team work' />
    </SkillsContent>
  );
};
