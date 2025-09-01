import { GrReactjs } from "react-icons/gr";
import { ContentSection } from "../ui";
import { StackItem } from "./components/StackItem";
import { IconType } from "react-icons";

const stacksTech: Stack[] = [
  { title: "JavaScript", icon: GrReactjs },
  { title: "TypeScript", icon: GrReactjs },
  { title: "React", icon: GrReactjs },
  { title: "HTML", icon: GrReactjs },
  { title: "CSS", icon: GrReactjs },
  { title: "Sass", icon: GrReactjs },
  { title: "Astro", icon: GrReactjs },
  { title: "SQLite", icon: GrReactjs },
  { title: "MongoDB", icon: GrReactjs },
  { title: "Git", icon: GrReactjs },
  { title: "GitHub", icon: GrReactjs },
  { title: "Docker", icon: GrReactjs },
  { title: "VSCode", icon: GrReactjs },
  { title: "Linux", icon: GrReactjs },
  { title: "Windows", icon: GrReactjs },
  { title: "Formik", icon: GrReactjs },
  { title: "Axios", icon: GrReactjs },
  { title: "Jest", icon: GrReactjs },
  { title: "React-test-library", icon: GrReactjs },
  { title: "whatwg-fetch", icon: GrReactjs },
  { title: "Tailwind.css", icon: GrReactjs },
  { title: "DaisyUI", icon: GrReactjs },
  { title: "Shadcn", icon: GrReactjs },
  { title: "MaterialUI", icon: GrReactjs },
  { title: "Java", icon: GrReactjs },
  { title: "MySQL", icon: GrReactjs },
  { title: "SpringBoot", icon: GrReactjs },
  { title: "Log4j", icon: GrReactjs },
  { title: "Hibernate", icon: GrReactjs },
  { title: "Lombok", icon: GrReactjs },
  { title: "Maven", icon: GrReactjs },
  { title: "JUnit5", icon: GrReactjs },
  { title: "Postman", icon: GrReactjs },
  { title: "Swagger", icon: GrReactjs },
]

const softskills: Stack[] = [
  { title: "Resolución de Problemas" },
  { title: "Comunicación" },
  { title: "Capacidad Analitica" },
  { title: "Gestión del Tiempo y Organización" },
  { title: "Adaptabilidad" },
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
  icon?: IconType
}

export const StackSection = () => {
  return (
    <ContentSection id='stack' text='' title='STACK'>
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