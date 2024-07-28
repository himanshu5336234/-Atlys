
interface CustomTexFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  id?:string|number;
}

const CustomTexField: React.FC<CustomTexFieldProps> = ({
  label,
  placeholder,
  value,
  id,
  onChange,
  type = 'text',
}) => {
  return (
    <div className="w-full max-w-xs mb-4">
      {label && (
        <label
          htmlFor={label}
          className="block text-sm font-medium text-[#C5C7CA]" 
        >
          {label}
        </label>
      )}
      <input
        type={type}

        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 mt-2 text-[#7F8084] bg-secondary border rounded-md focus:outline-none focus:ring focus:ring-blue-500"      />
    </div>
  );
};

export default CustomTexField;
