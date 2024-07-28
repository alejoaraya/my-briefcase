interface Props {
  text:
    | "React"
    | "NextJs"
    | "TypeScript"
    | "Redux"
    | "Tailwind"
    | "Github"
    | "Responsive Design"
    | "Resoult-Oriented"
    | "Comunication"
    | "Team work"
    | "Assertive"
    | "Efficient"
    | "Adaptability";
}
export const KnowledgeItem = ({ text }: Props) => {
  return (
    <div className='flex items-center justify-center h-12 p-6 rounded-lg min-w-24 bg-base-300'>
      <p className='text-base font-semibold opacity-70'>{text}</p>
    </div>
  );
};
