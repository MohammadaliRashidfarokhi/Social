import { profilePlaceholder } from '@/static/images.ts'
import { useUserData } from '@/data/useUserData.ts'
import { useParams } from 'react-router-dom'
import { useUserPosts } from '@/modules/home/data/useUserPosts.ts'
import { Post } from '@/modules/home/view/HomePage/Post.tsx'

export const ProfileFollow = () => {
  const { id } = useParams<{
    id: string
  }>()
  const { user } = useUserData(String(id))

  const { posts } = useUserPosts(String(id))

  return (
    <div className={'w-full flex flex-col'}>
      <div className="w-full min-h-32 bg-white flex items-end rounded-md" />
      <div className={'flex gap-3 px-5'}>
        <img
          className="w-20 h-20 rounded-full relative top-[-30px] bg-black"
          src={profilePlaceholder}
          alt="user profile picture"
        />
        <div className="text-sm text-gray-500 flex flex-col mt-1.5">
          <span className="text-xl font-semibold text-white">{`${user?.FIRST_NAME} ${user?.LAST_NAME}`}</span>
          <span className="text-sm text-gray-500">{user?.USERNAME}</span>
        </div>
      </div>

      <div className={'flex flex-col gap-3.5 font-semibold mt-5'}>
        <span className={'text-white'}>Posts</span>

        <div className={'flex flex-col gap-3.5'}>
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
