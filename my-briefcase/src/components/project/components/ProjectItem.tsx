import { Button } from "../../ui";

export const ProjectItem = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-1 gap-16 place-items-center'>
      <div className='w-full h-96 bg-base-200'></div>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl poppins-bold'>DanielBot - Chatbot</h1>
        <div className='flex flex-col gap-8'>
          <p className='text-lg opacity-70'>
            Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally
          </p>
          <Button size='w-48' text='CASE WORK' url='/detail/1' />
        </div>
      </div>
    </div>
  );
};
