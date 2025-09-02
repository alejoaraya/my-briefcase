import { FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt, FaRegFileAlt } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { Avatar } from "./navbar/components/Avatar";




const socialMediaItems = [
  { id: 1, icon: <HiEnvelope className=' stroke-primary fill-primary w-6 h-6' />, link: "", dataTip: "Enviame un mail" },
  { id: 2, icon: <FaPhoneAlt className=' stroke-primary fill-primary w-6 h-6' />, link: "https://wa.me/+5492612589882", dataTip: "Contactame por whatsapp" },
  { id: 4, icon: <FaRegFileAlt className=' stroke-primary fill-primary w-6 h-6' />, link: "https://drive.google.com/file/d/1QnVRiGQYgbK_xzaljWfeNeJs6IWbZsyK/view?usp=sharing", dataTip: "Descargar CV" },
  { id: 3, icon: <FaLinkedin className=' stroke-primary fill-primary w-6 h-6' />, link: "https://www.linkedin.com/in/alejoaraya/", dataTip: "LinkedIn" },
  { id: 5, icon: <FaGithub className=' stroke-primary fill-primary w-6 h-6' />, link: "https://github.com/alejoaraya", dataTip: "GitHub" },
  { id: 6, icon: <FaInstagram className=' stroke-primary fill-primary w-6 h-6' />, link: "https://www.instagram.com/alejoaraya.dev/", dataTip: "Instagram" },

]

export const HeroSection = () => {
  return (
    <>
      <main
        className='flex flex-col items-start justify-center gap-5 pt-10 sm:pt-16 md:pt-32 px-4'
        id='home'
      >
        {/* Avatar + estado */}
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 items-center  justify-center md:justify-start  w-full'>
          <Avatar size='w-32  lg:w-48 ' />
          <div className='flex items-center gap-2 sm:gap-3 mt-3 sm:mt-0'>
            <div className='inline-grid *:[grid-area:1/1]'>
              <div className='w-2.5 h-2.5 sm:w-3 sm:h-3 status status-primary animate-ping'></div>
              <div className='w-2.5 h-2.5 sm:w-3 sm:h-3 status status-primary'></div>
            </div>
            <p className='px-4 py-2 text-xs sm:text-sm md:text-base font-bold badge badge-primary '>
              Disponible para trabajar
            </p>
          </div>
        </div>

        {/* Texto */}
        <div className='flex flex-col gap-6 md:gap-8 '>
          <div className='flex flex-col gap-3 lg:gap-5  sm:text-left'>
            <p className='text-xl sm:text-2xl font-bold lg:text-3xl'>
              Hola, me llamo Alejo Araya
            </p>
            <p className='text-sm sm:text-base leading-relaxed'>
              Soy desarrollador Front-End con experiencia en React, integración
              de APIs y optimización de interfaces web. Me enfoco en crear
              aplicaciones intuitivas y eficientes, con atención al detalle y
              buenas prácticas de código. Siempre buscando aprender y mejorar en
              cada proyecto.
            </p>
          </div>

          {/* Socials */}
          <div className='flex flex-wrap gap-4 sm:gap-5 lg:gap-8 justify-center sm:justify-start'>
            {socialMediaItems.map(socialMedia => (
              <div key={socialMedia.id} className="tooltip" data-tip={socialMedia.dataTip}>
                <a
                  href={socialMedia.link}
                  target='_blank'
                  rel="noreferrer"
                  className=" hover:scale-110 transition-transform"
                >
                  {socialMedia.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

    </>
  );
};
