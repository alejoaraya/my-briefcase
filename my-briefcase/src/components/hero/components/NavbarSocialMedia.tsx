import {
  GrFacebookOption,
  GrGithub,
  GrInstagram,
  GrLinkedinOption,
} from "react-icons/gr";
import { Link } from "react-router-dom";

export const NavbarSocialMedia = () => {
  // const navigate = useNavigate();

  // const handleClick = (url: string) => {
  //   navigate(url);
  // };

  return (
    <div className='hidden lg:flex p-1 gap-[25px] absolute bottom-44 left-2  shadow bg-base-100  rounded-lg flex-col  items-center justify-between'>
      <Link
        className=' animate__animated animate__fadeIn'
        to={"https://www.linkedin.com/in/alejoaraya"}
        target='_blank'
      >
        <GrLinkedinOption
          size={50}
          className='p-2 m-0 hover:bg-primary hover:bg-opacity-15 fill-neutral btn btn-ghost'
        />
      </Link>
      <Link
        className=' animate__animated animate__fadeIn'
        to={"https://github.com/alejoaraya/"}
        target='_blank'
      >
        <GrGithub
          size={50}
          className='p-0 px-1 m-0 hover:bg-primary hover:bg-opacity-15 fill-neutral btn btn-ghost'
        />
      </Link>
      <Link
        className=' animate__animated animate__fadeIn'
        to={"https://www.instagram.com/alejoaraya.dev/"}
        target='_blank'
      >
        <GrInstagram
          size={45}
          className='p-0 px-1 m-0 hover:bg-primary hover:bg-opacity-15 fill-neutral btn btn-ghost'
        />
      </Link>
      <Link
        className=' animate__animated animate__fadeIn'
        to={"https://www.facebook.com/alejo.araya.104/"}
        target='_blank'
      >
        <GrFacebookOption
          size={50}
          className='p-0 px-1 m-0 hover:bg-primary hover:bg-opacity-15 fill-neutral btn btn-ghost'
        />
      </Link>
    </div>
  );
};
