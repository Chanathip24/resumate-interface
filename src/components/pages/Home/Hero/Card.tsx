import type { ICardProp } from '@/types'

const Card = ({ icon, title, desc }: ICardProp) => {
  return (
    <div className="border-theme-night-300 flex h-60 w-60 flex-shrink-0 flex-col items-center justify-center gap-1 overflow-auto rounded-2xl border p-8">
      {icon}
      <h4 className="flex-shrink-0 text-center">{title}</h4>
      <p className="h-30 no-scrollbar w-full text-wrap text-center">{desc}</p>
    </div>
  )
}

export default Card
