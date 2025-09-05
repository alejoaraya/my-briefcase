import { FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt, FaRegFileAlt } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { Avatar } from "./navbar/components/Avatar";
import { AvailabilityBadge } from "./workspace/components/AvailabilityBadge";

// Configuración de redes sociales
const socialMediaItems = [
  { id: 1, Icon: HiEnvelope, link: "mailto:alejoaraya2000@gmail.com", dataTip: "Enviame un mail" },
  { id: 2, Icon: FaPhoneAlt, link: "https://wa.me/+5492612589882", dataTip: "Contactame por whatsapp" },
  { id: 4, Icon: FaRegFileAlt, link: "https://drive.google.com/file/d/1QnVRiGQYgbK_xzaljWfeNeJs6IWbZsyK/view?usp=sharing", dataTip: "Descargar CV" },
  { id: 3, Icon: FaLinkedin, link: "https://www.linkedin.com/in/alejoaraya/", dataTip: "LinkedIn" },
  { id: 5, Icon: FaGithub, link: "https://github.com/alejoaraya", dataTip: "GitHub" },
  { id: 6, Icon: FaInstagram, link: "https://www.instagram.com/alejoaraya.dev/", dataTip: "Instagram" },
];




// ✅ Componente para redes sociales
const SocialLinks = () => (
  <div className="flex flex-wrap gap-4 sm:gap-5 lg:gap-8 justify-center sm:justify-start">
    {socialMediaItems.map(({ id, Icon, link, dataTip }) => (
      <div key={id} className="tooltip" data-tip={dataTip}>
        <a href={link} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
          <Icon className="stroke-primary fill-primary w-6 h-6" />
        </a>
      </div>
    ))}
  </div>
);

// ✅ Componente para descripción (reutilizado)
const HeroDescription = ({ showBadgeInside = false }) => (
  <div className="flex flex-col gap-3 lg:gap-5 sm:text-left">
    <div className={`flex gap-4 items-start ${showBadgeInside ? "" : "flex-col"}`}>
      <p className="text-xl sm:text-2xl font-bold lg:text-3xl">Hola, me llamo Alejo Araya</p>
      {showBadgeInside && <AvailabilityBadge />}
    </div>
    <p className="text-sm sm:text-base leading-relaxed">
      Soy desarrollador Front-End con experiencia en React, integración de APIs y optimización de interfaces web.
      Me enfoco en crear aplicaciones intuitivas y eficientes, con atención al detalle y buenas prácticas de código.
      Siempre buscando aprender y mejorar en cada proyecto.
    </p>
  </div>
);

// ✅ Hero principal
export const HeroSection = () => (
  <>
    {/* Versión Mobile */}
    <main className="flex flex-col items-start justify-center gap-5 pt-10 sm:pt-16 md:pt-32 px-4 2xl:hidden" id="home">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center w-full">
        <Avatar size="w-32 lg:w-48" />
        <AvailabilityBadge compact />
      </div>
      <div className="flex flex-col gap-6 md:gap-8">
        <HeroDescription />
        <SocialLinks />
      </div>
    </main>

    {/* Versión Desktop */}
    <main className="grid-cols-3 pt-10 sm:pt-16 md:py-32 px-4 hidden 2xl:grid" id="home">
      <div className="col-start-1">
        <Avatar size="w-32 lg:w-70" />
      </div>
      <div className="flex flex-col gap-6 md:gap-8 w-full col-span-2 justify-center">
        <HeroDescription showBadgeInside />
        <SocialLinks />
      </div>
    </main>
  </>
);
