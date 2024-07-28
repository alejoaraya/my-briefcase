interface Props {
  subtitle: "Get to know me!" | "Tecnologies" | "Soft Skills";
}

export const Subtitle = ({ subtitle }: Props) => {
  return <h1 className='text-3xl poppins-bold'>{subtitle}</h1>;
};
