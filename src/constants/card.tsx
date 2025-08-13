import { BookA, Microscope, Sprout, Telescope } from 'lucide-react'

import type { ICardProp } from '@/types'

export const card: Array<ICardProp> = [
  {
    icon: <BookA />,
    title: 'Subject',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero numquam iste expedita voluptatibus quas animi voluptatem dolor beatae libero. Impedit tenetur labore accusantium quia voluptates, rerum odit eligendi sed distinctio!',
  },
  { icon: <Microscope />, title: 'Biology', desc: 'For biological student' },
  { icon: <Telescope />, title: 'Astronomy', desc: 'For astronomical student' },
  { icon: <Sprout />, title: 'Environment', desc: 'For environmental student' },
]
