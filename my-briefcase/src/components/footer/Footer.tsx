import { Avatar } from "../navbar/components/Avatar";
import { SocialMedia } from "./components/SocialMedia";

export const Footer = () => {
  return (
    <footer className='px-[139px] footer gap-0 flex flex-col [&>*]:w-full [&>p]:justify-center bg-primary  text-base-100 '>
      <div className='grid grid-cols-[1fr_auto] grid-rows-1 py-20'>
        <aside className='flex gap-5'>
          <Avatar size='w-32' />
          <div className='flex flex-col justify-center gap-3'>
            <h1 className='text-3xl poppins-bold'>ALEJO ARAYA</h1>
            <p className='lato-bold w-[460px]'>
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
        </aside>
        <SocialMedia />
      </div>
      <div className='w-full h-0.5 bg-base-100'></div>
      <p className='py-10'>© Copyright 2024 . Made by Alejo Araya</p>
    </footer>
  );
};
