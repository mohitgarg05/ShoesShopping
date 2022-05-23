import axios from 'axios';
import React,{useState,useEffect} from 'react'
import path from './apiPath/path'
import Link from 'next/link'
const SearchedProduct = (props) => {
  return (
    <div className='row'>
      {props.filter.map((items ,key)=>{
        return(
                <div className= 'card col-md-3' key={key} >
                    <div className='p-3 ' >
                        <img alt='not found' className='card_image w-96 h-96' src={items.image1}  />
                    </div>
                    <div className='p-3 text-xl'>
                        <h3>{items.title}</h3>
                    </div>
                    <div className='p-3 '>
                        <Link href = {'/brands/' + items.product_id}>
                            <button className='w-72 h-12 text-center text-2xl rounded-none bg-black text-white'>View Product</button>
                        </Link>
                    </div>
                </div>

            )
      })}
    </div>
  )
}

export default SearchedProduct
