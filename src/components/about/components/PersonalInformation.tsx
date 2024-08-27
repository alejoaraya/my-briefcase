import { Button, Subtitle } from "../../ui";

export const PersonalInformation = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Subtitle subtitle='Get to know me!' />
      <div className='flex flex-col gap-3 text-base'>
        <p>
          I'm a Frontend-focused Web Developer, building and managing the
          front-end of websites and web applications that lead to the success of
          the overall product. Check out some of my work in the Projects
          section.
        </p>
        <p>
          I have experience working with agile methodologies, such as Scrum, and
          using tools like Jira and Trello to manage projects efficiently. I
          have collaborated with cross-functional teams to solve complex
          challenges, applying modern web development practices to achieve
          project goals.
        </p>
        <p>
          I'm open to job opportunities where I can contribute, learn, and grow.
          If you have a great opportunity that matches my skills and experience,
          don't hesitate to contact me.
        </p>
      </div>
      <Button size='w-48' text='CONTACT' url='#contact' />
    </div>
  );
};
