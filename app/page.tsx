import Button from '@/components/atoms/button'
import Icon from '@/components/atoms/icon'
import Text from '@/components/atoms/text'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-offwhite min-h-screen mx-auto p-[10%]'>
      <h1 className='text-3xl text-center font-regular mb-8'>
        <span className='text-4xl font-bold font-mono'>atomic design </span>
        <Image
          src='/mock-images/atomic-logo.svg'
          alt='Atomic Design'
          width={60}
          height={60}
          className='m-auto'
        />
        starter repository
      </h1>

      <h2 className='text-lg font-medium'> Tech Stack </h2>
      <hr />
      <ul className='py-4 flex items-center justify-evenly'>
        <li>
          <Image
            src='/mock-images/next.svg'
            alt='Next.js'
            width={65}
            height={65}
          />
        </li>
        <li>
          <Image
            src='/mock-images/typescript.svg'
            alt='Typescript'
            width={65}
            height={65}
          />
        </li>
        <li>
          <Image
            src='/mock-images/tailwind.svg'
            alt='Tailwind CSS'
            width={65}
            height={65}
          />
        </li>
      </ul>

      <h2 className='text-lg font-medium mt-2'> Atomic Design </h2>
      <hr />

      <p className='py-4'>
        This repo uses Atomic Design which is a methodology for creating design
        systems and building user interfaces (UIs) in a structured and scalable
        way.
      </p>

      <div>
        <p>
          Atomic design breaks down UI components into smaller, more manageable
          elements. I&apos;ll show you small examples for each of the five
          stages of atomic design.
        </p>
        <div className='mt-8 flex flex-col items-center'>
          <h3 className='text-center font-bold font-mono text-xl border-b border-dashed w-full'>
            atoms
          </h3>
          <div className='flex justify-center gap-2 flex-col py-2'>
            {/* Atom 1 */}
            <div className='p-2 rounded-lg bg-white    '>
              <p className='text-left text-black text-opacity-70 text-sm font-mono'>
                components/atoms/button.tsx
              </p>
              <span className='flex justify-center'>
                <Button color='red'>
                  <Image
                    src='/mock-images/heart.svg'
                    alt='Heart'
                    width={20}
                    height={20}
                  />
                </Button>
              </span>
            </div>

            {/* Atom 2 */}
            <div className='p-2 rounded-lg bg-white    '>
              <p className='text-left text-black text-opacity-70 text-sm font-mono'>
                components/atoms/text.tsx
              </p>
              <span className='flex justify-center'>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </span>
            </div>

            {/* Atom 3 */}
            <div className='p-2 rounded-lg bg-white    '>
              <p className='text-left text-black text-opacity-70 text-sm font-mono'>
                components/atoms/icon.tsx
              </p>
              <span className='flex justify-center'>
                <Icon source='/mock-images/cat1.jpg' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
