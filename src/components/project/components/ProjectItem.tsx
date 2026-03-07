import { FaGithub, FaGlobe } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaFigma } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { useState } from "react";
import { cn } from "../../../lib/util";
import { Button } from "../..";

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



  const redirect = (url: string) => {
    navigate(`/project/${url}`)
  }

  return (
    <div onMouseEnter={() => setHoverFlag(true)} onMouseLeave={() => setHoverFlag(false)} onClick={() => redirect(redirect_url)} className="cursor-pointer hover:bg-primary/5 card card-body h-full justify-between gap-12 shadow-sm bg-base-100 border border-primary rouded-3xl hover:h-[600px] ease-in transition-all duration-200 flex-row items-center">
      <img src={hoverFlag ? video_url : image_url} alt="wallpaper" className={cn("object-contain w-60 rounded-3xl transition ease-in-out duration-100", !hoverFlag ? 'h-32' : 'h-full border border-primary/20 w-80')} />
      {
        hoverFlag && <img src={image_url} alt="logo" className={cn("object-scale-down size-20 absolute bottom-4 left-[21%] p-1 rounded-full bg-base-100 shadow")} />
      }
      <div className="flex-1 gap-5 h-full flex flex-col justify-center">
        <div className="flex flex-col gap-3 justify-between">
          <div className="flex gap-5 absolute top-5 right-5 ">
            {/* LINKS */}
            <div className="tooltip" data-tip={"GitHub"}>
              <a
                href={info_url.github}
                target='_blank'
              >
                <FaGithub className={cn("stroke-primary fill-primary size-6 hover:scale-105 transition duration-100 ease-out", hoverFlag && "size-8")} />
              </a>
            </div>
            {info_url.demo && <div className="tooltip" data-tip={"Demo"}>
              <a
                href={info_url.demo}
                target='_blank'
              >
                <FaGlobe className={cn("stroke-primary fill-primary size-6 hover:scale-105 transition duration-100 ease-out", hoverFlag && "size-8")} />
              </a>
            </div>}
            {info_url.figma && <div className="tooltip" data-tip={"Figma"}>
              <a
                href={info_url.figma}
                target='_blank'
              >
                <FaFigma className={cn("stroke-primary fill-primary size-6 hover:scale-105 transition duration-100 ease-out", hoverFlag && "size-8")} />
              </a>
            </div>}
          </div>
          <div className="flex gap-3 items-start justify-between">
            <h1 className={cn("card-title", hoverFlag && "text-3xl font-extrabold")}>{title}</h1>
          </div>
          <p className={cn(hoverFlag && 'text-lg')}>{description}</p>
        </div>


        {/* STACK */}
        <div className="flex justify-between flex-col gap-5">
          <div className="flex flex-wrap gap-2 ">
            {
              (hoverFlag ? stack : stack.slice(0, 5)).map((tech) => (
                <h1
                  className={cn(
                    "border badge-md badge badge-primary badge-soft border-primary",
                    hoverFlag && "badge-lg text-lg  p-1.5 "
                  )}
                >
                  <tech.icon />
                  {tech.name}
                </h1>
              ))
            }
          </div>
          {
            hoverFlag && <Button size="w-32" text="Ver Demo" url={info_url.demo} blank />
          }
        </div>
      </div>

    </div>
  );
  /* return (
    <div className="card card-body h-full justify-between gap-12 shadow-sm bg-base-100 border border-primary rouded-3xl hover:scale-105 transition duration-500">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-start justify-between">
          <h1 className="card-title">{title}</h1>
          <div className="flex gap-3">
            <div className="tooltip" data-tip={"GitHub"}>
              <a
                href={url.github}
                target='_blank'
              >
                <FaGithub className=' stroke-primary fill-primary w-6 h-6 hover:scale-105 transition duration-100 ease-out' />
              </a>
            </div>
            {url.demo && <div className="tooltip" data-tip={"Demo"}>
              <a
                href={url.demo}
                target='_blank'
              >
                <FaGlobe className=' stroke-primary fill-primary w-6 h-6 hover:scale-105 transition duration-100 ease-out' />
              </a>
            </div>}
            {url.figma && <div className="tooltip" data-tip={"Figma"}>
              <a
                href={url.figma}
                target='_blank'
              >
                <FaFigma className=' stroke-primary fill-primary w-6 h-6 hover:scale-105 transition duration-100 ease-out' />
              </a>
            </div>}
          </div>
        </div>
        <p >{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 ">
        {
          stack.map(tech => (
            <h1 className='border  badge-sm xs:bagde-md sm:badge-md badge badge-primary badge-soft border-primary'>
              {<tech.icon />}
              {tech.name}
            </h1>
          ))
        }
      </div>
    </div>
  ); */
}; 