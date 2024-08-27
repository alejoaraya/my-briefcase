import { Avatar } from "../navbar/components/Avatar";
import { SocialMedia } from "./components/SocialMedia";

export const Footer = () => {
  return (
    <footer className='px-5 md:px-[139px] footer gap-0 flex flex-col [&>*]:w-full [&>p]:justify-center bg-primary text-base-100'>
      <div className='grid gap-10 grid-cols-1 md:grid-cols-[1fr_auto] grid-rows-2 md:grid-rows-1 pt-20 pb-10 md:py-20'>
        <aside className='flex gap-5'>
          <Avatar size='md:w-32 w-28' />
          <div className='flex flex-col justify-center gap-3'>
            <h1 className='text-2xl md:text-3xl poppins-bold'>ALEJO ARAYA</h1>
            <p className='lato-bold w-full md:w-[460px]'>
              A Frontend-focused Web Developer building the front end of
              websites and web applications that lead to the success of the
              overall product.
            </p>
          </div>
        </aside>
        <SocialMedia />
      </div>
      <div className='w-full h-0.5 bg-base-100'></div>
      <p className='flex gap-1 py-10'>
        © Copyright 2024. Made by
        <a className='hover:underline' href='/'>
          Alejo Araya
        </a>
      </p>
    </footer>
  );
};
