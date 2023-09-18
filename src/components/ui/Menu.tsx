import React from 'react'

export default function Menu() {
   const menuItems: string[] = ['Home', 'About', "Contact"]
   return (
      <ul className='flex gap-6'>
         {menuItems.map((item, index) =>
            <li key={index}>{item}</li>
         )}
      </ul>
   )
}
