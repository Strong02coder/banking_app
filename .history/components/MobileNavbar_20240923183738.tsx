import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import React from 'react'

const MobileNavbar = ({ user }: MobileNavProps) => {
	return (
		<section className="w-full max-w-[264px]">
			<Sheet>
        <SheetTrigger>
					<Image
						src = "/icons/hamburger.svg"
						width={30}
					/>
				</SheetTrigger>
  				<SheetContent>
    				<SheetHeader>
      				<SheetTitle>Are you absolutely sure?</SheetTitle>
      				<SheetDescription>
        				This action cannot be undone. This will permanently delete your account
        				and remove your data from our servers.
      				</SheetDescription>
    				</SheetHeader>
  				</SheetContent>
			</Sheet>
		</section>
	)
}

export default MobileNavbar