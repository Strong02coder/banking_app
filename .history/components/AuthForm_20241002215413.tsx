import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const AuthForm = ({ type }: {type: string}) => {
	return (
		<section className='auth-form'>
			<heade r>
				<Link href="/" className="flex cursor-pointer items-center gap-1 px-4">
            <Image
              alt="An logo"
              src="/icons/logo.svg"
              width={34}
              height={34}
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
          </Link>
			</header>
		</section>
	)
}

export default AuthForm