import { ContentSection } from "../ui";

import {
  FigmaIcon,
  JavaIcon,
  MysqlIcon,
  ReactIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from "../../assets/icons";


import { WorkItem } from "./components/WorkItem";
import { Timeline } from "./components/Timeline";


import { useTranslate } from "../../hooks/useTranslate";
import { BadgeCheck } from "lucide-react";


export const WorkspaceSection = () => {

  const { t } = useTranslate()

  return (
    <ContentSection
      id='workspace'
      title={t.workspace.title}
    >
      <div className='flex flex-row h-full gap-5'>
        <Timeline />
        <div className='flex flex-col gap-18 lg:gap-24'>
          <WorkItem
            isCurrent
            company={t.workspace.currentJobInformation.enterprise}
            date={t.workspace.currentJobInformation.dateStart + " - " + t.workspace.currentJobInformation.dateEnd}
            description={t.workspace.currentJobInformation.desctiption}
            title={t.workspace.currentJobInformation.title}
            key={1}
          />

          {/*  <WorkItem
            title='Team Leader'
            company='RED DE SALUD TECNOLÓGICA (RST)'
            date='Mar 2024 - Jul 2024'
            description='Gestión de proyectos, revisión de código y garantía de calidad,
                tutoría y formación de equipo, comunicación y coordinación,
                resolución de problemas y soporte técnico.'
            stack={[
              { element: <ReactIcon />, name: "React " },
              { element: <TailwindcssIcon />, name: "Tailwind.css " },
              { element: <TypescriptIcon />, name: "TS / JS " },
              { element: <FigmaIcon />, name: "Figma " },
            ]}
            key={2}
          /> */}

          <WorkItem
            title={t.workspace.devJobInformation.title}
            company={t.workspace.devJobInformation.enterprise}
            date={t.workspace.devJobInformation.dateStart + " - " + t.workspace.devJobInformation.dateEnd}
            description={t.workspace.devJobInformation.desctiption}
            stack={[
              { element: ReactIcon, name: "React " },
              { element: TailwindcssIcon, name: "Tailwind.css " },
              { element: TypescriptIcon, name: "TS / JS " },
              { element: FigmaIcon, name: "Figma " }
            ]}
            key={3}
          />

          <WorkItem
            title={t.workspace.supportJobInformation.title}
            company={t.workspace.supportJobInformation.enterprise}
            date={t.workspace.supportJobInformation.dateStart + " - " + t.workspace.supportJobInformation.dateEnd}
            description={t.workspace.supportJobInformation.desctiption}
            key={4}
          />
        </div>
      </div>

      {/* <div className='w-full h-0.5 bg-primary opacity-50'></div> */}

      <div>
        {/* title */}
        <div className='flex gap-3 mb-7 place-items-center'>
          <div className='h-4 bg-base-100'>
            <BadgeCheck className='w-5 h-5 stroke-primary ' />
          </div>
          <div className='place-self-start'>
            <h3 className='text-xl tracking-wider poppins-bold '>{t.workspace.subtitle}</h3>
            <div className='w-full h-1 rounded bg-primary'></div>
          </div>
        </div>

        {/* experience */}
        <div className='flex flex-col gap-14 lg:flex-row lg:justify-between'>
          <div className='flex flex-col gap-2'>
            <h4 className='uppercase card-title text-xl '>
              {t.workspace.studyUniversitaryInformation.title}
            </h4>
            <p className='uppercase stat-title text-base '>
              Universidad Tecnológica Nacional
            </p>
            <p className="text-gray-500">Argentina</p>
            <p className='text-primary '>{t.workspace.studyUniversitaryInformation.dateStart + " - " + t.workspace.studyUniversitaryInformation.dateEnd}</p>
            <div className='flex flex-wrap gap-2'>
              <div className='border badge badge-primary  badge-lg badge-soft border-primary'>
                <JavaIcon aria-hidden className="text-primary" /> <span>Java</span>
              </div>
              <div className='border badge badge-primary  badge-lg badge-soft border-primary'>
                <TypescriptIcon aria-hidden className="text-primary" /> <span>TypeScript</span>
              </div>
              <div className='border badge badge-primary  badge-lg badge-soft border-primary'>
                <MysqlIcon aria-hidden className="text-primary" /> <span>MySQL</span>
              </div>

            </div>
          </div>
          <div className='flex flex-col  gap-2 '>
            <h4 className='card-title text-xl'>
              {t.workspace.supportStudyInformation.title}
            </h4>
            <p className='uppercase stat-title text-base '>
              Newton - Escuela de capacitación
            </p>
            <p className="text-gray-500 text-base">Argentina</p>
            <p className='text-primary text-base'>{t.workspace.supportStudyInformation.dateStart + " - " + t.workspace.supportStudyInformation.dateEnd}</p>
          </div>

        </div>
      </div>
    </ContentSection>
  );
};
