import { clx } from '@/utils/clx'
import { ButtonHTMLAttributes } from 'react'

export type ButtonColor = 'red' | 'yellow'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor
}

const buttonColorStyles = {
  red: 'hover:fill-red hover:bg-red hover:bg-opacity-50  hover:text-red',
  yellow:
    'hover:fill-yellow hover:bg-yellow hover:bg-opacity-50 hover:text-yellow',
}

export default function Button({
  color = 'red',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clx(
        'rounded-full flex items-center justify-center text-opacity-70 p-1',
        buttonColorStyles[color],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
