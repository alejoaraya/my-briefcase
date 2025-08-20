import { GrReactjs, GrValidate } from "react-icons/gr";
import { ContentSection } from "../ui";

export const WorkspaceSection = () => {
  return (
    <ContentSection
      id='workspace'
      // text="Here you will find an overview of the professional roles and projects I've worked on, with each experience highlighting the back-end technologies and solutions I contributed to."
      text=''
      title='EXPERIENCIA PROFESIONAL'
    >
      <div className='flex flex-row h-full gap-5'>
        <div className='w-0.5 h-full bg-primary opacity-25'></div>
        <div className='flex flex-col gap-24'>
          {/* Help Desk Analyst - KONECTA */}
          <div className='flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-10'>
            <div className='inline-grid absolute w-3 h-3 translate-y-2 rounded-full -translate-x-[1.70rem] bg-primary *:[grid-area:1/1]'>
              <div className='w-3 h-3 status status-primary animate-ping'></div>
              <div className='w-3 h-3 status status-primary'></div>
            </div>

            <div className='flex flex-col w-full col-span-1 gap-1'>
              <h1 className='card-title'>Help Desk Analyst</h1>
              <h3 className='stat-title'>KONECTA</h3>
              <h5 className='font-bold text-blue-500'>Jun 2025 - Actualidad</h5>
            </div>

            <div className='flex flex-col items-start justify-start col-span-2 gap-2 text-justify'>
              <p>
                Atención y registro de incidencias técnicas, soporte remoto en
                software y hardware, escalamiento de problemas a nivel superior,
                seguimiento y cierre de tickets, y documentación de soluciones
                en la base de conocimientos.
              </p>
            </div>
          </div>

          {/* Team Leader - RST */}
          <div className='flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-10'>
            <div className='absolute w-3 h-3 translate-y-2 rounded-full -translate-x-[1.70rem] bg-primary'></div>
            <div className='flex flex-col w-full col-span-1 gap-1'>
              <h1 className='card-title'>Team Leader</h1>
              <h3 className='stat-title'>RED DE SALUD TECNOLÓGICA (RST)</h3>
              <h5 className='text-blue-500'>Mar 2024 - Jul 2024</h5>
            </div>
            <div className='flex flex-col items-start justify-start col-span-2 gap-2 text-justify'>
              <p>
                Gestión de proyectos, revisión de código y garantía de calidad,
                tutoría y formación de equipo, comunicación y coordinación,
                resolución de problemas y soporte técnico.
              </p>
              <div className='flex gap-2'>
                <div className='border badge badge-primary badge-soft border-primary'>
                  <GrReactjs />
                  React
                </div>
                <div className='border badge badge-primary badge-soft border-primary'>
                  <GrReactjs />
                  Tailwind.css
                </div>
                <div className='border badge badge-primary badge-soft border-primary'>
                  <GrReactjs />
                  TS/JS
                </div>
                <div className='border badge badge-primary badge-soft border-primary'>
                  <GrReactjs />
                  Figma
                </div>
              </div>
              {/* <button className='border btn btn-soft'>
                Saber más <HiChevronRight />
              </button> */}
            </div>
          </div>

          {/* Desarrollador Web - RST */}
          <div className='flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-10'>
            <div className='absolute w-3 h-3 translate-y-2 rounded-full -translate-x-[1.70rem] bg-primary'></div>
            <div className='flex flex-col w-full col-span-1 gap-1'>
              <h1 className='card-title'>Desarrollador Web</h1>
              <h3 className='stat-title'>RED DE SALUD TECNOLÓGICA (RST)</h3>
              <h5 className='text-blue-500'>May 2023 - Jul 2024</h5>
            </div>
            <div className='flex flex-col items-start justify-start col-span-2 gap-2 text-justify'>
              <p>
                Colaboración en el desarrollo de la interfaz de usuario,
                desarrollo de componentes de React, integración de APIs,
                optimización del rendimiento y mantenimiento del código.
              </p>
              <div className='flex gap-2'>
                <div className='border badge badge-primary badge-soft border-primary'>
                  <GrReactjs />
                  React
                </div>
                <div className='border badge badge-primary badge-soft border-primary'>
                  <GrReactjs />
                  Tailwind.css
                </div>
                <div className='border badge badge-primary badge-soft border-primary'>
                  <GrReactjs />
                  TS/JS
                </div>
              </div>
              {/* <button className='border btn btn-soft'>
                Saber más <HiChevronRight />
              </button> */}
            </div>
          </div>

          {/* Mantenimiento y Reparación de Computadoras - Newton */}
          <div className='flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-10'>
            <div className='absolute w-3 h-3 translate-y-2 rounded-full -translate-x-[1.70rem] bg-primary'></div>
            <div className='flex flex-col w-full col-span-1 gap-1'>
              <h1 className='card-title'>
                Mantenimiento y Reparación de Computadoras
              </h1>
              <h3 className='stat-title'>Emprendimiento</h3>
              <h5 className='text-blue-500'>Mar 2018 - Actualidad</h5>
            </div>
            <div className='flex flex-col items-start justify-start col-span-2 gap-2 text-justify'>
              <p>
                Resolución de problemas de software, armado de PC, recuperación
                de datos y mantenimiento de servidores.
              </p>
              {/* <button className='border btn btn-soft'>
                Saber más <HiChevronRight />
              </button> */}
            </div>
          </div>

          <div className='flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-12'>
            <div className=' absolute translate-y-2 rounded-full -translate-x-[1.85rem] h-4 bg-base-100'>
              <GrValidate className='w-5 h-5 stroke-primary ' />
            </div>
            <div className='flex flex-col col-span-1 gap-2'>
              <h1 className='uppercase card-title'>
                Tecnicatura Superior en Programación
              </h1>
              <h3 className='uppercase stat-title'>
                Universidad Tecnológica Nacional
              </h3>
              <h5 className='text-blue-500'>Ago 2021 - Nov 2023</h5>
              <div className='flex flex-wrap gap-2'>
                <div className='border badge badge-primary badge-soft border-primary'>
                  <GrReactjs />
                  Java
                </div>
                <div className='border badge badge-primary badge-soft border-primary'>
                  <GrReactjs />
                  TypeScript
                </div>
                <div className='border badge badge-primary badge-soft border-primary'>
                  <GrReactjs />
                  MySQL
                </div>
                <div className='border badge badge-primary badge-soft border-primary'>
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
              <h5 className='text-blue-500'>Mar 2018 - Mar 2019</h5>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </ContentSection>
  );
};
