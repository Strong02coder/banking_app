

import {
  Sheet,
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
        <SheetContent side="right">
          <Link href="/" className="mb-12 flex cursor-pointer items-center gap-2">
            <Image
              alt="An logo"
              src="/icons/logo.svg"
              width={34}
              height={34}
              className="size-[24px] max-xl:size-14"
            />
            <h1 className="sidebar-logo">Horizon</h1>
          </Link>
          {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
            return (
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
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNavbar