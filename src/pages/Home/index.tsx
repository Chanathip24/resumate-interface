import { Career, Hero, Question, Testimonials } from '@/components/pages/Home'

const HomePage = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <Hero />
      <Testimonials />
      <Question />
      <Career />
    </div>
  )
}

export default HomePage
