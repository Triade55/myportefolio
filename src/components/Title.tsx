"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Title() {
    const title = usePathname().replace('-',' ')

  return (
    <div className=" border border-secondary mt-10 mx-20 uppercase text-4xl flex justify-center py-1">
      {title.replace("/","")}
    </div>
  )
}
