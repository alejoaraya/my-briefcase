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
        <div className='flex lg:place-self-center flex-col gap-4 shadow bg-base-300 place-items-center place-content-center rounded-4xl lg:w-[26rem] lg:py-5 '>
          <div className='border-4 border-white rounded-full'>
            <img
              className='rounded-full w-80 lg:w-60'
              src='/assets/jpeg/avatar.jpeg'
            />
          </div>
          <div className='flex flex-col gap-3 lg:gap-2'>
            <a
              href='https://wa.me/+5492612589882'
              target='_blank'
              className='border-2 btn btn-primary border-primary'
            >
              Envieme un whatsapp
            </a>
            <a
              href='mailto:alejoaraya2000@gmail.com'
              target='_blank'
              className='border-2 btn btn-primary border-primary'
            >
              Envieme un mail
            </a>
          </div>
        </div>
      </div>
    </ContentSection>
  );
};
