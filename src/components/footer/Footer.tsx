import { ArrowUp } from "lucide-react";
import { motion } from 'framer-motion';


export const Footer = () => {

  const resetScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className=' footer flex [&>*]:w-full [&>p]:justify-center '>
        <p className='flex gap-1 py-10'>
          © Made by
          <a className='hover:underline' href='/'>
            me
          </a>
        </p>
      </footer>
      <motion.button
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: 'easeIn' }}
        onClick={resetScroll}
        aria-label="Volver arriba"
        className='absolute w-12 h-12 -translate-y-16 rounded-full  shadow-xl right-3 bg-primary'
      >
        <motion.div
          initial={{ rotate: -45 }}
          whileHover={{ rotate: 0 }}
          transition={{ duration: 0.3, ease: 'easeIn' }}


        >
          <ArrowUp className='size-10 m-auto 0 stroke-white' />
        </motion.div>
      </motion.button>
    </>
  );
};
