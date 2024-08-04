interface Props {
  text: string;
  url: string;
}

export const LinkItem = ({ text, url }: Props) => {
  return (
    <a
      href={`/#${url}`}
      className={`text-lg hover:text-primary active:bg-primary poppins-regular `}
    >
      {text}
    </a>
  );
};
