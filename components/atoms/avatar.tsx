import { clx } from '@/utils/clx'
import Image from 'next/image'

export default function Avatar({
  className,
  source = '/mock-images/peep-default.png',
}: {
  className?: string
  source?: string
}) {
  return (
    <div
      className={clx(
        'rounded-full aspect-square h-50 w-50 overflow-hidden border-2 border-blue bg-white',
        className
      )}
    >
      <Image
        src={source}
        alt='Avatar'
        width={60}
        height={80}
        className='min-w-full min-h-full'
      />
    </div>
  )
}
