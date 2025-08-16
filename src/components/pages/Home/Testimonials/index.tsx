import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/common'
import { Section } from '@/components/pages/Home/Section'
import TCard from '@/components/pages/Home/Testimonials/TCard'
import { TESTIMONIALS_MOCK } from '@/constants'
import type { ITestimonials } from '@/types'

const Testimonials = () => {
  return (
    <Section className="flex" contentClassName="flex gap-y-14 flex-col item-center justify-center">
      <div className="flex items-center justify-between gap-x-5">
        <div className="flex flex-col gap-y-4">
          <h2>What Our Client Say</h2>
          <p className="w-4/5">
            Read the success stories and heartfelt testimonials from our values cliens. Discover why thry chose Estatein
            for their real estate needs.
          </p>
        </div>

        <div>
          <Button variant="secondary">View All Testimonials</Button>
        </div>
      </div>

      <div className="flex w-full gap-x-4 overflow-x-auto">
        {TESTIMONIALS_MOCK.map((card: ITestimonials, index: number) => (
          <TCard key={'card' + index} {...card} />
        ))}
      </div>
      <hr className="border-theme-white/10 w-full border" />
      <div className="flex w-full items-center justify-between">
        <h6> 01 of 10 </h6>
        <div className="flex gap-x-2">
          <Button variant="secondary" className="flex items-center rounded-full border">
            <ArrowLeft />
          </Button>
          <Button variant="secondary" className="flex items-center rounded-full border">
            <ArrowRight />
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
