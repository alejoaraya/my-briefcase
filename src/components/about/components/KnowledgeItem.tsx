interface Props {
  text: string;
  // | "Adaptability"
  // | "Assertive"
  // | "Comunication"
  // | "CSS"
  // | "Efficient"
  // | "GIT"
  // | "Github"
  // | "HTML"
  // | "JavaScript"
  // | "NextJs"
  // | "React"
  // | "Redux"
  // | "Resoult-Oriented"
  // | "Responsive Design"
  // | "SEO"
  // | "Tailwind"
  // | "Team work"
  // | "Terminal"
  // | "DaisyUI"
  // | "TypeScript";
}
export const KnowledgeItem = ({ text }: Props) => {
  return (
    <div className='flex items-center justify-center h-12 p-6 rounded-lg min-w-24 bg-base-300'>
      <p className='text-base font-semibold opacity-70'>{text}</p>
    </div>
  );
};
