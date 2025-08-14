import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/common'
import { Section } from '@/components/pages/Home/Section'
import TCard from '@/components/pages/Home/Testimonials/TCard'
import { TESTIMONIALS_MOCK } from '@/constants'
import type { ITestimonials } from '@/types'

const Testimonials = () => {
  return (
    <Section contentClassName="flex flex-col gap-y-14">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-4">
          <h2>What Our Client Say</h2>
          <p>
            Read the success stories and heartfelt testimonials from our values cliens. Discover why thry chose Estatein
            for their real estate needs.
          </p>
        </div>
        <div className="p-4">
          <Button variant="secondary">View All Testimonials</Button>
        </div>
      </div>
      <div className="flex flex-row gap-x-4 overflow-x-scroll">
        {TESTIMONIALS_MOCK.map((card: ITestimonials, index: number) => (
          <TCard key={'card' + index} {...card} />
        ))}
      </div>
      <hr className="border-theme-white/10 w-full border" />
      <div className="flex w-full items-center justify-between">
        <h6> 01 of 10 </h6>
        <div className="flex gap-x-2">
          <Button variant="secondary" className="flex items-center rounded-full border p-2">
            <ArrowLeft />
          </Button>
          <Button variant="secondary" className="flex items-center rounded-full border p-2">
            <ArrowRight />
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
