import { Languages } from "lucide-react";
import { useTranslate } from "../../hooks/useTranslate";
import { motion } from 'framer-motion';

export const Navbar = () => {

  const { lang, switchLang, t } = useTranslate()

  return (
    <header
      className='navbar bg-base-100 px-[18px] items-center justify-end '
    >
      <motion.button
        whileHover={{ color: 'var(--color-primary)' }}
        transition={{ duration: 0.5, type: "spring" }}
        type="button"
        className="gap-1.5 items-center flex cursor-pointer" onClick={() => { switchLang(lang) }}>
        <Languages className="size-5 text-black/40" /> <p className="lato-bold">{t.navbar.lenguage}</p>
      </motion.button>
    </header>
  );
};
