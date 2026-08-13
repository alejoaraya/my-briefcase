import { useState } from "react";

import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "../assets/icons";
import { ArrowUpRight, Check, Download, Mail } from "lucide-react";
import { Button } from "./ui";

import { AvailabilityBadge } from "./workspace/components/AvailabilityBadge";
import { useTranslate } from "../hooks/useTranslate";
import { motion } from 'framer-motion';

const CV_URL = "cv-alejo-araya.pdf";
const EMAIL = "alejoaraya2000@gmail.com";


const socialMediaItems = [
  { id: 1, Icon: WhatsappIcon, link: "https://wa.me/+5492612589882", dataTip: "Whatsapp" },
  { id: 2, Icon: GithubIcon, link: "https://github.com/alejoaraya", dataTip: "GitHub" },
  { id: 3, Icon: LinkedinIcon, link: "https://www.linkedin.com/in/alejoaraya/", dataTip: "LinkedIn" },
];


export const HeroSection = () => {
  const { t } = useTranslate()
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Fallback para navegadores sin Clipboard API (http, permisos, etc.)
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };


  return (
    <>
      {/* Versión Mobile */}
      <main className="flex flex-col items-start justify-center gap-5 pt-10 sm:pt-16 md:pt-32  " id="home">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center w-full">
          <div className='avatar'>
            <img
              src='/assets/avatar/cartoon_avatar.webp'
              alt="avatar"
              loading="lazy"
              height={214}
              width={212}
              fetchPriority="high"
            />
          </div>
          <AvailabilityBadge badgeName={t.hero.hireBadge} />
        </div>
        <div className="flex flex-col gap-6 md:gap-8 min-h-[404px]">
          <div className="flex flex-col gap-3 lg:gap-5 sm:text-left">
            <div className={`flex gap-2 items-start flex-col`}>
              <p className="lato-bold text-lg sm:text-2xl text-primary lg:text-3xl">{t.hero.specialization}</p>
              <motion.h1
                initial={{ y: -10, opacity: 0, }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-3xl sm:text-2xl lato-bold lg:text-3xl min-h-[36px]">{t.hero.gretting}</motion.h1>
            </div>
            <motion.p
              initial={{ y: -10, opacity: 0, }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-lg sm:text-base leading-relaxed min-h-[88px]">
              {t.hero.shortDescription}
            </motion.p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 w-full">
              <Button
                icon={ArrowUpRight}
                variant="solid"
                fullWidth
                text={t.hero.navigateProjects}
                url="#projects"
              />
              <Button
                icon={Download}
                variant="outline"
                fullWidth
                text={t.hero.downloadCV}
                url={CV_URL}
                blank
              />
            </div>

            <div className="flex flex-col justify-between  gap-6">
              <button
                type='button'
                onClick={handleCopy}
                aria-label='Copiar email al portapapeles'
                className='px-4 text-lg m-auto badge badge-primary bg-primary/5 text-primary tooltip'
                data-tip={copied ? t.hero.datatipMailOut : t.hero.datatipMailIn}
              >
                {copied ? <Check className="size-5" /> : <Mail className="size-5" />} {EMAIL}
              </button>

              <div className="flex justify-between mx-2">
                {socialMediaItems.map(({ id, Icon, link, dataTip }) => (
                  <div key={id} className="tooltip" data-tip={dataTip}>
                    <a
                      href={link} aria-label={dataTip} target="_blank" rel="noreferrer" >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1 }}
                        transition={{ duration: 0.3, type: 'spring' }}
                      >
                        <Icon className="text-primary w-8 h-8" />
                      </motion.div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Versión Desktop */}
      {/* I HAVENT REVIEWED YET */}
      {/* <main className="grid-cols-3 pt-10 sm:pt-16 md:py-32 px-4 hidden 2xl:grid" id="home">
        <div className="col-start-1">
          <Avatar size="w-32 lg:w-70" />
        </div>
        <div className="flex flex-col gap-6 md:gap-8 w-full col-span-2 justify-center">
          <div className="flex flex-col gap-3 lg:gap-5 sm:text-left">
            <div className={`flex gap-2 items-start flex-col`}>
              <p className="lato-bold text-lg sm:text-2xl text-primary lg:text-3xl">{t.hero.specialization}</p>
              <p className="text-3xl sm:text-2xl lato-bold lg:text-3xl">{t.hero.gretting}</p>
            </div>
            <p className="text-lg sm:text-base leading-relaxed">
              {t.hero.shortDescription}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 w-full">
              <Button
                icon={LuArrowUpRight}
                variant="solid"
                fullWidth
                text={t.hero.navigateProjects}
                url="#projects"
              />
              <Button
                icon={LuDownload}
                variant="outline"
                fullWidth
                text={t.hero.downloadCV}
                url={CV_URL}
                blank
              />
            </div>

            <div className="flex flex-col justify-between  gap-6">
              <button
                type='button'
                onClick={handleCopy}
                aria-label='Copiar email al portapapeles'
                className='px-4 text-lg m-auto badge badge-primary bg-primary/5 text-primary tooltip'
                data-tip={copied ? t.hero.datatipMailOut : t.hero.datatipMailIn}
              >
                {copied ? <LuCheck /> : <HiEnvelope />} {EMAIL}
              </button>

              <div className="flex justify-between">
                {socialMediaItems.map(({ id, Icon, link, dataTip }) => (
                  <div key={id} className="tooltip" data-tip={dataTip}>
                    <a href={link} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                      <Icon className="text-primary w-8 h-8" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main> */}
    </>
  )
};
