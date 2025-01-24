import { cn } from '@/app/libs/utils/cn/index.types';
import { TextareaFieldProps } from './index.types';

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  name,
  value,
  onChange,
  rows = 4,
  className,
}) => {
  return (
    <div className='mb-4'>
      <label
        className={cn('block text-sm font-medium text-gray-700', className)}
      >
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
        rows={rows}
      />
    </div>
  );
};

export default TextareaField;
