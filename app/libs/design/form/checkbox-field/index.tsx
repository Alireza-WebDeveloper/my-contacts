import { cn } from '@/app/libs/utils/cn/index.types';
import { CheckboxFieldProps } from './index.types';

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  name,
  value,
  onChange,
  className,
}) => {
  return (
    <div className='inline-flex items-center gap-2'>
      <input
        type='checkbox'
        name={name}
        checked={value}
        onChange={onChange}
        className={cn('form-checkbox h-5 w-5 text-indigo-600', className)}
      />
      <span className='ml-2 text-sm'>{label}</span>
    </div>
  );
};

export default CheckboxField;
