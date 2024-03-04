import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <p
                className='text-4xl font-bold text-red-500'
            >
                Landing Internal
            </p>
            <Image
                src='/landing.svg'
                alt='landing'
                width={500}
                height={500}
            />
        </div>
    )
}

export default page