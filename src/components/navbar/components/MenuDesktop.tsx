import { LinkItem } from "./LinkItem";

export const MenuDesktop = () => {
  return (
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
  );
};
