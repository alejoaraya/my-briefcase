interface Props {
  size: "w-48" | "w-64";
  text: "PROJECTS" | "CASE WORK" | "SUBMIT" | "CONTACT" | "CASE STUDY";
  url: string;
}

export const Button = ({ size, text, url }: Props) => {
  return (
    <a
      href={url}
      className={`${
        size === "w-48" ? "w-48 text-base" : "text-xl w-64"
      }  btn btn-primary h-14`}
    >
      {text}
    </a>
  );
};
