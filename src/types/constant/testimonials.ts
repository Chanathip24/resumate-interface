import type { Maybe } from '@/types'

export type Testimonials = {
  rates: number
  topic: string
  comment: string
  profile_pic: Maybe<string>
  name: string
  location: string
}
