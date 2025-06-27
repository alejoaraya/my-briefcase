import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const ContentLayout = ({ children }: Props) => {
  return (
    <div className='px-5 md:px-[139px] lg:px-[250px] xl:px-[400px]'>
      {children}
    </div>
  );
};
