import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const ContentLayout = ({ children }: Props) => {
  return <div className='px-4.5  mx-auto 
  max-w-200 
  lg:max-w-240 lg:px-6 
  xl:max-w-300
  '>{children}</div>;
};
