import { FaLinkedin } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { Avatar } from "./navbar/components/Avatar";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <>
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
          <div className='flex flex-col lg:gap-5'>
            <p className='text-2xl font-bold lg:text-3xl'>
              Hola, me llamo Alejo Araya
            </p>
            <p className='w-full '>
              Soy desarrollador Front-End con experiencia en React, integración
              de APIs y optimización de interfaces web. Me enfoco en crear
              aplicaciones intuitivas y eficientes, con atención al detalle y
              buenas prácticas de código. Siempre buscando aprender y mejorar en
              cada proyecto.
            </p>
          </div>
          <div className='flex gap-3'>
            <a
              href='mailto:alejoaraya2000@gmail.com'
              target='_blank'
              className=' btn btn-primary'
            >
              <HiEnvelope />
              Contactame
            </a>
            <Link
              to={"https://www.linkedin.com/in/alejoaraya/"}
              target='_blank'
              className='border btn btn-primary border-primary'
            >
              <FaLinkedin />
              LinkedIn
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
