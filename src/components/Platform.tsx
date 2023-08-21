import React from 'react'

export default function Platform() {
  return (
    <div className='container px-6 py-10 mx-auto '>
        <div className="flex flex-col items-center max-w-md mx-auto">
            <h2 className='text-3xl font-semibold mb-6'>The best platform</h2>
            <span className='text-sm text-center font-semibold mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta hic ut voluptas provident earum reiciendis id? Dolor optio excepturi non unde, quisquam saepe delectus iure cupiditate ea perferendis. Architecto, voluptatum.</span>
        </div>
        <div className="cards flex flex-col gap-6">
            <div className="flex gap-6">
                <div className='w-1/3 p-4 rounded-lg bg-pink-200'>
                    <h3 className='mb-6 text-sm'>Adaption for any devices</h3>
                    <p className='text-xl font-bold'>View Products easily with your browser!</p>
                </div>
                <div className='w-2/3 p-4 rounded-lg bg-pink-200'>
                    <h3 className='mb-6 text-sm'>Stories</h3>
                    <p className='text-xl font-bold mb-10 w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos nam quos aut! Fugit commodi voluptates maiores recusandae corrupti. Quae.</p>
                    <span className='px-6 py-2 rounded-full inline-block border-2 border-black'><a href='/' rel=''>Read More</a></span>
                </div>
            </div>
            <div className="flex gap-6">
                <div className='w-2/3 p-4 rounded-lg bg-pink-200'>
                    <h3 className='mb-6 text-sm'>Stories</h3>
                    <p className='text-xl font-bold mb-10 w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos nam quos aut! Fugit commodi voluptates maiores recusandae corrupti. Quae.</p>
                    <span className='px-6 py-2 rounded-full inline-block border-2 border-black'><a href='/' rel=''>Read More</a></span>
                </div>
                <div className='w-1/3 p-4 rounded-lg bg-pink-200'>
                    <h3 className='mb-6 text-sm'>Adaption for any devices</h3>
                    <p className='text-xl font-bold'>View Products easily with your browser!</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}