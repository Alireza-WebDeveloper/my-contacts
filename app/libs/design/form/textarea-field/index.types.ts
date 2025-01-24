import { ChangeEvent } from 'react';

export interface TextareaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  className?: string;
}
