'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from 'react'

const MobileNavbar = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="right" className="border-none bg-white">
          <Link href="/" className="flex cursor-pointer items-center gap-1 px-4">
            <Image
              alt="An logo"
              src="/icons/logo.svg"
              width={34}	
              height={34}
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                  return (
										<SheetClose asChild >

										</SheetClose>
                    <Link
                      key={item.route}
                      href={item.label}
                      className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
                    >
                      <div className="relative size-6">
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          fill
                          className={cn({ 'brightness-[4] invert-0': isActive })}
                        />
                      </div>
                      <p className={cn('sidebar-label', { '!text-white': isActive })}>
                        {item.label}
                      </p>
                    </Link>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNavbar