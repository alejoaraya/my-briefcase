import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const ContentLayout = ({ children }: Props) => {
  return <div className='px-[139px]'>{children}</div>;
};
