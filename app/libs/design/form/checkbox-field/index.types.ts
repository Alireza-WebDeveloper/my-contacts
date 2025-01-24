import { ChangeEvent } from 'react';

export interface CheckboxFieldProps {
  label: string;
  name: string;
  value: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
