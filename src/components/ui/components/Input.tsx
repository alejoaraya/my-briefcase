export interface Props {
  text: string;
  placeholder: string;
  handleChange: React.ChangeEventHandler;
  value: string;
  name: string;
  type: string;
  className: string;
}

export const Input = ({
  text,
  placeholder = "Entry value",
  handleChange,
  value,
  name,
  type = "text",
  className,
}: Props) => {
  return (
    <label className='w-full form-control'>
      <div className='label'>
        <span className='label-text lato-bold'>{text}</span>
      </div>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        className={`w-full input input-bordered ${className}`}
        onChange={handleChange}
        required
      />
    </label>
  );
};
