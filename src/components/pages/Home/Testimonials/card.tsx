import { Star, UserRound } from 'lucide-react'

import type { ITestimonials } from '@/types'

const Card = ({ rates, topic, comment, name, location }: ITestimonials) => {
  return (
    <div className="h-70 w-100 border-theme-white/20 bg-theme-night-300 rounded-2xl border p-6">
      <div className="flex flex-row gap-x-4 p-4">
        {Array.from({ length: rates }).map((_, index) => (
          <div
            key={'card' + index}
            className="border-theme-white/20 flex items-center justify-center rounded-full border p-2"
          >
            <Star className="fill-theme-white size-4" />
          </div>
        ))}
      </div>
      <div className="p-4">
        <h4>{topic}</h4>
        <p>{comment}</p>
      </div>
      <div className="flex flex-row gap-x-4 p-4">
        <div className="rounded-full border p-3">
          <UserRound className="size-5" />
          {/* <img src="" alt="" /> */}
        </div>
        <div className="flex flex-col">
          <h5>{name}</h5>
          <p>{location}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
