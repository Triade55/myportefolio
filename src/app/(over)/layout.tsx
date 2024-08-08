import FloatLink from '@/components/float-link'
import NavLink from '@/components/NavLink'
import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'

export default function layout() {
  return (
    <div className='grid grid-cols-4 gap-3'>
      <div className="border border-white bg-primary ">
        <Image src="/huro.png" alt='photo du boss' width={30} height={10} className='w-full' />
            <NavLink/>
      </div>
      <div className="col-span-3 pt-4 px-4">
        <Title/>
      </div>
      
    </div>
  )
}
