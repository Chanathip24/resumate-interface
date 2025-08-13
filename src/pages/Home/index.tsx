import { Career, Hero, Question } from '@/components/pages/Home'

const HomePage = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <Hero />
      <Question />
      <Career />
    </div>
  )
}

export default HomePage
