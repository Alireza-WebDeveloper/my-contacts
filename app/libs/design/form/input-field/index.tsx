import { cn } from '@/app/libs/utils/cn/index.types';
import { InputFieldProps } from './index.types';

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  required = false,
  className,
}) => {
  return (
    <div className='mb-4'>
      <label
        className={cn('block text-sm font-medium text-gray-700', className)}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
      />
    </div>
  );
};

export default InputField;
