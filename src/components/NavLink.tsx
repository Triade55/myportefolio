import React from 'react'
import { ActiveLink } from './Active-link';

export default function NavLink() {
    const H = [
        { name: "Home"},
        { name: "About-Me" },
        { name: "Resume",  },
        { name: "Portefolio",  },
        { name: "Testimonials",  },
        { name: "Contacts",  },
      ];
  return (
    <div className='flex flex-col space-y-8 justify-center items-center py-10 '>
      {
        H.map((item, index) => (
            <ActiveLink href={`/${item.name === "Home" ? "" : item.name}`} key={index} ActiveColor='text-tertiary font-bold' className='' >
                {item.name}
            </ActiveLink>
        ))
      }
    </div>
  )
}
