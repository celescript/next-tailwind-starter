import Image from 'next/image'

import Avatar from '@/components/atoms/avatar'
import Button from '@/components/atoms/button'
import Post from '@/components/molecules/post'
import ListOfPosts from '@/components/organisms/list-of-posts'

import { PostType } from '@/types'
export const posts: PostType[] = [
  {
    avatar: '/mock-images/peep-1.png',
    text: 'Just had the most amazing pizza for dinner! 🍕😍 #Foodie',
  },
  {
    avatar: '/mock-images/peep-2.png',
    text: 'I love the new @nextjs version! 🎉 #NextJS',
  },
  {
    avatar: '/mock-images/peep-3.png',
    text: 'I just published my first blog post! 📝 #Dev',
  },
]

export default function Home() {
  return (
    <div className='min-h-screen mx-auto px-6 py-10 md:py-16 max-w-[800px] box-content'>
      <Image
        src='/mock-images/atomic-logo.svg'
        alt='Atomic Design'
        width={80}
        height={80}
        className='m-auto pb-4'
      />
      <h1 className='text-2xl text-center font-regular mb-8 md:text-4xl md:mb-12'>
        <span className='text-4xl font-bold font-mono md:text-6xl'>
          atomic design{' '}
        </span>
        <br />
        starter repository
      </h1>

      <h2> Tech Stack </h2>
      <hr />
      <ul className='py-4 flex items-center justify-evenly md:py-8'>
        <li>
          <Image
            src='/mock-images/next.svg'
            alt='Next.js'
            width={65}
            height={65}
            className='w-[80px] invert-1'
          />
        </li>
        <li>
          <Image
            src='/mock-images/typescript.svg'
            alt='Typescript'
            width={65}
            height={65}
            className='w-[80px]'
          />
        </li>
        <li>
          <Image
            src='/mock-images/tailwind.svg'
            alt='Tailwind CSS'
            width={65}
            height={65}
            className='w-[80px]'
          />
        </li>
      </ul>

      <h2 className='mt-2 md:mt-4'>Atomic Design</h2>
      <hr />

      <p className='py-4'>
        This repo uses Atomic Design, a methodology for creating design systems
        and building user interfaces (UIs) in a structured and scalable way.
        Atomic design breaks down UI components into smaller, more manageable
        elements such as atoms, molecules, and organisms. For this specific
        repository, I&#39;ll be utilizing the concepts of atoms, molecules, and
        organisms. If you&#39;d like to learn more about Atomic Design, you can
        visit the following link:{' '}
        <a
          className='text-blue hover:underline'
          target='_blank'
          href='https://bradfrost.com/blog/post/atomic-web-design/'
        >
          Atomic Design
        </a>
      </p>

      <div className='atomic-container'>
        <h3 className='atomic-title'>atoms</h3>
        <div className='atomic-list'>
          {/* Atom 1 */}
          <div className='atomic-mock'>
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
                  className='invert'
                />
              </Button>
            </span>
          </div>

          {/* Atom 2 */}
          <div className='atomic-mock'>
            <p className='text-left text-black text-opacity-70 text-sm font-mono'>
              components/atoms/icon.tsx
            </p>
            <span className='flex justify-center'>
              <Avatar />
            </span>
          </div>
        </div>
      </div>

      <div className='atomic-container '>
        <h3 className='atomic-title'>molecules</h3>
        <div className='atomic-list'>
          {/* Molecule 1 */}
          <div className='atomic-mock'>
            <p className='text-left text-black text-opacity-70 text-sm font-mono mb-2'>
              components/molecules/post.tsx
            </p>
            <span className='flex justify-center'>
              <Post text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor massa ut elit scelerisque tristique. #exampletweet' />
            </span>
          </div>
        </div>
      </div>

      <div className='atomic-container'>
        <h3 className='atomic-title'>organisms</h3>
        <div className='atomic-list'>
          {/* Organisms 1 */}
          <div className='atomic-mock'>
            <p className='text-left text-black text-opacity-70 text-sm font-mono mb-2'>
              components/organisms/list-of-posts.tsx
            </p>
            <span className='flex justify-center'>
              <ListOfPosts posts={posts} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
