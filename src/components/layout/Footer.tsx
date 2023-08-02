import React from 'react';
import Link from 'next/link';
import NextImage from '../NextImage';
import { Icons } from '@/lib/Icons';

const Footer = () => {

  return (
    <footer className='Footer overflow-hidden'>

      {/* Main Footer */}
      <div className="footer_top bg-[#0d1129] py-5 xl:py-[60px] 2xl:py-[60px] px-4">
        <div className="grid grid-cols-1 xl:grid-cols-4 2xl:grid-cols-4 gap-3">
          {/* Footer Info */}
          <div className="info_footer">
            <Link aria-label="logo" href={'/'} className='w-fit'>
            <NextImage
                  src={"/images/logo-white.png"}
                  alt="Logo"
                  width={219}
                  height={40}
                />
            </Link>
            <p className="web_desc text-[14px] dark:text-white text-white my-5">Full-stack Web, Mobile Developer.</p>
          </div>
          {/* Quick Links */}
          <div className="quick_links">
            <h2 className="text-[20px] dark:text-white text-white mb-6">Quick Links</h2>
              <Link aria-label="Home" href={'/'} className='dark:text-white text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Home
                </Link>
              <Link aria-label="About Us" href={'/'} className='dark:text-white text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                About Us
                </Link>
              <Link aria-label="Packages" href={'/'} className='dark:text-white text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Packages
                </Link>
              <Link aria-label="Portfolio" href={'/'} className='dark:text-white text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Portfolio
                </Link>
              <Link aria-label="Reviews" href={'/'} className='dark:text-white text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Reviews
                </Link>
          </div>
          {/* Services */}
          <div className="services">
            <h2 className="text-[20px] dark:text-white text-white mb-6">Services</h2>
              <Link aria-label="Website Development" href={'/'} className='dark:text-white text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Website Development
                </Link>
              <Link aria-label="Logo Design" href={'/'} className='dark:text-white text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Logo Design
                </Link>
              <Link aria-label="Ecommerce Solutions" href={'/'} className='dark:text-white text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Ecommerce Solutions
                </Link>
              <Link aria-label="Animation" href={'/'} className='dark:text-white text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Animation
                </Link>
          </div>
          {/* Contact */}
          <div className="Contact_info">
            <h2 className="text-[20px] dark:text-white text-white mb-6">Get in Touch Now!</h2>
              <Link aria-label="Number" href={'tel:923323745184'} className='dark:text-white text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                +92 3323745184
                </Link>
              <Link aria-label="Email" href={'mailto:mohammadowaisfaiz@gmail.com'} className='dark:text-white text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                mohammadowaisfaiz@gmail.com
                </Link>
              <Link aria-label="Address" href={'#'} className='dark:text-white text-white relative tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue pl-5'>
                <Icons.play className='w-[14px] h-[14px] absolute top-1 left-0' />
                Karachi, Sindh, Pakistan.
                </Link>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="footer_bottom border-y bg-[#0d1129] py-3 px-4">
        <div className=" flex items-center justify-center gap-3 flex-col lg:flex-row xl:flex-row 2xl:flex-row lg:justify-between xl:justify-between 2xl:justify-between">
          <p className="dark:text-white text-white text-[14px]">
            Copyright © {new Date().getFullYear()} Mohammad Owais Official | All Rights Reserved.
          </p>
          <div className="socials flex items-center gap-2">
            <Link aria-label='Facebook'
              href={
                '/'
              }
              className="facebook_social flex items-center justify-center rounded-full  p-2"
            >
              <Icons.facebook className="text-white" />
            </Link>
            <Link aria-label='Instagram'
              href={'/'}
              className="facebook_social flex items-center justify-center rounded-full p-2"
            >
              <Icons.insta className="text-white" />
            </Link>
            <Link aria-label='Linkedin'
              href={'/'}
              className="facebook_social flex items-center justify-center rounded-full p-2"
            >
              <Icons.Linkedin className="text-white" />
            </Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
