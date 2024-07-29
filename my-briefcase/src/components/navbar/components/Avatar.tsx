interface Props {
  size?: string;
}

export const Avatar = ({ size = "w-12" }: Props) => {
  return (
    <div className='avatar'>
      <div className={`${size} rounded-full`}>
        <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
      </div>
    </div>
  );
};
