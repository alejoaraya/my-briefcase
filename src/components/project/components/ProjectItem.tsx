import { Button } from "../../ui";

interface Props {
  url: string;
  image: string;
  title: string;
  buttonText: "CASE STUDY" | "CASE WORK";
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
    <div className='grid grid-cols-1 grid-rows-1 gap-16 border md:grid-cols-2 place-items-center'>
      <div className='w-full bg-base-200'>
        <img src={image} alt={url} />
      </div>
      <div className='flex flex-col gap-5 p-5 mr-3 md:p-0'>
        <h1 className='text-3xl poppins-bold'>{title}</h1>
        <div className='flex flex-col gap-8'>
          <p className='text-lg opacity-70'>{description}</p>
          <Button size='w-48' text={buttonText} url={url} />
        </div>
      </div>
    </div>
  );
};
