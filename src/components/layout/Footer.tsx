import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer>
            <div className="bg-theme-night text-theme-gray-900 flex flex-col gap-[50px] px-[162px] py-[50px] relative">
                <div className="flex items-center justify-between relative">
                    {/* Left: Logo */}
                    <h4 className="flex-shrink-0">ResuMATE</h4>
                    {/* Center: Nav */}
                    <div className='flex gap-[30px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                        <Link to="">Home</Link>
                        <Link to="">Services</Link>
                        <Link to="">Work</Link>
                        <Link to="">Process</Link>
                        <Link to="">About</Link>
                        <Link to="">Careers</Link>
                        <Link to="">Contact</Link>
                    </div>
                    {/* Right: Social */}
                    <div className='flex flex-shrink-0 gap-[20px] items-center border rounded-[12px] border-[#262626] p-[14px] pl-[24px]'>
                        <p>Stay Connected</p>
                        <div className='flex gap-[14px] text-theme-white'>
                            <Link to="" className='p-[20px] border rounded-[8px]'>
                                <Facebook className='h-[24px] w-[24px]' />
                            </Link>
                            <Link to="" className='p-[20px] border rounded-[8px]'>
                                <Twitter className='h-[24px] w-[24px]' />
                            </Link>
                            <Link to="" className='p-[20px] border rounded-[8px]'>
                                <Linkedin className='h-[24px] w-[24px]' />
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className="border-[#262626]" />

                <div className='flex justify-between'>
                    <div className='flex gap-[30px]'>
                        <div className='flex gap-[10px] pb-[16px] border-b border-b-[#262626]'>
                            <Mail className='h-[24px] w-[24px] text-theme-white' />
                            <p>example@example.com</p>
                        </div>
                        <div className='flex gap-[10px] pb-[16px] border-b border-b-[#262626]'>
                            <Phone className='h-[24px] w-[24px] text-theme-white' />
                            <p>012-345-6789</p>
                        </div>
                        <div className='flex gap-[10px] pb-[16px] border-b border-b-[#262626]'>
                            <MapPin className='h-[24px] w-[24px] text-theme-white' />
                            <p>Sala Ya, Phutthamonthon, Thailand</p>
                        </div>
                    </div>
                    <p className='text-theme-gray-600'>© 2023 Araigodai. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
