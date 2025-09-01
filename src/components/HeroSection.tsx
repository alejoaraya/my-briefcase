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
        <div className='flex flex-col gap-8'>
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


          <div className='flex gap-5 lg:gap-8'>
            {
              socialMediaItems.map(socialMedia => (

                <div key={socialMedia.id} className="tooltip" data-tip={socialMedia.dataTip}>
                  <a
                    href={socialMedia.link}
                    target='_blank'
                  >
                    {socialMedia.icon}
                  </a>
                </div>
              ))
            }



          </div>
        </div>
      </main>
    </>
  );
};
