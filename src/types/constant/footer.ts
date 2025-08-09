import type { Maybe } from '@/types'
import type { ReactNode } from 'react'

type FooterBase = {
  label: string
  to: Maybe<string>
  icon: ReactNode
}

export type FooterNavLink = Omit<FooterBase, 'icon'>

export type FooterSocialLink = FooterBase

export type FooterContactInfo = Omit<FooterBase, 'to'>
