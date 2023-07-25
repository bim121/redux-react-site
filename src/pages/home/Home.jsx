import React from 'react'
import { Slider } from '../../component/hero/Slider'
import { Order } from '../../component/hero/Order'
import { Category } from '../../component/category/Category'
import { Product } from '../../component/product/Product'


export const Home = () => {
  return (
    <>
       <Slider />
       <Order />
       <Category />
       <Product />
    </>
  )
}
