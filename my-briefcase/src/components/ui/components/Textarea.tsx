interface Props {
  text: string;
  placeholder: string;
  handleChange: React.ChangeEventHandler;
  value: string;
  name: string;
  className: string;
}
export const Textarea = ({
  placeholder,
  text,
  handleChange,
  name,
  value,
  className,
}: Props) => {
  return (
    <label className='h-[273px] form-control'>
      <div className='label'>
        <span className='label-text lato-bold'>{text}</span>
      </div>
      <textarea
        onChange={handleChange}
        name={name}
        value={value}
        className={`h-full textarea textarea-bordered ${className}`}
        placeholder={placeholder}
      ></textarea>
    </label>
  );
};
