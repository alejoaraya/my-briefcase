import {
  CssIcon,
  DockerIcon,
  FigmaIcon,
  GitIcon,
  GithubIcon,
  HibernateIcon,
  Html5Icon,
  JavaIcon,
  JavascriptIcon,
  Junit5Icon,
  MysqlIcon,
  PostmanIcon,
  ReactIcon,
  SassIcon,
  SpringbootIcon,
  SwaggerIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from "../../assets/icons";

import { ContentSection } from "../ui";
import { StackItem } from "./components/StackItem";

import { useTranslate } from "../../hooks/useTranslate";

const stacksFontend: Stack[] = [
  { title: "React", icon: ReactIcon, isImportant: true },
  { title: "TypeScript", icon: TypescriptIcon, isImportant: true },
  { title: "Tailwind.css", icon: TailwindcssIcon, isImportant: true },
  { title: "JavaScript", icon: JavascriptIcon, isImportant: true },
  { title: "HTML", icon: Html5Icon },
  { title: "CSS", icon: CssIcon },
  { title: "Sass", icon: SassIcon },
  { title: "Figma", icon: FigmaIcon },
]
const stacksBackend: Stack[] = [

  { title: "Java", icon: JavaIcon, isImportant: true },
  { title: "SpringBoot", icon: SpringbootIcon, isImportant: true },
  { title: "Hibernate", icon: HibernateIcon },
  { title: "JUnit5", icon: Junit5Icon },
  { title: "Swagger", icon: SwaggerIcon },
  { title: "MySQL", icon: MysqlIcon, isImportant: true },
]
const stacksTools: Stack[] = [
  { title: "Git", icon: GitIcon, isImportant: true },
  { title: "Docker", icon: DockerIcon, isImportant: true },
  { title: "GitHub", icon: GithubIcon },
  { title: "Postman", icon: PostmanIcon },
]

interface Stack {
  title: string,
  icon?: React.FC<React.SVGProps<SVGSVGElement>>,
  isImportant?: boolean
}

export const StackSection = () => {
  const { t } = useTranslate()

  return (
    <ContentSection id='stack' title={t.skills.title}>
      <div className="grid grid-cols-1 gap-14
      md:grid-cols-2
      ">
        <div className="flex gap-2.5 flex-col">
          <div className="flex items-center gap-9">
            <div className='w-3 h-3 status status-primary'></div>
            <h3 className="text-xl lato-bold">Front-end</h3>
          </div>
          <div className='flex flex-row flex-wrap gap-3 lg:gap-x-4 '>
            {
              stacksFontend.map((stack, index) => (
                <StackItem key={`${stack.title}-${index}`} stack={stack} />
              ))
            }
          </div>
        </div>

        <div className="flex gap-2.5 flex-col">
          <div className="flex items-center gap-9">
            <div className='w-3 h-3 status status-primary'></div>
            <h3 className="text-xl lato-bold">{t.skills.backendTag}</h3>
          </div>
          <div className='flex flex-row flex-wrap gap-3 lg:gap-x-4 '>
            {
              stacksBackend.map((stack, index) => (
                <StackItem key={`${stack.title}-${index}`} stack={stack} />
              ))
            }
          </div>
        </div>

        <div className="flex gap-2.5 flex-col">
          <div className="flex items-center gap-9">
            <div className='w-3 h-3 status status-primary'></div>
            <h3 className="text-xl lato-bold">{t.skills.toolsTag}</h3>
          </div>
          <div className='flex flex-row flex-wrap gap-3 lg:gap-x-4 '>
            {
              stacksTools.map((stack, index) => (
                <StackItem key={`${stack.title}-${index}`} stack={stack} />
              ))
            }
          </div>
        </div>

        <div className="flex gap-2.5 flex-col">
          <div className="flex items-center gap-9">
            <div className='w-3 h-3 status status-primary'></div>
            <h3 className="text-xl lato-bold">{t.skills.softSkillTag}</h3>
          </div>
          <div className='flex flex-row flex-wrap gap-3 lg:gap-x-4 '>
            {
              t.skills.softSkillBadges.map((stack, index) => (
                <StackItem key={`${stack.title}-${index}`} stack={stack} />
              ))
            }
          </div>
        </div>
      </div>
    </ContentSection>
  );
};