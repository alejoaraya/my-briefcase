import { ProjectItem } from "./ProjectItem";

import { GrReactjs } from "react-icons/gr";
import { SiAxios, SiCloudinary, SiJavascript, SiMercadopago, SiReactrouter, SiRedux, SiShadcnui, SiTailwindcss, SiThymeleaf, SiTypescript, SiVitest, SiZod } from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const ProjectsList = () => {
  return (
    <div className="grid grid-col-1 gap-5 lg:gap-16 md:grid-cols-2 place-items-center lg:place-items-stretch lg:grid-cols-1 ">
      <ProjectItem
        redirect_url='Cachavacha'
        image_url="https://cachavacha-frontend.vercel.app/logo.png"
        info_url={{ github: "https://github.com/raxtech-solution/Cachavacha-Frontend", demo: "https://cachavacha-frontend.vercel.app/" }}
        video_url="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVnM2NqbnRqbTMzdW94dDZsdTE2YnAwNzJ0aHpkbGtocjk2eGduMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cXMFmN3edhlHI5vRsG/giphy.gif"
        description='Sistema de gestión para tiendas de alquiler de disfraces que permite administrar de forma simple categorías, disfraces, clientes y alquileres mediante operaciones CRUD. La plataforma facilita el control de estados de cada alquiler, envía notificaciones por correo al crear un alquiler o ante demoras en la devolución, y ofrece una interfaz visual e intuitiva que permite a los empleados acceder rápidamente a toda la información necesaria.
'
        title='Cachavacha'
        stack={[
          { icon: GrReactjs, name: "React 19 + Vite" },
          { icon: SiTypescript, name: "TypeScript" },
          { icon: SiTailwindcss, name: "Tailwind CSS 4" },
          { icon: SiShadcnui, name: "Shadcnui" },
          { icon: SiRedux, name: "Redux Toolkit" },
          { icon: SiAxios, name: "Axios" },
          { icon: SiZod, name: "Zod" },
          { icon: SiVitest, name: "Vitest + Testing Library" },
          { icon: SiReactrouter, name: "React Router 7" },
        ]}
      />
      <ProjectItem
        redirect_url='StockWise'
        image_url="https://github.com/alejoaraya/StockWiseApp/raw/develop/Client/src/components/logo-cmp/logo.svg"
        info_url={{ github: "https://github.com/alejoaraya/StockWiseApp", demo: "https://stockwise-client.vercel.app/login", figma: "https://www.figma.com/proto/lIB64kDohOKOsdSNGkOSue/c14-22-ft-java-react?node-id=72-10333&starting-point-node-id=72%3A10456" }}
        video_url="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVnM2NqbnRqbTMzdW94dDZsdTE2YnAwNzJ0aHpkbGtocjk2eGduMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cXMFmN3edhlHI5vRsG/giphy.gif"
        description='Sistema de gestión de inventario diseñado para pequeñas empresas que permite controlar y organizar sus productos de manera simple y eficiente. La plataforma facilita el seguimiento del stock, la gestión de transacciones y la generación de alertas e informes en tiempo real, ayudando a reducir errores y a reemplazar el uso de planillas manuales o registros dispersos.
'
        title='StockWise'
        stack={[
          { icon: GrReactjs, name: "React 18 + Vite" },
          { icon: SiJavascript, name: "JavaScript" },
          { icon: SiTailwindcss, name: "Tailwind CSS" },
          { icon: SiRedux, name: "Redux Toolkit" },
          { icon: SiZod, name: "Zod" },
          { icon: SiAxios, name: "Axios" },
          { icon: SiReactrouter, name: "React Router" },
          { icon: SiCloudinary, name: "Cloudinary" },

          { icon: SiMercadopago, name: "Mercado Pago SDK" },
        ]}
      />

      <ProjectItem
        redirect_url='buen-sabor'
        info_url={{ github: "https://github.com/RodrigoXVargas/Buen-Sabor--Backend", figma: "https://www.figma.com/design/ou5yb0Fs71zhdG2YBa2lLr/Buen-sabor?node-id=0-1&t=IKvBMvMSE7SNu7l5-1" }}
        video_url="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVnM2NqbnRqbTMzdW94dDZsdTE2YnAwNzJ0aHpkbGtocjk2eGduMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cXMFmN3edhlHI5vRsG/giphy.gif"
        description='Sistema de gestión para restaurantes que permite administrar pedidos, personal y datos del negocio en una misma plataforma. La aplicación facilita la interacción entre los distintos roles del sistema —administrador, cliente, cocinero, cajero y delivery— permitiendo realizar pedidos, gestionar su preparación y coordinar la entrega de manera eficiente desde dispositivos móviles o computadoras.
'
        title='Buen Sabor'
        stack={[
          { icon: FaJava, name: "Java" },
          { icon: SiThymeleaf, name: "Thymeleaf" },
          { icon: SiTailwindcss, name: "Tailwind.css " }]}
      />
      <ProjectItem
        redirect_url='danielbot'
        info_url={{ github: "https://github.com/RST-Sistemas/chatbot-landing", demo: "" }}
        video_url="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVnM2NqbnRqbTMzdW94dDZsdTE2YnAwNzJ0aHpkbGtocjk2eGduMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cXMFmN3edhlHI5vRsG/giphy.gif"
        description='Landing page for DanielBot, a chatbot that automates tasks via WhatsApp Web. Focused on accessibility and scalability. Built with React and Tailwind CSS.'
        title='DanielBot (Chatbot) - SPA'
        stack={[
          { icon: GrReactjs, name: "React" },
          { icon: SiJavascript, name: "JavaScript" },
          { icon: SiTailwindcss, name: "Tailwind.css " }]}
      />



    </div>
  );
};
