import { ContentSection } from "../ui";
import { PersonalInformation } from "./components/PersonalInformation";
import { SoftSkillsList } from "./components/SoftSkillsList";
import { TechnologyList } from "./components/TechnologyList";

export const AboutSection = () => {
  return (
    <ContentSection
      id='about'
      text='Here you will find more information about me, what I do, and my current
    skills mostly in terms of programming and technology'
      title='ABOUT ME'
    >
      <div className='grid grid-cols-1 grid-rows-2 gap-20 md:grid-rows-1 md:grid-cols-2'>
        <PersonalInformation />

        <div className='grid grid-cols-1 grid-rows-2'>
          <TechnologyList />
          <SoftSkillsList />
        </div>
      </div>
    </ContentSection>
  );
};
