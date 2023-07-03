import clsx from 'clsx'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export default function Icon({
  className,
  source,
}: {
  className?: string
  source: string
}) {
  return (
    // todo, change image
    <Image
      src={source}
      alt='Icon'
      width={50}
      height={50}
      className={twMerge(clsx('p-2 rounded-full aspect-square', className))}
    />
  )
}
