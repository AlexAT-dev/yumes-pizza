import type { News } from '@models/news'
import { twMerge } from 'tailwind-merge'

export type NewsCardProps = {
  news: News
  isActive?: boolean
}

const NewsCard = ({
  news: { image, title },
  isActive = true,
}: NewsCardProps) => (
  <div
    className={twMerge(
      'flex flex-1 flex-col rounded-[20px] bg-thin_gray overflow-hidden ease-out duration-500',
      !isActive && 'scale-[0.85] blur-sm',
    )}
  >
    <img className="object-cover w-full h-full" src={image} alt={title} />
  </div>
)

export default NewsCard
