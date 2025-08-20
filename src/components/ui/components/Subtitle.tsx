interface Props {
  subtitle:
    | "Get to know me!"
    | "¡Conoceme!"
    | "Tecnologies"
    | "Soft Skills"
    | "Tools Used"
    | "Project Overview"
    | "Are you interested ?";
}

export const Subtitle = ({ subtitle }: Props) => {
  return <h1 className='text-3xl poppins-bold'>{subtitle}</h1>;
};
