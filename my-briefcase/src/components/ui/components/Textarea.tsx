interface Props {
  text: string;
  placeholder: string;
}
export const Textarea = ({ placeholder, text }: Props) => {
  return (
    <label className='h-[273px] form-control'>
      <div className='label'>
        <span className='label-text lato-bold'>{text}</span>
      </div>
      <textarea
        className='h-full textarea textarea-bordered'
        placeholder={placeholder}
      ></textarea>
    </label>
  );
};
