import { Star, UserRound } from 'lucide-react'

import type { ITestimonials } from '@/types'
import { cn } from '@/utilities'

const TCard = ({ rates, topic, comment, name, location, className }: ITestimonials) => {
  return (
    <div
      className={cn(
        'h-70 w-100 border-theme-white/20 bg-theme-night-300 flex flex-col items-start justify-center gap-y-5 rounded-2xl border p-6',
        className,
      )}
    >
      <div className="flex flex-row gap-x-2 overflow-hidden">
        {[...Array(rates)].map((_, index) => (
          <div
            key={'card' + index}
            className="border-theme-white/10 flex items-center justify-center rounded-full border p-2"
          >
            <Star className="text-theme-secondary-400 fill-theme-secondary-400 size-4" />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-0.5">
        <h4>{topic}</h4>
        <p>{comment}</p>
      </div>
      <div className="flex flex-row gap-x-4">
        <div className="flex items-center justify-center">
          <UserRound className="size-8 rounded-full border p-1" />
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

export default TCard
