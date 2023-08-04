import React from 'react'
import '../assets/css/products.css'
import ProductItem from './ui/ProductItem'

export default function Products() {
   return (
      <div className='container px-6 pb-32 mx-auto'>
         <div className="products-headings text-center">
            <h1 className='text-3xl font-semibold'>Over 5000+ products</h1>
            <h2 className='text-3xl font-semibold'>available <span className='text-blue-600'>to check</span></h2>
         </div>
         <div className="product-card-container flex flex-col gap-4">
            <div className="product-row-1 flex gap-4">
               <ProductItem></ProductItem>
               <ProductItem></ProductItem>
            </div>
            <div className="product-row-2 flex gap-4">
               <ProductItem></ProductItem>
               <ProductItem></ProductItem>
            </div>
         </div>
      </div>
   )
}
