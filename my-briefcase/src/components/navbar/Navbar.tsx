import { Logo } from "./components/Logo";
import { MenuDesktop } from "./components/MenuDesktop";
import { MenuResponsive } from "./components/MenuResponsive";

export const Navbar = () => {
  return (
    <header className='navbar px-5 bg-base-100 sticky top-0 left-0 z-10 shadow md:px-[139px]'>
      <div className='navbar-start '>
        <Logo />
      </div>
      <div className='navbar-end lg:hidden'>
        <MenuResponsive />
      </div>
      <div className='hidden navbar-end lg:flex'>
        <MenuDesktop />
      </div>
    </header>
  );
};
