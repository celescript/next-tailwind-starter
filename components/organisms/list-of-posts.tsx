import Post from '@/components/molecules/post'
import { PostType } from '@/types'

export default function ListOfPosts({ posts }: { posts: PostType[] }) {
  return (
    <div className='flex flex-col gap-2 bg-black bg-opacity-95 p-2 rounded-sm'>
      <h2 className='text-white text-lg font-mono font-bold -mb-1'>Posts</h2>

      <hr className='border-white border-opacity-40' />

      {posts.map((post, index) => (
        <Post {...post} key={index} />
      ))}
    </div>
  )
}
