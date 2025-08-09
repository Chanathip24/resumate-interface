import { Link } from 'react-router-dom'

import { Button } from '@/components/common'
import { footerContactInfo, footerLinks, footerSocialLinks } from '@/constants'
import type { FooterContactInfo, FooterNavLink, FooterSocialLink } from '@/types'

const Footer = () => {
  return (
    <footer className="bg-theme-night text-theme-gray-900 flex flex-col gap-y-12 px-40 py-12">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <h4 className="flex-shrink-0">ResuMATE</h4>
        {/* Center: Nav */}
        <div className="flex gap-x-7">
          {footerLinks.map((link: FooterNavLink) => (
            <Link key={link.label} to={link.to || '#'}>
              {link.label}
            </Link>
          ))}
        </div>
        {/* Right: Social */}
        <div className="border-theme-night-300 flex flex-shrink-0 items-center gap-5 rounded-lg border p-3 pl-6">
          <p>Stay Connected</p>
          <div className="text-theme-white flex gap-3">
            {footerSocialLinks.map((link: FooterSocialLink) => (
              <Button asChild variant="outline" className="border-theme-white text-theme-white">
                <Link key={link.label} to={link.to || '#'}>
                  {link.icon}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-theme-night-300" />

      <div className="flex justify-between">
        <div className="flex gap-7">
          {footerContactInfo.map((info: FooterContactInfo) => (
            <div key={info.label} className="flex items-center gap-x-2">
              {info.icon}
              <p>{info.label}</p>
            </div>
          ))}
        </div>
        <p className="text-theme-gray-600">© 2023 Araigodai. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
