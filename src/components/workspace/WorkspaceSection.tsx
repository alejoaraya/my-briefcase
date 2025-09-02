import { GrReactjs, GrValidate } from "react-icons/gr";
import { ContentSection } from "../ui";
import { WorkItem } from "./components/WorkItem";
import { Timeline } from "./components/Timeline";

export const WorkspaceSection = () => {
  return (
    <ContentSection
      id='workspace'
      // text="Here you will find an overview of the professional roles and projects I've worked on, with each experience highlighting the back-end technologies and solutions I contributed to."
      text=''
      title='EXPERIENCIA PROFESIONAL'
    >
      <div className='flex flex-row h-full gap-5'>
        <Timeline />
        <div className='flex flex-col gap-18 lg:gap-24'>
          <WorkItem
            company='KONECTA'
            date='Jun 2025 - Actualidad'
            description='Atención y registro de incidencias técnicas, soporte remoto en
                software y hardware, escalamiento de problemas a nivel superior,
                seguimiento y cierre de tickets, y documentación de soluciones
                en la base de conocimientos.'
            isCurrent
            title='Help Desk Analyst'
            key={1}
          />

          <WorkItem
            title='Team Leader'
            company='RED DE SALUD TECNOLÓGICA (RST)'
            date='Mar 2024 - Jul 2024'
            description='Gestión de proyectos, revisión de código y garantía de calidad,
                tutoría y formación de equipo, comunicación y coordinación,
                resolución de problemas y soporte técnico.'
            stack={[
              { element: <GrReactjs />, name: "React " },
              { element: <GrReactjs />, name: "Tailwind.css " },
              { element: <GrReactjs />, name: "TS / JS " },
              { element: <GrReactjs />, name: "Figma " },
            ]}
            key={2}
          />

          <WorkItem
            title='Desarrollador Web'
            company='RED DE SALUD TECNOLÓGICA (RST)'
            date='May 2023 - Jul 2024'
            description='Colaboración en el desarrollo de la interfaz de usuario,
                desarrollo de componentes de React, integración de APIs,
                optimización del rendimiento y mantenimiento del código.'
            stack={[
              { element: <GrReactjs />, name: "React " },
              { element: <GrReactjs />, name: "Tailwind.css " },
              { element: <GrReactjs />, name: "TS / JS " },
            ]}
            key={3}
          />

          <WorkItem
            title='Mantenimiento y Reparación de Computadoras'
            company='Emprendimiento'
            date='Mar 2018 - Actualidad'
            description=' Resolución de problemas de software, armado de PC, recuperación
                de datos y mantenimiento de servidores.'
            key={4}
          />
        </div>
      </div>

      {/* <div className='w-full h-0.5 bg-primary opacity-50'></div> */}

      <div>
        {/* title */}
        <div className='flex gap-3 mb-7 place-items-center'>
          <div className='h-4 bg-base-100'>
            <GrValidate className='w-5 h-5 stroke-primary ' />
          </div>
          <div className='place-self-start'>
            <h1 className='text-xl lg:text-3xl tracking-wider poppins-bold '>Estudios</h1>
            <div className='w-full h-1 rounded bg-primary'></div>
          </div>
        </div>

        {/* experience */}
        <div className='flex flex-col gap-14 lg:grid lg:grid-cols-2 lg:gap-12'>
          <div className='flex flex-col col-span-1 gap-2'>
            <h1 className='uppercase card-title  '>
              Tecnicatura Superior en Programación
            </h1>
            <h3 className='uppercase stat-title text-sm lg:text-base'>
              Universidad Tecnológica Nacional
            </h3>
            <h5 className='text-primary text-sm lg:text-base'>Ago 2021 - Nov 2023</h5>
            <div className='flex flex-wrap gap-2'>
              <div className='border badge badge-primary  badge-sm sm:badge-md lg:badge-lg badge-soft border-primary'>
                <GrReactjs />
                Java
              </div>
              <div className='border badge badge-primary  badge-sm sm:badge-md lg:badge-lg badge-soft border-primary'>
                <GrReactjs />
                React.ts
              </div>
              <div className='border badge badge-primary  badge-sm sm:badge-md lg:badge-lg badge-soft border-primary'>
                <GrReactjs />
                MySQL
              </div>
              <div className='border badge badge-primary  badge-sm sm:badge-md lg:badge-lg badge-soft border-primary'>
                <GrReactjs />
                MariaDB
              </div>
            </div>
          </div>
          <div className='flex flex-col col-span-1 gap-2 '>
            <h1 className='card-title'>
              Manteniemiento y Reparacion de Computadoras
            </h1>
            <h3 className='uppercase stat-title'>
              Newton - Escuela de capacitación
            </h3>
            <h5 className='text-primary'>Mar 2018 - Mar 2019</h5>
          </div>
          <div></div>
        </div>
      </div>
    </ContentSection>
  );
};
