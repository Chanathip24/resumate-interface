import { Link } from 'react-router-dom';
import { footerLinks, footerSocialLinks, footerContactInfo } from '@/constants';
import { Button } from '@/components/common';

const Footer = () => {
    return (
        <footer>
            <div className="bg-theme-night text-theme-gray-900 flex flex-col gap-[50px] px-[162px] py-[50px] relative">
                <div className="flex items-center justify-between relative">
                    {/* Left: Logo */}
                    <h4 className="flex-shrink-0">ResuMATE</h4>
                    {/* Center: Nav */}
                    <div className='flex gap-[30px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                        {footerLinks.map((link) => (
                            <Link key={link.label} to={link.to || '#'}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    {/* Right: Social */}
                    <div className='flex flex-shrink-0 gap-[20px] items-center border rounded-[12px] border-[#262626] p-[14px] pl-[24px]'>
                        <p>Stay Connected</p>
                        <div className='flex gap-[14px] text-theme-white'>
                            {footerSocialLinks.map((link) => (
                                <Link key={link.label} to={link.to || '#'} className='p-[20px] border rounded-[8px]'>
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className="border-[#262626]" />

                <div className='flex justify-between'>
                    <div className='flex gap-[30px]'>
                        {footerContactInfo.map((info) => (
                            <Button key={info.label}>
                                {info.icon}
                                <p>{info.label}</p>
                            </Button>
                        ))}
                    </div>
                    <p className='text-theme-gray-600'>© 2023 Araigodai. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
