import { FaLinkedin } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { Avatar } from "./navbar/components/Avatar";

export const HeroSection = () => {
  return (
    <>
      {/*  <main
        className='flex flex-col items-start justify-center gap-5 pt-10 lg:grid lg:grid-flow-col md:pt-32'
        id='home'
      >
        <div className='flex flex-row order-2 col-span-1 gap-5 columns- place-items-center'>
          <Avatar size='w-20 md:w-32 lg:w-48 ' />
          <div className='flex items-center gap-3'>
            <div className='inline-grid *:[grid-area:1/1]'>
              <div className='w-3 h-3 status status-primary animate-ping'></div>
              <div className='w-3 h-3 status status-primary'></div>
            </div>
            <p className='px-10 py-4 font-bold badge badge-primary '>
              Disponible para trabajar
            </p>
          </div>
        </div>
        <div className='flex flex-col order-1 col-span-1 gap-5'>
          <div>
            <p className='text-2xl'>Hola, Me llamo Alejo Araya</p>
            <p className='text-base md:w-[50%]'>
              Soy desarrollador Front-End con experiencia en React, integración
              de APIs y optimización de interfaces web. Me enfoco en crear
              aplicaciones intuitivas y eficientes, con atención al detalle y
              buenas prácticas de código. Siempre buscando aprender y mejorar en
              cada proyecto.
            </p>
          </div>
          <div className='flex gap-3'>
            <button className='border btn btn-primary border-primary'>
              <HiEnvelope />
              Contactame
            </button>
            <button className='border btn btn-primary border-primary'>
              <FaLinkedin />
              LinkedIn
            </button>
          </div>
        </div>
      </main> */}
      <main
        className='flex flex-col items-start justify-center gap-5 pt-10 md:pt-32'
        id='home'
      >
        <div className='flex flex-row gap-5 place-items-center'>
          <Avatar size='w-20 md:w-32 lg:w-48 ' />
          <div className='flex items-center gap-3'>
            <div className='inline-grid *:[grid-area:1/1]'>
              <div className='w-3 h-3 status status-primary animate-ping'></div>
              <div className='w-3 h-3 status status-primary'></div>
            </div>
            <p className='px-10 py-4 font-bold badge badge-primary '>
              Disponible para trabajar
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div>
            <p className='text-2xl'>Hola, Me llamo Alejo Araya</p>
            <p className='text-base md:w-[50%]'>
              Soy desarrollador Front-End con experiencia en React, integración
              de APIs y optimización de interfaces web. Me enfoco en crear
              aplicaciones intuitivas y eficientes, con atención al detalle y
              buenas prácticas de código. Siempre buscando aprender y mejorar en
              cada proyecto.
            </p>
          </div>
          <div className='flex gap-3'>
            <button className='border btn btn-primary border-primary'>
              <HiEnvelope />
              Contactame
            </button>
            <button className='border btn btn-primary border-primary'>
              <FaLinkedin />
              LinkedIn
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
