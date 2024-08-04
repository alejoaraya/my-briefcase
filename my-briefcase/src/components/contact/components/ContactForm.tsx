import { Button, Input, Textarea } from "../../ui";
import { SocialMediaForm } from "./SocialMediaForm";

export const ContactForm = () => {
  return (
    <div className='flex items-center justify-center mb-28 md:mb-36'>
      <form className='flex flex-col gap-5 justify-between p-10 bg-base-200 w-full md:w-[825px] h-full md:h-[513px] rounded-lg'>
        <div className='flex flex-col h-full gap-5 md:gap-0'>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
            <Input
              text='Full name / Company'
              placeholder='Enter your full name or company'
            />
            <Input text='Email' placeholder='Enter your email address' />
          </div>
          <Textarea placeholder='Enter the message' text='Message' />
        </div>
        <div className='flex items-center justify-between gap-5'>
          <SocialMediaForm />
          <Button size='w-48' text='SUBMIT' />
        </div>
      </form>
    </div>
  );
};
