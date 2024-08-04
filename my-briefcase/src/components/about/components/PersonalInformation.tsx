import { Button, Subtitle } from "../../ui";

export const PersonalInformation = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Subtitle subtitle='Get to know me!' />
      <div className='flex flex-col gap-3 text-base'>
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
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to contact me.
        </p>
      </div>
      <Button size='w-48' text='CONTACT' url='#contact' />
    </div>
  );
};
