interface Props {
  size?: string;
}

export const Avatar = ({ size = "w-12" }: Props) => {
  return (
    <div className='avatar'>
      <div
        className={`${size} rounded-full ring-primary ring-offset-base-100 ring-2 ring-offset-2`}
      >
        <img src='/assets/jpeg/avatar.jpeg' />
      </div>
    </div>
  );
};
