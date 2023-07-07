import Image from 'next/image'

import Avatar from '@/components/atoms/avatar'
import Button from '@/components/atoms/button'
import { PostType } from '@/types'

export default function Post({
  avatar = '/mock-images/peep-default.png',
  text,
}: Partial<PostType>) {
  return (
    <div className='grid grid-cols-12 gap-4 px-4 py-4  bg-black rounded-md shadow-md'>
      <div className='col-span-2'>
        <Avatar source={avatar} />
      </div>
      <div className='col-span-10 flex flex-col justify-between'>
        <p className='text-white'>{text}</p>
        <div className='flex items-center space-x-2 mt-1 justify-end text-offwhite'>
          <Button color='red'>
            <Image
              src='/mock-images/heart.svg'
              alt='Heart'
              width={20}
              height={20}
            />
          </Button>

          <Button color='yellow'>
            <Image
              src='/mock-images/save.svg'
              alt='Heart'
              width={20}
              height={20}
              className='text-offwhite  '
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
