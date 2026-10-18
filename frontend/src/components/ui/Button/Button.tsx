import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary', type = 'button', className, ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(styles.button, styles[variant], className)} {...props} />
  );
}
