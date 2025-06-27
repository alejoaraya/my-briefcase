import { Logo } from "../navbar/components/Logo";
import { ContentSection } from "../ui";
import { PersonalInformation } from "./components/PersonalInformation";
import { SoftSkillsList } from "./components/SoftSkillsList";
import { TechnologyList } from "./components/TechnologyList";

export const AboutSection = () => {
  return (
    <ContentSection
      id='about'
      // text='Here you will find more information about me, what I do, and my current skills, primarily in back-end development and technology.'
      text=''
      title='ABOUT ME'
    >
      <div className='grid grid-cols-1 grid-rows-2 gap-20 md:grid-rows-1 md:grid-cols-2'>
        <PersonalInformation />

        {/* <div className='grid grid-cols-1 grid-rows-2'>
          <TechnologyList />
          <SoftSkillsList />
        </div> */}
        <div>
          <div className='rounded-full'>
            <img className='rounded-full' src='/assets/jpeg/avatar.jpeg' />
          </div>
        </div>
      </div>
    </ContentSection>
  );
};
