'use client'

import React from 'react'
import TrigerMenu from '../customui/TrigerMenu'
import Link from 'next/link'
import { Icons } from '@/lib/Icons'

function SidesocialMedia() {
  return (
    <div className='menuWrap flex flex-col items-center justify-between border-2 border-solid border-[#f6371c] rounded-full z-[999] w-[6.25rem] px-3 py-[50px] h-[60vh] relative left-[50px]'>
        <div className='socialMedia flex flex-col items-center justify-center'>
            <TrigerMenu />
            <div className="socials">
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
        <span className='bg-[#f6371c] w-[2px] h-16'></span>
        <div className='Text font-semibold text-lg text-white text-center rotate-90'>
            <h6>Follow&ensp;Me</h6>
        </div>
    </div>
  )
}

export default SidesocialMedia