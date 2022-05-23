import React,{useState,useEffect}  from 'react'
import axios from 'axios';
import path from '../apiPath/path'

import MainPage from './MainPage'
import SearchedProduct from './SearchedProduct'
export default function Home({res2 , combinedData}) {

  const [q, setQ] = useState("");
    const [FilteredData, setFilteredData] = useState([])



const handleSearch = (e)=>{
  setQ(e.target.value)
   const filteredData = combinedData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(q.toLowerCase())
    })
    setFilteredData(filteredData)
    console.log(filteredData);
    
}

  return (
    <>
      <header id="first"  >
        <div className='bg_image row'  >
          <div className='search_bar w-96 my-52 mx-20' s>
              <input className='h-12 rounded-full w-96' value={q} onChange={(e)=>handleSearch(e)}  type="text"  />
          </div>
        </div>
      </header>
      {q? <SearchedProduct  filter = {FilteredData} /> : <MainPage res2 = {res2} /> }
  
      
     
      
    </>
  )
}

export async function getStaticProps() {
  const res = await axios.get(path+"amoamy");
  const res2 = res.data.slice(0,20);

  const data1 = await axios.get(path+"allproducts");
  const combinedData = data1.data;
  

  return {
      props: {
        res2 , combinedData
      }
  }
}
