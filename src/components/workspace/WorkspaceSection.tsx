import { HiChevronRight } from "react-icons/hi2";
import { ContentSection } from "../ui";

export const WorkspaceSection = () => {
  return (
    <ContentSection
      id='workspace'
      // text="Here you will find an overview of the professional roles and projects I've worked on, with each experience highlighting the back-end technologies and solutions I contributed to."
      text=''
      title='PROFESSIONAL EXPERIENCE'
    >
      <div className='flex flex-row h-full gap-5'>
        <div className='w-0.5 h-full bg-primary opacity-25'></div>
        <div className='flex flex-col gap-24'>
          {/* CARD #1 */}
          <div className='flex flex-col gap-5 lg:flex-row lg:gap-10'>
            <div className='absolute w-3 h-3 translate-y-2 rounded-full -translate-x-[1.70rem] bg-primary'></div>
            <div className='flex flex-col gap-1'>
              <h1 className='card-title'>Creador de contenido</h1>
              <h3 className='stat-title'>RST</h3>
              <h5 className='text-blue-500'>Actualmente...</h5>
            </div>
            <div className='flex flex-col items-start justify-start gap-2'>
              <p>
                Divulgo sobre programación y desarrollo web en diferentes
                plataformas. Galardonado como mejor creador de contenido de
                habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.
              </p>
              <button className='border btn btn-soft'>
                Saber más <HiChevronRight />
              </button>
            </div>
          </div>

          <div className='flex flex-col gap-5 lg:flex-row lg:gap-10'>
            <div className='absolute w-3 h-3 translate-y-2 rounded-full -translate-x-[1.70rem] bg-primary'></div>
            <div className='flex flex-col gap-1'>
              <h1 className='card-title'>Principal Frontend enginner</h1>
              <h3 className='stat-title'>RST</h3>
              <h5 className='text-blue-500'>Septiembre 2022</h5>
            </div>
            <div className='flex flex-col items-start justify-start gap-2'>
              <p>
                Divulgo sobre programación y desarrollo web en diferentes
                plataformas. Galardonado como mejor creador de contenido de
                habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
  );
};
