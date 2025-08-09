import { Career, Hero } from '@/components/pages/Home'

const HomePage = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <Hero />
      <Career />
    </div>
  )
}

export default HomePage
