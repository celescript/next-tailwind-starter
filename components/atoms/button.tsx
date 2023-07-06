import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export type ButtonColor = 'blue' | 'red' | 'yellow'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor
}

const buttonColorStyles = {
  blue: 'hover:fill-blue hover:bg-blue hover:bg-opacity-50 hover:text-blue',
  red: 'hover:fill-red hover:bg-red hover:bg-opacity-50  hover:text-red',
  yellow:
    'hover:fill-yellow hover:bg-yellow hover:bg-opacity-50 hover:text-yellow',
}

export default function Button({
  color = 'blue',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        clsx(
          'rounded-full flex items-center justify-center text-opacity-70 p-1',
          buttonColorStyles[color],
          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  )
}
