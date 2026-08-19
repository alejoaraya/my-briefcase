
interface Job {
  title: string;
  company: string;
  date: string;
  description: string;
  stack?: Stack[];
  isCurrent?: boolean;
}

interface Stack {
  element: React.FC<React.SVGProps<SVGSVGElement>>;
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
      <div className='flex flex-col gap-5 lg:grid lg:grid-cols-[270px_2fr] lg:gap-10'>
        {isCurrent ? (
          <div className='inline-grid absolute w-3 h-3 translate-y-2 rounded-full -translate-x-[1.60rem] bg-primary *:[grid-area:1/1]'>
            <div className='w-3 h-3 status status-primary animate-ping'></div>
            <div className='w-3 h-3 status status-primary'></div>
          </div>
        ) : (
          <div className='absolute w-3 h-3 translate-y-2 rounded-full -translate-x-[1.60rem] bg-primary'></div>
        )}

        <div className='flex flex-col w-full  gap-1'>
          <h3 className='card-title text-xl '>{title}</h3>
          <p className='stat-title text-base '>{company}</p>
          <p className={`${isCurrent && "lato-bold"} text-primary text-base`}>{date}</p>
        </div>

        <div className=' flex lg:text-base flex-col items-start justify-start  gap-2 text-lg'>
          <p>{description}</p>
          {stack && (
            <div className='flex flex-wrap gap-2'>
              {stack.map((tech: Stack) => {
                const Icon = tech.element
                return ((
                  <div key={tech.name} className='border badge badge-primary badge-lg badge-soft border-primary'>
                    <Icon aria-hidden /> <span>{tech.name}</span>
                  </div>
                ))
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
