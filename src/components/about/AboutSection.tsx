import { ContentSection } from "../ui";
import { PersonalInformation } from "./components/PersonalInformation";

export const AboutSection = () => {
  return (
    <ContentSection
      id='about'
      // text='Here you will find more information about me, what I do, and my current skills, primarily in back-end development and technology.'
      text=''
      title='SOBRE MÍ'
    >
      <div className='grid grid-cols-1 grid-rows-2 gap-20 md:grid-rows-1 md:grid-cols-2'>
        <PersonalInformation />
        <div className='flex flex-col gap-4 shadow bg-primary place-items-center place-content-center rounded-4xl '>
          <div className='border-4 border-white rounded-full'>
            <img className='rounded-full w-80' src='/assets/jpeg/avatar.jpeg' />
          </div>
          <div className='flex flex-col'>
            <a href='#' className='text-white'>
              +54 9 2612589882
            </a>
            <a href='#' className='text-white'>
              alejoaraya2000@gmail.com
            </a>
          </div>
        </div>
      </div>
    </ContentSection>
  );
};
