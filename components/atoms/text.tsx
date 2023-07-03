import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export default function Text({ children, className, ...props }: TextProps) {
  return (
    <p
      className={twMerge(clsx('text-base text-black font-sans', className))}
      {...props}
    >
      {children}
    </p>
  )
}
