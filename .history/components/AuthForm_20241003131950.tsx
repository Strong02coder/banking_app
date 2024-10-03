'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

const AuthForm = ({ type }: { type: string }) => {
	const [user, setUser] = useState(null)

  return (
    <section className="auth-form">
      <header className='flex flex-col gap-5 md:gap-8'>
        <Link href="/" className="flex cursor-pointer items-center gap-1">
          <Image
            alt="An logo"
            src="/icons/logo.svg"
            width={34}
            height={34}
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
        </Link>
				<div className="flex flex-col gap-1 md:gap-8">
					<h1 className="text-24 lg:text-36 font-semibold text-gray-900">
						{user
						  ? 'Link Account'
							: type === 'sign-in'	
							  ? 'Sign In'
								: 'Sign Up'
						}
					</h1>
				</div>
      </header>
    </section>
  )
}

export default AuthForm