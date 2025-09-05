import { ContentSection } from "../ui";
import { StackItem } from "./components/StackItem";
import { IconType } from "react-icons";

import { GrReactjs } from "react-icons/gr";
import { SiApachemaven, SiAstro, SiAxios, SiCss3, SiDaisyui, SiDocker, SiFormik, SiGit, SiGithub, SiHibernate, SiHtml5, SiJavascript, SiJest, SiJunit5, SiLinux, SiMaterialdesign, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiSass, SiShadcnui, SiSpringboot, SiSwagger, SiTailwindcss, SiTestinglibrary, SiTypescript } from "react-icons/si";
import { FaJava, FaWindows } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const stacksTech: Stack[] = [
  { title: "JavaScript", icon: SiJavascript, isImportant: true },
  { title: "TypeScript", icon: SiTypescript, isImportant: true },
  { title: "React", icon: GrReactjs, isImportant: true },
  { title: "Next.js", icon: SiNextdotjs, isImportant: true },
  { title: "Tailwind.css", icon: SiTailwindcss, isImportant: true },
  { title: "Java", icon: FaJava, isImportant: true },
  { title: "MySQL", icon: SiMysql, isImportant: true },
  { title: "SpringBoot", icon: SiSpringboot, isImportant: true },
  { title: "Git", icon: SiGit, isImportant: true },
  { title: "Docker", icon: SiDocker, isImportant: true },
  { title: "HTML", icon: SiHtml5 },
  { title: "CSS", icon: SiCss3 },
  { title: "Sass", icon: SiSass },
  { title: "Astro", icon: SiAstro },
  { title: "MongoDB", icon: SiMongodb },
  { title: "GitHub", icon: SiGithub },
  { title: "VSCode", icon: VscVscode },
  { title: "Linux", icon: SiLinux },
  { title: "Windows", icon: FaWindows },
  { title: "Formik", icon: SiFormik },
  { title: "Axios", icon: SiAxios },
  { title: "Jest", icon: SiJest },
  { title: "React-test-library", icon: SiTestinglibrary },
  { title: "DaisyUI", icon: SiDaisyui },
  { title: "Shadcn", icon: SiShadcnui },
  { title: "MaterialUI", icon: SiMaterialdesign },
  { title: "Hibernate", icon: SiHibernate },
  { title: "Maven", icon: SiApachemaven },
  { title: "JUnit5", icon: SiJunit5 },
  { title: "Postman", icon: SiPostman },
  { title: "Swagger", icon: SiSwagger },
]

const softskills: Stack[] = [
  { title: "Resolución de Problemas", isImportant: true },
  { title: "Comunicación", isImportant: true },
  { title: "Capacidad Analitica", isImportant: true },
  { title: "Adaptabilidad", isImportant: true },
  { title: "Gestión del Tiempo y Organización" },
  { title: "Trabajo en Equipo" },
  { title: "Estructura de Datos y Algoritmos" },
  { title: "Aprendizaje Continuo" },
  { title: "Creatividad e inovación" },
  { title: "Liderazgo" },
  { title: "Procedimiento de Prueba" },
  { title: "Conocimiento de Depuración" },

]

interface Stack {
  title: string,
  icon?: IconType,
  isImportant?: boolean
}

export const StackSection = () => {
  return (
    <ContentSection id='stack' text='' title='HABILIDADES'>
      <div className='flex flex-row flex-wrap gap-3 lg:gap-x-4 '>
        {
          stacksTech.map(stack => (
            <StackItem key={stack.title} stack={stack} />
          ))
        }
      </div>
      <div className='flex flex-row flex-wrap gap-3 lg:gap-x-4 '>
        {
          softskills.map(stack => (
            <StackItem key={stack.title} stack={stack} />
          ))
        }
      </div>
    </ContentSection>
  );
};