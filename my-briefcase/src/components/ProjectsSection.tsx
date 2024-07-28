import { Button } from "./ui/components/Button";

export const ProjectsSection = () => {
  return (
    <section className='py-[120px]' id='projects'>
      <div className='flex flex-col'>
        <h1>PROJECTS</h1>
        <hr />
        <p>
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>
      <div className='grid grid-flow-row grid-cols-1 gap-10'>
        <div className='grid grid-cols-2 grid-rows-1 place-items-center'>
          <div className='w-full h-96 bg-base-200'></div>
          <div>
            <h1>DanielBot - Chatbot</h1>
            <p>
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <Button size='w-48' text='CASE WORK' url='/detail/1' />
          </div>
        </div>
        <div className='grid grid-cols-2 grid-rows-1 place-items-center'>
          <div className='w-full h-96 bg-base-200'></div>
          <div>
            <h1>DanielBot - Chatbot</h1>
            <p>
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <button className='btn btn-primary'>CASE WORK</button>
          </div>
        </div>
      </div>
    </section>
  );
};
