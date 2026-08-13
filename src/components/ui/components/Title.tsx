interface Props {
  title: string;

}

export const Title = ({ title }: Props) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h2 className='text-xl md:text-2xl tracking-wider lg:text-4xl poppins-bold'>
          {title}
        </h2>
        <div className='w-20 h-1 rounded bg-primary'></div>

      </div>
    </>
  );
};
