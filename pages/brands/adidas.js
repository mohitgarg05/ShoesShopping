import React , {useState,useEffect} from 'react'
import axios from 'axios'
import path from '../../apiPath/path'
import Footer from '../footer/footer'
import Link from 'next/link'

const Adidas = ({res2}) => {
    const [Visible, setVisible] = useState(19);
    const [AdidasShoes, setAdidasShoes] = useState([]);

    const gettingData = async()=>{

        const res = await axios.get(path+"brand/adidas");
        const r = res.data.slice(10);
        setAdidasShoes(r);

    }

    useEffect(  () => {

        gettingData();
        
     }, [])

    const handleClick = ((e)=>{
        e.preventDefault();
        setVisible(prev => prev + 6);

    })
  return (
    <div>
        <header id="brand_first">
           <div className='bg_image3 row'  >
           <div className=' w-4/5 mt-96 mx-40'  >
                    <h1 className='text-4xl pt-20 text-center'>RUNNING-INSPIRED SHOES MADE FOR EVERYDAY ADVENTURES</h1>
                    <p className='text-5xl pt-4 text-center'>SPEED WITHOUT LIMITS</p>
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
                
                    {AdidasShoes.slice(1, Visible).map((items)=>{
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

export default Adidas;


export async function getStaticProps() {
    const res = await axios.get(path+"brand/adidas");
    const res2 = res.data.slice(0,12);
    
  
    return {
        props: {
          res2
        }
    }
  }