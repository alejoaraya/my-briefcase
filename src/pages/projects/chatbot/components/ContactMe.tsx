import { Button, Subtitle } from "../../../../components/ui";

export const ContactMe = () => {
  return (
    <div className='flex flex-col w-full gap-7'>
      <Subtitle subtitle='Are you interested ?' />
      <Button size='w-48' text='CONTACT ME' url={"../#contact"} />
    </div>
  );
};
