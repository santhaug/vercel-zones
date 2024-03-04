import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <p
        className='text-2xl font-bold'
      >
        Web
      </p>
      <Image
        src='/app/web.svg'
        alt='web'
        width={500}
        height={500}
      />
    </div>
  )
}

export default page