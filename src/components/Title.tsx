"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Title() {
    const title = usePathname().replace('-',' ')

  return (
    <div className=" border border-secondary my-10 uppercase text-6xl flex justify-center py-1">
      {title.replace("/","")}
    </div>
  )
}
