import { ReactElement } from "react";

interface Job {
  title: string;
  company: string;
  date: string;
  description: string;
  stack?: Stack[];
  isCurrent?: boolean;
}

interface Stack {
  element: ReactElement;
  name: string;
}

export const WorkItem = ({
  company,
  date,
  description,
  isCurrent,
  stack,
  title,
}: Job) => {
  return (
    <>
      <div className='flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-10'>
        {isCurrent ? (
          <div className='inline-grid absolute w-3 h-3 translate-y-2 rounded-full -translate-x-[1.70rem] bg-primary *:[grid-area:1/1]'>
            <div className='w-3 h-3 status status-primary animate-ping'></div>
            <div className='w-3 h-3 status status-primary'></div>
          </div>
        ) : (
          <div className='absolute w-3 h-3 translate-y-2 rounded-full -translate-x-[1.70rem] bg-primary'></div>
        )}

        <div className='flex flex-col w-full col-span-1 gap-1'>
          <h1 className='card-title'>{title}</h1>
          <h3 className='stat-title'>{company}</h3>
          <h5 className={`${isCurrent && "font-bold"} text-primary`}>{date}</h5>
        </div>

        <div className='flex flex-col items-start justify-start col-span-2 gap-2 text-justify'>
          <p>{description}</p>
          {stack && (
            <div className='flex flex-wrap gap-2'>
              {stack.map((tech: Stack) => (
                <div className='border badge badge-primary badge-lg badge-soft border-primary'>
                  {tech.element} {tech.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
