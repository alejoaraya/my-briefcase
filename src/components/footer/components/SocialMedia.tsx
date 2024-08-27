import {
  GrFacebookOption,
  GrGithub,
  GrInstagram,
  GrLinkedinOption,
} from "react-icons/gr";
import { Link } from "react-router-dom";

export const SocialMedia = () => {
  return (
    <nav className='flex flex-col justify-center h-full f'>
      <h6 className='text-2xl text-base-100 footer-title lato-bold'>Social</h6>
      <div className='grid items-center grid-flow-col gap-4'>
        <Link to={"https://www.linkedin.com/in/alejoaraya"} target='_blank'>
          <GrLinkedinOption size={30} className=' fill-base-100' />
        </Link>
        <Link to={"https://github.com/alejoaraya/"} target='_blank'>
          <GrGithub size={30} className=' fill-base-100' />
        </Link>
        <Link to={"https://www.instagram.com/alejoaraya.dev/"} target='_blank'>
          <GrInstagram size={25} className=' fill-base-100' />
        </Link>
        <Link to={"https://www.facebook.com/alejo.araya.104/"} target='_blank'>
          <GrFacebookOption size={30} className=' fill-base-100' />
        </Link>
      </div>
    </nav>
  );
};
