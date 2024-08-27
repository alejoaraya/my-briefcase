import {
  GrFacebookOption,
  GrGithub,
  GrInstagram,
  GrLinkedinOption,
  GrMenu,
} from "react-icons/gr";
import { LinkItem } from "./LinkItem";

export const MenuResponsive = () => {
  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
        {/* <SwapIcon /> */}
        <GrMenu size={28} />
      </div>
      <ul
        tabIndex={0}
        className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64  p-2 shadow items-end '
      >
        <li>
          <LinkItem text='HOME' url='home' />
        </li>
        <li>
          <LinkItem text='ABOUT' url='about' />
        </li>
        <li>
          <LinkItem text='PROJECTS' url='projects' />
        </li>
        <li>
          <LinkItem text='CONTACTS' url='contact' />
        </li>
        <li className='items-start'>
          <ul className='flex items-center gap-4 '>
            <li>
              <GrLinkedinOption size={40} className=' fill-neutral' />
            </li>
            <li>
              <GrGithub size={40} className=' fill-neutral' />
            </li>
            <li>
              <GrInstagram size={40} className=' fill-neutral' />
            </li>
            <li>
              <GrFacebookOption size={40} className=' fill-neutral' />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
