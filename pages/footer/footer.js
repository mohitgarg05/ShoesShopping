import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter ,faFacebook ,faInstagram ,faSnapchat} from '@fortawesome/free-brands-svg-icons'

const footer = () => {
  return (
    <div className='py-5'>
        <div className='row justify-center text-6xl' >
           <div className='col-md-auto px-4' >
                <a href='https://www.facebook.com/profile.php?id=100011776080350'>
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
           </div>
           <div className='col-md-auto px-4'>
                <a href='http://www.twitter.com/argent_codes'>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
           </div>
           <div className='col-md-auto px-4'>
                <a href='http://www.instagram.com/argentum_1807'>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
   
           </div>
           <div className='col-md-auto px-4'>
                <a href='https://www.snapchat.com/add/argentum_1807?share_id=hK_Xs8iEVTw&locale=en-GB'>
                    <FontAwesomeIcon icon={faSnapchat} />
                </a>
           </div>

        </div>
        <div className='row mt-3 justify-center text-2xl cursor-pointer' >
            <div className='col-md-auto'>
                <Link href='/brands/jorden'>
                <p>JORDAN</p>
                </Link> 
            </div>
            <div className='col-md-auto'>
                <Link href='/brands/rebook'> 
                    <p>REEBOK</p>
                 </Link>
            </div>
            <div className='col-md-auto'>
                <Link href='/brands/adidas'>
                    <p>ADIDAS</p> 
                </Link>
            </div>
        </div>
        <div className='row text-center py-2'>
            <p className="copyright">Copyright © 2022 | Designed by <span className='font-bold '>Mohit Garg</span> , <span className='font-bold'>Rajat Soni</span> and <span className='font-bold'>Navansh Gupta</span> </p>
        </div>
    </div>
  )
}

export default footer