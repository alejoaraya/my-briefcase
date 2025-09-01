import { FaGithub, FaGlobe } from "react-icons/fa";
import { IconType } from "react-icons";

interface Props {
  url: {
    github: string,
    demo?: string
  },
  stack: {
    icon: IconType,
    name: string
  }[],
  title: string;
  description: string;
}

export const ProjectItem = ({
  url,
  stack,
  title,
  description,
}:
  Props) => {
  return (
    <div className="card card-body h-full justify-between gap-12 shadow-sm bg-base-100 border border-primary rouded-3xl hover:scale-105 transition duration-500">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <h1 className="card-title">{title}</h1>
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
        </div>
        <p >{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 ">
        {
          stack.map(tech => (
            <h1 className='border badge-md badge badge-primary badge-soft border-primary'>
              {<tech.icon />}
              {tech.name}
            </h1>
          ))
        }
      </div>
    </div>
  );
};
/* 

<div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className="flex flex-wrap gap-2 ">
      <p>{description}</p>
      <h1 className='border badge-lg badge badge-primary badge-soft border-primary'>
        {<GrReactjs />}
        React
      </h1>
      <h1 className='border badge-lg badge badge-primary badge-soft border-primary'>
        {<GrReactjs />}
        TypeScript
      </h1>
      <h1 className='border badge-lg badge badge-primary badge-soft border-primary'>
        {<GrReactjs />}
        Tailwind.css
      </h1>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div> */