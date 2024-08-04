import {
  GrFacebookOption,
  GrGithub,
  GrInstagram,
  GrLinkedinOption,
} from "react-icons/gr";
import { Link } from "react-router-dom";

export const SocialMediaForm = () => {
  return (
    <div className='flex items-center gap-4 md:gap-6'>
      <Link to={"https://www.linkedin.com/in/alejoaraya"} target='_blank'>
        <GrLinkedinOption size={30} className=' fill-neutral' />
      </Link>
      <Link to={"https://github.com/alejoaraya/"} target='_blank'>
        <GrGithub size={30} className=' fill-neutral' />
      </Link>
      <Link to={"https://www.instagram.com/alejoaraya.dev/"} target='_blank'>
        <GrInstagram size={25} className=' fill-neutral' />
      </Link>
      <Link to={"https://www.facebook.com/alejo.araya.104/"} target='_blank'>
        <GrFacebookOption size={30} className=' fill-neutral' />
      </Link>
    </div>
  );
};
