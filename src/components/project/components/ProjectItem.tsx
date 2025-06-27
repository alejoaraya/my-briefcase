import { Button } from "../../ui";

import { HiLink } from "react-icons/hi2";
import { GrGithub, GrReactjs } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";

interface Props {
  url: string;
  image: string;
  title: string;
  // buttonText: "CASE STUDY" | "CASE WORK";
  buttonText: string;
  description: string;
}

export const ProjectItem = ({
  url,
  image,
  title,
  description,
  buttonText,
}: Props) => {
  return (
    <div className='grid grid-cols-1 gap-5 lg:gap-16 md:grid-cols-2 place-items-center'>
      <div className='w-full transition duration-500 border border-gray-300 rounded-3xl bg-base-200 hover:scale-105 hover:border-primary '>
        <img
          className='object-cover object-top w-full sm:h-full rounded-3xl'
          src={image}
          alt={url}
        />
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='text-xl poppins-bold'>{title}</h1>
        <div className='flex flex-row gap-2'>
          <div className='badge badge-primary'>
            <GrReactjs />
            React.ts
          </div>
          <div className='badge badge-primary'>
            <RiTailwindCssFill />
            Tailwind CSS
          </div>
          not yet
        </div>
        <div className='flex flex-col gap-8'>
          <p className='text-lg opacity-70'>{description}</p>
          <div className='flex flex-row gap-3'>
            <button className='border border-primary btn btn-primary btn-soft'>
              <GrGithub />
              Code
            </button>
            <button className='border border-primary btn btn-primary btn-soft'>
              <HiLink /> Preview
            </button>
            {/* <Button text={"Code"} url={url} />
            <Button text={"Preview"} url={url} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
