import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import NextImage from '../NextImage'
import navlinks from '@/WebsiteContent/navLinks';


  


function TrigerMenu() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <Sheet open={mobileMenuOpen}>
    <SheetTrigger onClick={e => setMobileMenuOpen(!mobileMenuOpen)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-indent text-white"><polyline points="3 8 7 12 3 16"/><line x1="21" x2="11" y1="12" y2="12"/><line x1="21" x2="11" y1="6" y2="6"/><line x1="21" x2="11" y1="18" y2="18"/></svg></SheetTrigger>
    <SheetContent className='w-screen flex flex-1 items-center justify-center bg-[#0d1129]'>
        <SheetHeader>
            <div onClick={e => setMobileMenuOpen(!mobileMenuOpen)} className='closeicon cursor-pointer fixed right-0 top-14 text-white p-5'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg></div>
        <SheetTitle>
            <Link aria-label="Fastone" href="/">
             <NextImage
                  src={"/images/logo-white.png"}
                  alt="Logo"
                  width={219}
                  height={40}
                />
            </Link>
            </SheetTitle>
        <SheetDescription>
        <nav className='pt-10 text-center'>
        <ul className="flex flex-col justify-center items-center">
                {
                    navlinks.map((navlink)=>(
                        <li className="text-3xl font-semibold text-white text-center py-4" key={navlink.id}>
                            <Link className='flex gap-3 justify-center items-center' onClick={e => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Nav Links" href={navlink.link}>
                                {navlink.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
                </nav>
        </SheetDescription>
        </SheetHeader>
    </SheetContent>
    </Sheet>

  )
}

export default TrigerMenu