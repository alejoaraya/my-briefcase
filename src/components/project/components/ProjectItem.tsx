import { FaGithub, FaGlobe } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaFigma } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { useState } from "react";
import { cn } from "../../../lib/util";
import { Button } from "../..";
import { type Variants, motion } from "framer-motion";



interface Props {
  info_url: {
    github: string,
    demo?: string
    figma?: string
  },
  stack: {
    icon: IconType,
    name: string
  }[],
  title: string;
  description: string;
  image_url?: string;
  video_url?: string;
  redirect_url: string;
}

export const ProjectItem = ({
  info_url,
  stack,
  title,
  description,
  image_url = 'https://4kwallpapers.com/images/walls/thumbs_3t/25729.jpg',
  video_url,
  redirect_url
}:
  Props) => {
  const navigate = useNavigate()
  const [hoverFlag, setHoverFlag] = useState(false)

  const handleMouseEnter = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setHoverFlag(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setHoverFlag(false);
    }
  };

  const redirect = (url: string) => {
    navigate(`/project/${url}`)
  }



  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}

        className={cn(
          "card card-body h-full justify-between shadow-sm bg-base-100 border border-primary rounded-3xl ease-in transition-all duration-200",
          "flex flex-col items-center gap-5 p-0",
          "lg:flex-row lg:items-center lg:gap-12 lg:p-6 lg:hover:bg-primary/5 lg:hover:h-[600px]"
        )}
      >
        <div className="relative w-full lg:w-auto">

          {/* MOBILE */}
          <img
            src={video_url}
            alt="wallpaper"
            className="block w-full object-contain rounded-2xl lg:hidden"
          />

          {/* DESKTOP */}
          <img
            src={hoverFlag ? video_url : image_url}
            alt="wallpaper"
            className={cn(
              "hidden object-contain rounded-3xl lg:block lg:transition lg:ease-in-out lg:duration-100",
              hoverFlag
                ? "lg:h-full lg:w-80 lg:border lg:border-primary/20"
                : "lg:h-32 lg:w-60"
            )}
          />


          {hoverFlag && (
            <>
              <img
                src={video_url}
                alt="preview"
                className="hidden lg:block absolute inset-0 object-contain w-full h-full rounded-3xl"
              />
              <img
                src={image_url}
                alt="logo"
                className="hidden lg:block object-scale-down size-20 absolute bottom-1 left-4/5 p-1 rounded-full bg-base-100 shadow"
              />
            </>
          )}
        </div>

        <div className="flex-1 gap-7 h-full flex flex-col justify-center p-5 lg:p-0">
          <div className="flex flex-col gap-7 justify-between">
            <div className="flex gap-5 absolute right-6 lg:top-6 ">
              <div className="tooltip" data-tip="GitHub">
                <a
                  href={info_url.github}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub
                    className={cn(
                      "stroke-primary fill-primary size-6 hover:scale-105 transition duration-100 ease-out",
                      hoverFlag && "lg:size-8"
                    )}
                  />
                </a>
              </div>

              {info_url.demo && (
                <div className="tooltip" data-tip="Demo">
                  <a
                    href={info_url.demo}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGlobe
                      className={cn(
                        "stroke-primary fill-primary size-6 hover:scale-105 transition duration-100 ease-out",
                        hoverFlag && "lg:size-8"
                      )}
                    />
                  </a>
                </div>
              )}

              {info_url.figma && (
                <div className="tooltip" data-tip="Figma">
                  <a
                    href={info_url.figma}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFigma
                      className={cn(
                        "stroke-primary fill-primary size-6 hover:scale-105 transition duration-100 ease-out",
                        hoverFlag && "lg:size-8"
                      )}
                    />
                  </a>
                </div>
              )}
            </div>
            <div className="flex gap-3 items-start justify-between lg:relative">
              <h1 className={cn("card-title", hoverFlag && "lg:text-3xl lg:font-extrabold")}>
                {title}
              </h1>


            </div>

            <p className={cn(hoverFlag && "lg:text-lg")}>{description}</p>
          </div>

          <div className="flex justify-between flex-col gap-7">
            <div className="flex flex-wrap gap-2">
              {stack.map((tech, index) => (
                <h1
                  key={`${tech.name}-${index}`}
                  className={cn(
                    "border badge-md badge badge-primary badge-soft border-primary",
                    hoverFlag && "lg:badge-lg lg:text-lg lg:p-1.5"
                  )}
                >
                  <tech.icon />
                  {tech.name}
                </h1>
              ))}
            </div>

            <div className="block lg:hidden">
              {info_url.demo && (
                <Button size="w-32" text="Ver Demo" url={info_url.demo} blank />
              )}
            </div>

            <div className="hidden lg:block">
              {hoverFlag && info_url.demo && (
                <Button size="w-32" text="Ver Demo" url={info_url.demo} blank />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

}


