interface Props {
  title:
    | "ABOUT ME"
    | "SOBRE MÍ"
    | "CONTACT"
    | "CONTACTAR"
    | "PROJECTS"
    | "PROYECTOS"
    | "PROFESSIONAL EXPERIENCE"
    | "EXPERIENCIA PROFESIONAL"
    | "LET'S PROGRAMING TOGETHER"
    | "PROGRAMEMOS JUNTOS"
    | "LET'S WORK TOGETHER"
    | "STACK"
    | "TRABAJEMOS JUNTOS";
  text: string;
}

export const Title = ({ title, text }: Props) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl tracking-wider lg:text-4xl poppins-bold'>
          {title}
        </h1>
        <div className='w-20 h-1 rounded bg-primary'></div>
        <p className='text-lg text-center md:text-xl opacity-70'>{text}</p>
      </div>
    </>
  );
};
