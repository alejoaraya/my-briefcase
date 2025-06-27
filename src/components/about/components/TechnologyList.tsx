import { KnowledgeItem } from "./KnowledgeItem";
import { SkillsContent } from "./SkillsContent";

export const TechnologyList = () => {
  return (
    <SkillsContent subtitle='Tecnologies'>
      <KnowledgeItem text='Java' />
      <KnowledgeItem text='Spring Boot' />
      <KnowledgeItem text='Spring Cloud' />
      <KnowledgeItem text='Spring Security' />
      <KnowledgeItem text='Hibernate' />
      <KnowledgeItem text='JUnit' />
      <KnowledgeItem text='Docker' />
    </SkillsContent>
  );
};
