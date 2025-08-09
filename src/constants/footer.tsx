import { ROUTES } from './routes'
import type { FooterNavLink, FooterSocialLink, FooterContactInfo } from '@/types'
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const footerLinks: FooterNavLink[] = [
  { label: 'Home', to: ROUTES.home.path },
  { label: 'Services', to: null },
  { label: 'Work', to: null },
  { label: 'Process', to: null },
  { label: 'About', to: null },
  { label: 'Careers', to: null },
  { label: 'Contact', to: null },
]

export const footerSocialLinks: FooterSocialLink[] = [
  { label: 'Facebook', to: 'https://facebook.com', icon: <Facebook /> },
  { label: 'Twitter', to: 'https://twitter.com', icon: <Twitter /> },
  { label: 'LinkedIn', to: 'https://linkedin.com', icon: <Linkedin /> },
]

export const footerContactInfo: FooterContactInfo[] = [
  { icon: <Mail className='size-6 text-theme-white' />, label: 'example@example.com' },
  { icon: <Phone className='size-6 text-theme-white' />, label: '012-345-6789' },
  { icon: <MapPin className='size-6 text-theme-white' />, label: 'Sala Ya, Phutthamonthon, Thailand' },
]