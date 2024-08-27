interface Props {
  size?: string;
}

export const Avatar = ({ size = "w-12" }: Props) => {
  return (
    <div className={`avatar`}>
      <div className={`${size} rounded-full `}>
        <img src='/assets/jpeg/avatar.jpeg' />
      </div>
    </div>
  );
};
