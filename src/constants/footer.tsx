import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'

import type { FooterContactInfo, FooterNavLink, FooterSocialLink } from '@/types'

import { ROUTES } from './routes'

export const footerLinks: Array<FooterNavLink> = [
  { label: 'Home', to: ROUTES.home.path },
  { label: 'Services', to: null },
  { label: 'Work', to: null },
  { label: 'Process', to: null },
  { label: 'About', to: null },
  { label: 'Careers', to: null },
  { label: 'Contact', to: null },
]

export const footerSocialLinks: Array<FooterSocialLink> = [
  { label: 'Facebook', to: 'https://facebook.com', icon: <Facebook /> },
  { label: 'Twitter', to: 'https://twitter.com', icon: <Twitter /> },
  { label: 'LinkedIn', to: 'https://linkedin.com', icon: <Linkedin /> },
]

export const footerContactInfo: Array<FooterContactInfo> = [
  { icon: <Mail className="text-theme-white size-6" />, label: 'example@example.com' },
  { icon: <Phone className="text-theme-white size-6" />, label: '012-345-6789' },
  { icon: <MapPin className="text-theme-white size-6" />, label: 'Sala Ya, Phutthamonthon, Thailand' },
]
