import { FaLinkedin } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { Avatar } from "./navbar/components/Avatar";

export const HeroSection = () => {
  return (
    <>
      <main className='flex flex-col items-start justify-center gap-5 mt-10 md:mt-32'>
        <div className='flex flex-row gap-5 place-items-center'>
          <Avatar size='w-20 md:w-32 lg:w-48 ' />
          <div className='flex items-center gap-3'>
            <div className='inline-grid *:[grid-area:1/1]'>
              <div className='status status-primary animate-ping'></div>
              <div className='status status-primary'></div>
            </div>
            <p className='px-10 py-4 btn badge badge-primary'>
              Disponible para trabajar
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div>
            <p className='text-2xl'>Hi, I'm Alejo Araya</p>
            <p className='text-base md:w-[50%]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              repellendus explicabo quos ab ea natus odit neque! Iusto similique
              sequi pariatur, harum quibusdam laudantium ut aliquam tempore
              autem numquam eligendi?
            </p>
          </div>
          <div className='flex gap-3'>
            <button className='border btn btn-soft btn-primary border-primary'>
              <HiEnvelope />
              Contactame
            </button>
            <button className='border btn btn-soft btn-primary border-primary'>
              <FaLinkedin />
              LinkedIn
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

{
  /* <main
        id='home'
        className='min-h-screen hero'
        style={{
          backgroundImage: "url('/assets/png/backgound.png')",
        }}
      >
        <div className='hero-overlay bg-opacity-5'></div>
        <Presentation
          title_button='PROJECTS'
          url='#projects'
          title='HI, I’M ALEJO ARAYA'
          subtitle='A Back-End Developer focused on building robust, scalable, and secure server-side solutions that power modern web applications.'
        />
      </main>
      <NavbarSocialMedia /> */
}
