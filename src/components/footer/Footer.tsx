import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    // <footer className='px-5 mt-10 md:px-[139px] footer gap-0 flex flex-col [&>*]:w-full [&>p]:justify-center bg-primary text-base-100'>
    //   <div className='grid gap-10 grid-cols-1 md:grid-cols-[1fr_auto] grid-rows-2 md:grid-rows-1 pt-20 pb-10 md:py-20'>
    //     <aside className='flex gap-5'>
    //       <Avatar size='md:w-32 w-28' />
    //       <div className='flex flex-col justify-center gap-3'>
    //         <h1 className='text-2xl md:text-3xl poppins-bold'>ALEJO ARAYA</h1>
    //       </div>
    //     </aside>
    //     <SocialMedia />
    //   </div>
    //   <div className='w-full h-0.5 bg-base-100'></div>
    //   <p className='flex gap-1 py-10'>
    //     © Copyright 2024. Made by
    //     <a className='hover:underline' href='/'>
    //       Alejo Araya
    //     </a>
    //   </p>
    // </footer>
    <>
      <footer className=' footer flex [&>*]:w-full [&>p]:justify-center '>
        <p className='flex gap-1 py-10'>
          © Copyright {new Date().getFullYear()}. Made by
          <a className='hover:underline' href='/'>
            Alejo Araya
          </a>
        </p>
      </footer>
      <a
        href={"/#"}
        className='absolute w-12 h-12 -translate-y-16 rounded-full shadow-xl right-3 bg-primary'
      >
        <GrFormNextLink className='w-full h-full duration-150 ease-in transform -rotate-130 hover:-rotate-90 stroke-white' />
      </a>
    </>
  );
};
