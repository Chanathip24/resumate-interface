import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/common'
import { Section } from '@/components/pages/Home/Section'
import { testimonials } from '@/constants'
import type { Testimonials } from '@/types'

import Card from './card'

const Testimonials = () => {
  return (
    <Section contentClassName="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <div className="p-4">
          <h2 className="p-2">What Our Client Say</h2>
          <p className="p-2">
            Read the success stories and heartfelt testimonials from our values cliens. Discover why thry chose Estatein
            for their real estate needs.
          </p>
        </div>
        <div className="p-4">
          <Button className="border-theme-white/10 bg-theme-night-300 border">View All Testimonials</Button>
        </div>
      </div>
      <div className="flex flex-row gap-x-4 overflow-x-scroll">
        {testimonials.map((card: Testimonials, index: number) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <hr className="border-theme-white/10 w-full border" />
      <div className="flex w-full items-center justify-between">
        <h6> 01 of 10 </h6>
        <div className="flex gap-x-2">
          <button className="border-theme-white/20 flex items-center rounded-full border p-2">
            <ArrowLeft />
          </button>
          <button className="border-theme-white/20 flex items-center rounded-full border p-2">
            <ArrowRight />
          </button>
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
