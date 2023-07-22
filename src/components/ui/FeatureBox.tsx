import React from 'react'

interface FeatureBoxProps {
   title: string,
   description: string,
   children: React.ReactNode
}

export default function FeatureBox({ title, description, children }: FeatureBoxProps) {
   return (
      <div className="feature-box flex">
         <div className="feature-box-icon">
            {children}
         </div>
         <div className="icon-box-texts">
            <h2 className='text-black font-bold'>{title}</h2>
            <p className='text-gray-400'>{description}</p>
         </div>
      </div>
   )
}
