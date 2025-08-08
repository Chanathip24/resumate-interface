import { Button } from '@/components/common'
import Glass from '@/components/pages/Home/Hero/Glass'
import { Section } from '@/components/pages/Home/Section'

const Hero = () => {
  return (
    <Section contentClassName="flex-col items-center gap-y-4">
      <div className="grid-background" />
      <div className="flex flex-col items-center justify-center gap-y-4">
        <h1 className="gradient-title w-4/5 text-center">Stand Out with a Smarter Resume - Powered by AI</h1>
        <p className="text-body-1 text-center">
          Get expert tips and personalize resume feedback to land your dream job.
        </p>
      </div>
      <Glass className="w-1/2" />
      <div className="flex items-center gap-x-4">
        <Button>Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </Section>
  )
}

export default Hero
