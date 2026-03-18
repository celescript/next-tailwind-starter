import Post from '@/components/molecules/post'
import { PostType } from '@/types'

export default function ListOfPosts({ posts }: { posts: PostType[] }) {
  return (
    <div className='flex flex-col gap-2 bg-black/95 p-2 rounded-sm'>
      <h2 className='text-white text-lg font-mono font-bold -mb-1'>Posts</h2>

      <hr className='border-white/40' />

      {posts.map((post) => (
        <Post {...post} key={post.text} />
      ))}
    </div>
  )
}
