export interface Props {
  text: string;
  placeholder: string;
}

export const Input = ({ text, placeholder }: Props) => {
  return (
    <label className='w-full form-control'>
      <div className='label'>
        <span className='label-text lato-bold'>{text}</span>
      </div>
      <input
        type='text'
        placeholder={placeholder}
        className='w-full input input-bordered'
      />
    </label>
  );
};
