'use client';

import React from 'react'
import Link from "next/link";
import NextImage from "../NextImage";
import navlinks from "@/WebsiteContent/navLinks";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import TrigerMenu from '../customui/TrigerMenu';
import CustomButton from '../customui/CustomButton';


function Header() {
  return (
      <header className='bg-[#000] px-4 py-4 fixed top-0 left-0 z-[99999] w-full'>
        <div className='header-main'>
          <div className='flex justify-between'>
            <div className='logo'>
            <Link aria-label="logo" href={'/'} className='w-fit'>
            <NextImage
                  src={"/images/logo-white.png"}
                  alt="Logo"
                  width={219}
                  height={40}
                />
            </Link>
            </div>
            <div className='Menu flex flex-wrap gap-5 items-center justify-center'>
            <ul className="flex flex-wrap gap-5 items-center justify-center">
                {
                    navlinks.map((navlink)=>(
                        <li className="font-semibold text-lg cursor-pointer text-white" key={navlink.id}>
                            <Link href={navlink.link}>
                                {navlink.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            </div>
            <div className='Trigers flex gap-2'>
              <CustomButton className='mr-4 font-semibold text-lg text-black bg-white dark:bg-[#f6371c] dark:text-white' variant={'outline'}>Download CV</CustomButton>
              <TrigerMenu />
              <ThemeToggle  />
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header






// 'use client';
// import React from "react";
// import Link from "next/link";

// import { siteConfig } from "@/config/site";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/ui/navigation-menu";

// import { ThemeToggle } from "@/components/layout/theme-toggle";

// import NextImage from "../NextImage";

// const Header = () => {
//   return (
//     <header className="sticky top-0 z-10 w-full border-b bg-white dark:bg-background">
//       <nav className="flex h-16 items-center justify-between space-x-1 px-4">
//         <Link href="/">
//           <div className="logo flex items-center space-x-3">
//             <NextImage
//               src={siteConfig.logo}
//               alt="Logo"
//               width={40}
//               height={40}
//             />
//             <h4 className="site_name font-bold">Next.js</h4>
//           </div>
//         </Link>
//         {siteConfig.navMenu && (
//           <div className="menu">
//             <NavigationMenu>
//               <NavigationMenuList className="">
//                 {siteConfig.navMenu.map((navLink) => (
//                   <NavigationMenuItem
//                     key={navLink.id}
//                     className="h-full w-full"
//                   >
//                     {navLink.sublinks ? (
//                       <>
//                         <NavigationMenuTrigger key={navLink.id}>
//                           <NavigationMenuLink
//                             className={navigationMenuTriggerStyle()}
//                             href={navLink.src}
//                             key={navLink.id}
//                           >
//                             {navLink.name}
//                           </NavigationMenuLink>
//                         </NavigationMenuTrigger>
//                         <NavigationMenuContent className="flex flex-col items-start justify-center  border-b z-10">
//                           {navLink.sublinks.map((sublink) => (
//                             <NavigationMenuLink
//                             className={
//                               'w-full border-b  p-2 last:border-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
//                             }
//                               href={sublink.src}
//                               key={sublink.id}
//                             >
//                               {sublink.name}
//                             </NavigationMenuLink>
//                           ))}
//                         </NavigationMenuContent>
//                       </>
//                     ) : (
//                       <NavigationMenuLink
//                         className={navigationMenuTriggerStyle()}
//                         href={navLink.src}
//                       >
//                         {navLink.name}
//                       </NavigationMenuLink>
//                     )}
//                   </NavigationMenuItem>
//                 ))}
//               </NavigationMenuList>
//             </NavigationMenu>
//           </div>
//         )}

//         <ThemeToggle />
//       </nav>
//     </header>
//   );
// };

// export default Header;
