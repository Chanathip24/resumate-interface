import { Chrome, Facebook, Github } from 'lucide-react'

import type { AuthProvider } from '@/types/constant'

export const authProviders: Array<AuthProvider> = [
  {
    label: 'Google',
    to: 'https://www.google.com/',
    icon: <Chrome className="size-5" />,
  },
  {
    label: 'Facebook',
    to: 'https://www.facebook.com/',
    icon: <Facebook className="size-5" />,
  },
  {
    label: 'Github',
    to: 'https://www.github.com/',
    icon: <Github className="size-5" />,
  },
]
