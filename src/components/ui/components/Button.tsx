interface Props {
  size: "w-48" | "w-64";
  text:
    | "PROJECTS"
    | "CASE WORK"
    | "SUBMIT"
    | "CONTACT"
    | "CASE STUDY"
    | "CONTACT ME"
    | "LIVE LINK"
    | "LinkedIn"
    | "Code"
    | "Preview"
    | "Contactame";
  url?: string;
  blank?: boolean;
}

export const Button = ({ blank, size, text, url = "" }: Props) => {
  return (
    <a
      target={blank ? "_blank" : ""}
      href={url}
      className={`${
        size === "w-48" ? "w-48 text-base lato-bold" : "text-xl w-48 md:w-64"
      }  btn btn-primary h-14`}
    >
      {text}
    </a>
  );
};
