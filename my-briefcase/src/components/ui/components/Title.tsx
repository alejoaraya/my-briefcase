interface Props {
  title: "ABOUT ME" | "CONTACT" | "PROJECTS";
  text: string;
}

export const Title = ({ title, text }: Props) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-4xl tracking-wider poppins-bold'>{title}</h1>
        <div className='w-20 h-1 rounded bg-primary'></div>
        <p className='text-xl text-center opacity-70'>{text}</p>
      </div>
    </>
  );
};
