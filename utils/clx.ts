import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const clx = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
