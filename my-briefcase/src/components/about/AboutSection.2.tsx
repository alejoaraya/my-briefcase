import { Title, Subtitle, Button } from "../ui";
import { SoftSkillsList } from "./components/SoftSkillsList";
import { TechnologyList } from "./components/TechnologyList";

export const AboutSection = () => {
  return (
    <section className='py-[120px]' id='about'>
      <div className='grid grid-rows-[auto_1fr] gap-14'>
        <Title
          title='ABOUT ME'
          text='Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology'
        />
        <div className='grid grid-cols-2 grid-rows-1 gap-20'>
          {PersonalInformation()}

          <div className='grid grid-cols-1 grid-rows-2'>
            <TechnologyList />
            <SoftSkillsList />
          </div>
        </div>
      </div>
    </section>
  );

  function PersonalInformation() {
    return (
      <div className='flex flex-col gap-8'>
        <Subtitle subtitle='Get to know me!' />
        <div className='flex flex-col gap-3'>
          <p>
            I'm a Frontend Focused Web Developer building and managing the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the Projects
            section.
          </p>
          <p>
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my Linkedin and
            Instagram where I post useful content related to Web Development and
            Programming
          </p>
          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
        <Button size='w-48' text='CONTACT' url='#contact' />
      </div>
    );
  }
};
