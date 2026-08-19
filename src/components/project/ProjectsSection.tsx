import {
  ReactIcon,
  ReactrouterIcon,
  ReduxIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from "../../assets/icons";

import { ContentSection } from "../ui";
import { ProjectItem } from "./components/ProjectItem";

import { useTranslate } from "../../hooks/useTranslate";

export const ProjectsSection = () => {

  const { t } = useTranslate()

  return (
    <ContentSection
      id='projects'
      title={t.projects.title}
    >
      <div className="grid grid-col-1 md:grid-cols-2 gap-5 lg:gap-8 place-items-center md:place-items-stretch ">
        <ProjectItem
          ariaLabel={t.projects.cachavachaERPInformation.arialLabel}
          title='Cachavacha' badgeName="ERP"
          info_url={{ github: "https://github.com/raxtech-solution/Cachavacha-Frontend", demo: "https://cachavacha-frontend.vercel.app/", figma: 'https://www.figma.com/design/KpFxefqx0JrECgQTGa5qsD/Cachavacha-ERP?node-id=0-1&t=U0bjNoQKK2pqlgWP-1' }}
          image_url="/assets/projects-images/cacha_erp.webp"
          demoButtonText={t.projects.buttomTag}
          description={t.projects.cachavachaERPInformation.description}
          outstanding
          stack={[
            { icon: ReactIcon, name: "React" },
            { icon: TypescriptIcon, name: "TypeScript" },
            { icon: TailwindcssIcon, name: "Tailwind.css" },
            { icon: ReduxIcon, name: "Redux Toolkit" },
            { icon: ReactrouterIcon, name: "React Router 7" },
          ]}
        />
        <ProjectItem
          ariaLabel={t.projects.raxtechSPAInformation.arialLabel}
          title='RaxTech' badgeName="SPA"
          demoButtonText={t.projects.buttomTag}
          info_url={{ github: "https://github.com/raxtech-solution/raxtech-landing-page", demo: "https://raxtech-landing-page.vercel.app/", figma: "https://www.figma.com/design/R6abK0kTIsDJX0Sdp7SwS4/RaxTech-Docs?node-id=1-4&t=U0bjNoQKK2pqlgWP-1" }}
          image_url="/assets/projects-images/rax_tech_spa.webp"
          description={t.projects.raxtechSPAInformation.description}
          stack={[
            { icon: ReactIcon, name: "React" },
            { icon: TypescriptIcon, name: "TypeScript" },
            { icon: TailwindcssIcon, name: "Tailwind CSS" },
            { icon: ReactrouterIcon, name: "React Router 7" },
          ]}
        />

        <ProjectItem
          ariaLabel={t.projects.cachavachaSPAInformation.arialLabel}
          title='Cachavacha' badgeName="SPA"
          info_url={{ github: "https://github.com/raxtech-solution/cachavacha-landing-page", demo: 'https://cachavacha-landing-page.vercel.app/', figma: "https://www.cachavacha-figma-hasnt-done-yet" }}
          demoButtonText={t.projects.buttomTag}
          description={t.projects.cachavachaSPAInformation.description}
          image_url="/assets/projects-images/cacha_spa.webp"
          stack={[
            { icon: ReactIcon, name: "React" },
            { icon: TypescriptIcon, name: "TypeScript" },
            { icon: TailwindcssIcon, name: "Tailwind CSS" },
            { icon: ReactrouterIcon, name: "React Router 7" },
          ]}
        />


        < ProjectItem
          ariaLabel={t.projects.braidedSPAInformation.arialLabel}
          title='Braided' badgeName="SPA"
          demoButtonText={t.projects.buttomTag}
          info_url={{ github: "https://github.com/raxtech-solution/braided-landing-page", demo: "https://braided-landing-page.vercel.app/", figma: "https://www.figma.com/design/umhONv5SmBBYeFbFaVKghm/Braided-Landing-Page-Design?node-id=1902-153&t=ANWd0Bo9SlJ3XgwT-1" }}
          description={t.projects.braidedSPAInformation.description}
          image_url="/assets/projects-images/braided_spa.webp"
          stack={[
            { icon: ReactIcon, name: "React" },
            { icon: TypescriptIcon, name: "TypeScript" },
            { icon: TailwindcssIcon, name: "Tailwind CSS" },
            { icon: ReactrouterIcon, name: "React Router 7" }]}
        />
      </div>
    </ContentSection>
  );
};
