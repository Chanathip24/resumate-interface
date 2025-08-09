import { Link } from 'react-router-dom';
import { footerLinks, footerSocialLinks, footerContactInfo } from '@/constants';
import { Button } from '@/components/common';

const Footer = () => {
    return (
        <footer className="bg-theme-night text-theme-gray-900 flex flex-col gap-y-12 px-40 py-12">
            <div className="flex items-center justify-between">
                {/* Left: Logo */}
                <h4 className="flex-shrink-0">ResuMATE</h4>
                {/* Center: Nav */}
                <div className='flex gap-x-7'>
                    {footerLinks.map((link) => (
                        <Link key={link.label} to={link.to || '#'}>
                            {link.label}
                        </Link>
                    ))}
                </div>
                {/* Right: Social */}
                <div className='flex flex-shrink-0 gap-5 items-center border rounded-lg border-theme-night-300 p-3 pl-6'>
                    <p>Stay Connected</p>
                    <div className='flex gap-3 text-theme-white'>
                        {footerSocialLinks.map((link) => (
                            <Button asChild variant='outline' className='border-theme-white text-theme-white'>
                                <Link key={link.label} to={link.to || '#'}>
                                    {link.icon}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            <hr className="border-theme-night-300" />

            <div className='flex justify-between'>
                <div className='flex gap-7'>
                    {footerContactInfo.map((info) => (
                        <div key={info.label} className='flex items-center gap-x-2'>
                            {info.icon}
                            <p>{info.label}</p>
                        </div>
                    ))}
                </div>
                <p className='text-theme-gray-600'>© 2023 Araigodai. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
