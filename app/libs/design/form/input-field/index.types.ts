import { ChangeEvent } from 'react';

export interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  pattern?: string;
  className?: string;
}
