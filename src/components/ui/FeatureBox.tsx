import React from 'react';

interface FeatureBoxProps {
   title: string,
   description: string,
   children: React.ReactNode
}

export default function FeatureBox({ title, description, children }: FeatureBoxProps) {

   return (
      <div className="feature-box flex flex-col justify-start gap-4">
         <div className="feature-box-icon">
            {children}
         </div>
         <h2 className='text-md text-black font-bold'>{title}</h2>
         <p className='text-gray-400'>{description}</p>

      </div>
   )
}
