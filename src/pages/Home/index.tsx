import { Career, Hero, Question, Service } from '@/components/pages/Home'

const HomePage = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <Hero />
      <Service />
      <Question />
      <Career />
      <Service />
    </div>
  )
}

export default HomePage
