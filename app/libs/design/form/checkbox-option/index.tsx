import React from 'react';
import { CheckboxOptionProps } from './index.types';
import { cn } from '@/app/libs/utils/cn/index.types';

const CheckboxOption: React.FC<CheckboxOptionProps> = ({
  label,
  value,
  checked,
  onChange,
  className,
}) => {
  return (
    <div className='flex items-center gap-1'>
      <input
        type='checkbox'
        value={value}
        onChange={onChange}
        checked={checked}
        className={cn('form-checkbox h-5 w-5 text-indigo-600', className)}
      />
      <span className='ml-2 text-sm'>{label}</span>
    </div>
  );
};

export default CheckboxOption;
