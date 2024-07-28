import { useLocation } from "react-router";

interface Props {
  text: string;
  url: string;
}

export const LinkItem = ({ text, url }: Props) => {
  const location = useLocation();

  return (
    <a
      href={`/#${url}`}
      className={`text-lg ${"#" + url === location.hash ? "text-primary" : ""}`}
    >
      {text}
    </a>
  );
};
