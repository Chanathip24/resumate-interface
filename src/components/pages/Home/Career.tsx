import { Button } from '@/components/common'
import { Section } from '@/components/pages/Home/Section'

const Career = () => {
  return (
    <Section className="bg-theme-night-100" contentClassName="flex justify-between">
      <div className="flex w-4/5 flex-col justify-start gap-y-4">
        <h2>Start Your Real Career Today</h2>
        <p className="text-theme-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolorem autem nesciunt, iste repellendus
          soluta ex labore consectetur reprehenderit delectus nostrum deleniti voluptates aspernatur corrupti beatae
          accusamus praesentium aliquam magnam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
          voluptate ipsa ut blanditiis sed inventore perspiciatis dolores, et dolorum, cumque veniam sequi. Animi, amet
          dolorum. Repellendus rem illo facere iusto.
        </p>
      </div>
      <Button variant="primary">Explore Properties</Button>
    </Section>
  )
}

export default Career
