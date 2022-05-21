import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Footer from '../footer/footer'
import path from '../apiPath/path'
const ProductId = ({send_lustmexico , send_amoamy , send_twofeetundr}) => {

    const [Lustmexico, setLustmexico] = useState([]);
    const [MexicoSize, setMexicoSize] = useState([]);
    const [MexicoSelectedSize, setMexicoSelectedSize] = useState();


    const [Amoamy, setAmoamy] = useState([]);
    const [AmoamySize, setAmoamySize] = useState([]);
    const [AmoamySelectedSize, setAmoamySelectedSize] = useState();

    const [Twofeet, setTwofeet] = useState([]);
    const [TwofeetSize, setTwofeetSize] = useState([]);
    const [TwofeetSelectedSize, setTwofeetSelectedSize] = useState()


    useEffect(() => {
        if(send_lustmexico.length !=0){
            setLustmexico(send_lustmexico[0]);
            const t = send_lustmexico[0].available_sizes;
            const s = JSON.parse(t);
            const r1 = JSON.parse(s);
            setMexicoSize(r1);
        }
        if(send_twofeetundr.length!=0){
            setTwofeet(send_twofeetundr[0]);
            const t = send_twofeetundr[0].available_sizes;
            const s = JSON.parse(t);
            const r2 = JSON.parse(s);
            setTwofeetSize(r2);
        }
        if(send_amoamy.length!=0){ 
            setAmoamy(send_amoamy[0]);
            const t = send_amoamy[0].available_sizes;
            const s = JSON.parse(t);
            const r3 = JSON.parse(s);
            setAmoamySize(r3);
        }
       
        
        
        
    }, [])


    const maxicoFunc = ()=>{
        return(
            <>
              
                <div className='row  p-4 text-white bg-black'>
                    <div className='row text-3xl' >
                        <p className='tracking-widest font-bold'>LUSTMEXICO</p>
                    </div>
                    <div className='row text-3xl py-2'>
                        <p>$ {send_lustmexico[0].price}</p>
                    </div>
                    <div className='row py-3 px-6'>
                        <select name = "mexi_size"  onChange={e => setMexicoSelectedSize(e.target.value)} className='w-48 h-10 text-2xl text-black'>
                            <option selected>Choose Size</option> 
                                {MexicoSize.map((items,key)=>{
                                    return(
                                        <>
                                            <option  value={items[1]}>{items[0]}</option>    
                                        </>
                                    )
                                })}
                               
                        </select>
                    </div>
                    <div className='row py-3 px-6'>
                        <button  className='w-44 h-10 text-center text-2xl  bg-white text-black' onClick={()=>{ if(MexicoSelectedSize == undefined){window.alert("Please select size")} else {window.location.href = "https://lustmexico.com/cart/" + MexicoSelectedSize + ":1"}}}>Add to cart</button>
                    </div>
                </div>
            </>
        )
    }
    const amoFunc = ()=>{
        return(
            <>
              
                <div className='row my-2  p-4 text-white bg-black'>
                    <div className='row text-3xl' >
                        <p className='tracking-widest font-bold'>AMOAMY</p>
                    </div>
                    <div className='row text-3xl py-2'>
                        <p>$ {send_amoamy[0].price}</p>
                    </div>
                    <div className='row py-3 px-6'>
                        <select name = "mexi_size"  onChange={e => setAmoamySelectedSize(e.target.value)} className='w-48 h-10 text-2xl text-black'>
                            <option selected>Choose Size</option> 
                                {AmoamySize.map((items,key)=>{
                                    return(
                                        <>
                                            <option  value={items[1]}>{items[0]}</option>    
                                        </>
                                    )
                                })}
                               
                        </select>
                    </div>
                    <div className='row py-3 px-6'>
                        <button  className='w-44 h-10 text-center text-2xl  bg-white text-black' onClick={()=>{ if(AmoamySelectedSize == undefined){window.alert("Please select size")} else {window.location.href = "https://lustmexico.com/cart/" + AmoamySelectedSize + ":1"}}}>Add to cart</button>
                    </div>
                </div>
            </>
        )
    }

    const twoFunc = ()=>{
        return(
            <>
              
                <div className='row my-2  p-4 text-white bg-black'>
                    <div className='row text-3xl' >
                        <p className='tracking-widest font-bold'>TWOFEETUNDR</p>
                    </div>
                    <div className='row text-3xl py-2'>
                        <p>$ {send_twofeetundr[0].price}</p>
                    </div>
                    <div className='row py-3 px-6'>
                        <select name = "mexi_size"  onChange={e => setTwofeetSelectedSize(e.target.value)} className='w-48 h-10 text-2xl text-black'>
                            <option selected>Choose Size</option> 
                                {TwofeetSize.map((items,key)=>{
                                    return(
                                        <>
                                            <option  value={items[1]}>{items[0]}</option>    
                                        </>
                                    )
                                })}
                               
                        </select>
                    </div>
                    <div className='row py-3 px-6'>
                        <button  className='w-44 h-10 text-center text-2xl  bg-white text-black' onClick={()=>{ if(TwofeetSelectedSize == undefined){window.alert("Please select size")} else {window.location.href = "https://lustmexico.com/cart/" + TwofeetSelectedSize + ":1"}}}>Add to cart</button>
                    </div>
                </div>
            </>
        )
    }
    
  return (
    <>
        <div className='row ' >
            <div className='col-md-2 w-1/2 card py-28'  >
            {
                send_lustmexico.length  ? <img className='card_image object-scale-down w-6/7' src={send_lustmexico[0].image1}></img> :
                send_amoamy.length ? <img className='card_image object-scale-down w-5/6' src={send_amoamy[0].image1}></img> : <img className='card_image object-scale-down w-5/6' src={Lustmexico.image1}></img>
            }
            </div>
            <div className='col-md-2 w-1/2' >
                <div className='row text-3xl'>
                {
                    send_lustmexico.length ? <h1 className='py-10 px-5'> {send_lustmexico[0].title} </h1> :
                    send_amoamy.length ? <h1 className='py-10 px-5'> {send_amoamy[0].title} </h1> :  <h1 className='py-10 px-5'> {Twofeet.title} </h1>
                }
                </div>
                <div className='row'>
                    {send_lustmexico.length? maxicoFunc() : <></> }
                    {send_amoamy.length? amoFunc() : <></>}
                    {send_twofeetundr.length? twoFunc() : <></>}
                </div>
            </div>
        </div>
        <hr />
      <footer >
        <Footer />
      </footer>
    </>
  )
}
export async function getServerSideProps(context) {
    const productId2 = context.params.productId;
   
  
    const res_amoamy = await axios.get(path+"amoamy/"+productId2);
    const send_amoamy = res_amoamy.data;

    const res_twofeetundr = await axios.get(path+"twofeetundr/"+productId2);
    const send_twofeetundr = res_twofeetundr.data;

    const res_lustmexico = await axios.get(path+"lustmexico/"+productId2);
    const send_lustmexico = res_lustmexico.data;
  

    return {
        props: {
           send_lustmexico , send_amoamy , send_twofeetundr
        }
    }

}

export default ProductId