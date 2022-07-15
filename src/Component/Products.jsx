import React from 'react'
import ProductCard from './ProductCard';
import { useAppContext } from '../Context'


export default function Products() {
  
  const {products} = useAppContext();
  return (
    <div className='itemFlex'>
    {products.map((item)=> <ProductCard  key={item.id} {...item}/>)}
    
    
    </div>
  )
}
