import React , {useState , useEffect} from 'react'
import axios from 'axios';
import path from './apiPath/path'
import Link from 'next/link'
import Footer from './footer/footer'

const MainPage = (props) => {

  const [RandomList, setRandomList] = useState([])

  useEffect(() => {
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    setRandomList(shuffle(props.res2));
  }, [])
  
 
    
  return (
    <div>
    <header id="second">
    <div className='row justify-between my-20 px-9' >
      <h1 className='text-center text-5xl tracking-widest font-bold pb-5'>OUR BRANDS</h1>
      <div className='card col-md-auto' >
        <Link href='/brands/jorden'>
          <img className='card_image h-64 w-74' alt='not found'  src="https://logos-world.net/wp-content/uploads/2020/04/Air-Jordan-Symbol.png"/>
        </Link>
      </div>
      <div className='card col-md-auto' >
        <Link href='/brands/rebook'>
          <img className='card_image h-64 w-74' alt='not found'  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Reebok_2019_logo.svg"/>
        </Link>
      </div>
      <div className=' card col-md-auto' >
        <Link href='/brands/adidas'>
          <img className='card_image h-64 w-74' alt='not found'  src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"/>
        </Link>
      </div>
    </div>
  </header>
  <header id='third'>
    <div className='products'>
        <div className='row text-5xl text-center mt-12'>
            <h1 className='tracking-widest font-bold'>TOP PRODUCTS</h1>
        </div>
        <div className='row'>
          {RandomList.slice(0,8).map((items , key)=>{
            return(
                            <div className= 'card col-md-3' key={key} >
                                <div className='p-3 ' >
                                    <img alt='not found' className='card_image w-96 h-96' src={items.image1}  />
                                </div>
                                <div className='p-3 text-xl' >
                                    <h3>{items.title}</h3>
                                </div>
                                <div className='p-3 '>
                                    <Link href = {'/brands/' + items.product_id}>
                                        <button className='w-72 h-12 text-center text-2xl bg-black text-white'>View Product</button>
                                    </Link>
                                </div>
                            </div>

                        )
          })}
        </div>
       
    </div>
  </header>
  <hr className='mt-36'/>
  <footer >
    <Footer />
  </footer>
 </div>
  )
}

export default MainPage;

export async function getStaticProps() {
  const res = await axios.get(path+"amoamy");
  const res2 = res.data.slice(0,10);
  

  return {
      props: {
        res2
      }
  }
}
