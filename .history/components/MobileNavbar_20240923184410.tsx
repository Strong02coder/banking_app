import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import React from 'react'

const MobileNavbar = ({ user }: MobileNavProps) => {
	return (
		<section className="w-full max-w-[264px]">
			<Sheet>
        <SheetTrigger>
					<Image
						src = "/icons/hamburger.svg"
						width={30}
						height={30}
						alt = "menu"
						className="cursor-pointer"
					/>
				</SheetTrigger>
  				<SheetContent side = "right">
    				
  				</SheetContent>
			</Sheet>
		</section>
	)
}

export default MobileNavbar