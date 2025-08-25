import { GrFormNextLink } from "react-icons/gr";

export const Footer = () => {
  return (
    <>
      <footer className=' footer flex [&>*]:w-full [&>p]:justify-center '>
        <p className='flex gap-1 py-10'>
          © Copyright {new Date().getFullYear()}. Made by
          <a className='hover:underline' href='/'>
            Alejo Araya
          </a>
        </p>
      </footer>
      <a
        href={"/#"}
        className='absolute w-12 h-12 -translate-y-16 rounded-full shadow-xl right-3 bg-primary'
      >
        <GrFormNextLink className='w-full h-full duration-150 ease-in transform -rotate-130 hover:-rotate-90 stroke-white' />
      </a>
    </>
  );
};
