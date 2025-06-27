import { Button, Subtitle } from "../../ui";

export const PersonalInformation = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Subtitle subtitle='Get to know me!' />
      <div className='flex flex-col gap-3 text-base'>
        <p>
          I'm a Back-End Web Developer focused on building and maintaining the
          server-side logic, APIs, and database architecture that power modern
          web applications. My work ensures systems are efficient, secure, and
          scalable.
        </p>
        <p>
          I have experience working with agile methodologies like Scrum, using
          tools such as Jira and Trello for effective project management. I've
          collaborated with cross-functional teams to solve complex technical
          challenges, applying modern development practices and clean
          architecture principles.
        </p>
        <p>
          I'm actively seeking opportunities where I can contribute to impactful
          back-end systems, continue learning, and grow professionally. If
          you’re looking for someone who can deliver solid back-end solutions,
          feel free to reach out!
        </p>
      </div>
      {/* <Button size='w-48' text='CONTACT' url='#contact' /> */}
    </div>
  );
};
