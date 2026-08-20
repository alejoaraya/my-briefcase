
import { type Variants, motion } from "framer-motion";

import { Globe } from "lucide-react";

import {
  FigmaIcon,
  GithubIcon,
} from "../../../assets/icons";

import { cn } from "../../../lib/util";
import { Button } from "../..";



interface Props {
  info_url: {
    github: string,
    demo?: string
    figma?: string
  },
  stack: {
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
    name: string
  }[],
  title: string;
  description: string;
  ariaLabel?: string; //! add arial label as obligatory
  image_url?: string;
  outstanding?: boolean;
  badgeName: string;
  demoButtonText: string
}

export const ProjectItem = ({
  info_url,
  stack,
  title,
  description,
  outstanding,
  image_url = '/assets/projects-images/25729.webp',
  badgeName,
  demoButtonText,
  ariaLabel,
}:
  Props) => {





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
      viewport={{ once: true, amount: 0.5 }}
    >
      <div
        className={cn(
          "card card-body h-full p-0 border  grid grid-cols-1 gap-5 shadow-sm bg-base-100  border-primary rounded-3xl ease-in transition-all duration-200 lg:hover:bg-primary/5 ",
          outstanding && "bg-primary/3  border-2 ",
        )}
      >

        {/* BANNER */}
        <div className=" rounded-3xl ">
          <img loading="lazy" alt={title + ' - ' + badgeName} src={image_url} className=" object-scale-down rounded-3xl w-full" />
        </div>

        <div className=" lg:p-6">
          {/* BODY */}
          <div className="flex-1 gap-4 h-full flex flex-col justify-center p-5 lg:p-0">
            <div className="flex flex-col gap-4 justify-between">
              <div className="flex justify-between">

                <div className="flex gap-3 items-start justify-between lg:relative">
                  <h3 className="card-title text-2xl">
                    {title}
                  </h3>
                </div>
                <div
                  key={title + description}
                  className={"border badge-md badge badge-primary badge-soft border-primary text-lg"}
                >
                  <span>{badgeName}</span>
                </div>
              </div>

              <p className="text-lg">{description}</p>
            </div>

            <div className="flex justify-between h-full flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {stack.map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className={"border badge-lg badge badge-primary badge-soft border-primary"}
                  >
                    <tech.icon aria-hidden /><span>{tech.name}</span>
                  </div>
                ))}
              </div>


              <div className="flex flex-col gap-4">
                <Button ariaLabel={ariaLabel} size="full" icon={Globe} text={demoButtonText} url={info_url.demo} blank />
                <div className="grid grid-cols-2 gap-4">
                  <Button ariaLabel={ariaLabel + '- Github'} size="full" variant="outline" icon={GithubIcon} text="Github" url={info_url.github} blank />
                  <Button ariaLabel={ariaLabel + '- Figma'} size="full" variant="outline" icon={FigmaIcon} text="Figma" url={info_url.figma} blank />
                </div>
              </div>


            </div>
          </div>
        </div>


      </div>
    </motion.div>
  );

}


