import { LinkItem } from "./components/LinkItem";
import { Logo } from "./components/Logo";

export const Navbar = () => {
  return (
    <header className='sticky top-0 left-0 z-10 shadow navbar bg-base-100 px-[139px]'>
      <Logo />
      <div className='flex-none'>
        <ul className='px-1 menu menu-horizontal '>
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
        </ul>
      </div>
    </header>
  );
};
