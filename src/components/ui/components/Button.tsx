import { cn } from "../../../lib/util";

interface Props {
  size: "w-48" | "w-64" | "w-32";
  text:
  | "PROJECTS"
  | "CASE WORK"
  | "SUBMIT"
  | "CONTACT"
  | "CASE STUDY"
  | "CONTACT ME"
  | "LIVE LINK"
  | "LinkedIn"
  | "Ver Demo"
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
      onClick={(e) => e.stopPropagation()}
      className={cn("btn btn-primary h-14 text-xl w-48 ", size === "w-48" && "w-48 text-base lato-bold", size === "w-32" && "w-32 text-base lato-bold h-12")}
    >
      {text}
    </a>
  );
};
