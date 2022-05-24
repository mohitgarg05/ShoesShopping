import React , {useState,useEffect} from 'react'
import axios from 'axios'
import path from '../../apiPath/path'
import Link from 'next/link'
import Footer from '../footer/footer'

const Jorden = ({res2}) => {
    const [Visible, setVisible] = useState(18);
 

   

    const handleClick = ((e)=>{
        e.preventDefault();
        setVisible(prev => prev + 6);

    })
  return (
    <div>
        <header id="brand_first">
           <div className='bg_image1 row'  >
                <div className=' w-96 my-16 mx-20' s>
                    <h1 className='text-6xl'> AIR JORDEN</h1>
                    <p className='text-2xl mt-2'>Shop fancy</p>
                </div>
           </div>
       </header>
       <header id="brand_second">
           <div className='row'>
                <div className='row px-20'>
                    <h1 className='text-5xl mt-20 mb-4 tracking-wider pl-5 font-semibold'>Newest Styles of the Season</h1>
                </div>
           </div>
           <div className='horizontal_scroll'>

                    <div className='row justify-between  px-5' >

                        {res2.slice(0,3).map((items)=>{
                           return(
                               <>
                                <div className= 'card col-md-4'  >
                                    <div className='p-3 ' >
                                        <img alt='not found' className='card_image w-96 h-96' src={items.image1}  />
                                    </div>
                                    <div className='p-3 text-xl'  >
                                        <h3>{items.title}</h3>
                                    </div>
                                    <div className='p-3 '  >
                                    <Link href = {'/brands/' + items.product_id}>
                                        <button className='w-72 h-12 text-center text-2xl rounded-none   bg-black text-white'>View Product</button>
                                    </Link>
                                    </div>
                                </div>

                               </>
                           )
                        })}
                    </div>
                </div>
       </header>
       <header id="brand_third">
           <div className='row'>
                <div className='row px-20'>
                    <h1 className='text-5xl mt-20 mb-4 tracking-wider pl-5 font-semibold'>The Latest</h1>
                </div>
           </div>
           <div className='horizontal_scroll'>

                    <div className='row justify-between  px-5' >

                        {res2.slice(3,6).map((items)=>{
                           return(
                               <>
                                <div className= 'card col-md-4'  >
                                    <div className='p-3 ' >
                                        <img alt='not found' className='card_image w-96 h-96' src={items.image1}  />
                                    </div>
                                    <div className='p-3 text-xl'  >
                                        <h3>{items.title}</h3>
                                    </div>
                                    <div className='p-3 '  >
                                    <Link href = {'/brands/' + items.product_id}>
                                        <button className='w-72 h-12 text-center text-2xl rounded-none   bg-black text-white'>View Product</button>
                                    </Link>
                                    </div>
                                </div>

                               </>
                           )
                        })}
                    </div>
                </div>
       </header>
       <header id="brand_forth">
           <div className='row'>
                <div className='row px-20'>
                    <h1 className='text-5xl mt-20 mb-4 tracking-wider pl-5 font-semibold'>Trending</h1>
                </div>
           </div>
           <div className='horizontal_scroll'>

                    <div className='row justify-between  px-5' >

                        {res2.slice(6,9).map((items)=>{
                           return(
                               <>
                                <div className= 'card col-md-4'  >
                                    <div className='p-3 ' >
                                        <img alt='not found' className='card_image w-96 h-96' src={items.image1}  />
                                    </div>
                                    <div className='p-3 text-xl'  >
                                        <h3>{items.title}</h3>
                                    </div>
                                    <div className='p-3 '  >
                                    <Link href = {'/brands/' + items.product_id}>
                                        <button className='w-72 h-12 text-center text-2xl rounded-none   bg-black text-white'>View Product</button>
                                    </Link>
                                    </div>
                                </div>

                               </>
                           )
                        })}
                    </div>
                </div>
       </header>
       <header id = "brand_fifth">
            <div className='row'>
                <div className='row px-20'>
                    <h1 className='text-5xl mt-20 mb-4 tracking-wider pl-5 font-semibold'>ALL PRODUCTS</h1>
                </div>
                
                    {res2.slice(9, Visible).map((items)=>{
                           return(
                               <>
                               <div className='card col-md-4 justify-between px-5  py-8'>
                                    <div className='row '>
                                        <div >
                                            <div className='p-3 ' >
                                                <img alt='not found' className='card_image w-96 h-96' src={items.image1}  />
                                            </div>
                                            <div className='p-3 text-xl'  >
                                                <h3>{items.title}</h3>
                                            </div>
                                            <div className='p-3 '  >
                                                <Link href = {'/brands/' + items.product_id}>
                                                    <button className='w-72 h-12 text-center text-2xl rounded-none   bg-black text-white'>View Product</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                               </>
                           )
                        })}

                        <div className='m-auto w-1/4 p-10'   >
                            <button onClick={handleClick} className='w-72 h-12  text-center text-2xl rounded-none   bg-black text-white' >Load More...</button>
                        </div>
                      
            </div>
       </header>
       <hr />
      <footer >
        <Footer />
      </footer>
       
    </div>
  )
}

export default Jorden;


export async function getStaticProps() {
    const res = await axios.get(path+"brand/jordan");
    const res2 = res.data;
    
  
    return {
        props: {
          res2
        }
    }
  }