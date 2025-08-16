import type { Maybe } from '@/types'

export type ITestimonials = {
  rates: number
  topic: string
  comment: string
  profile_pic: Maybe<string>
  name: string
  location: string
  className?: string
}
