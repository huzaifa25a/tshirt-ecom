import React from 'react'
import gmail from '../assets/icons8-gmail.svg'
import linkedin from '../assets/icons8-linkedin.svg'
import instagram from '../assets/icons8-instagram.svg'

const Footer = () => {
  return (
    <div className='mt-10 flex flex-col items-center gap-5 pt-4 p-2 border-t-2 border-gray-300 bg-[#fff6ea]'>
        <div className='flex flex-col items-center'>
            <span>Reach out to us on:</span>
            <div className='flex flex-row gap-3'>
                <img src={gmail} className='h-10'/>
                <img src={linkedin} className='h-10'/>
                <img src={instagram} className='h-10'/>
            </div>
        </div>
        <span>Funky Store &copy; 2026</span>
    </div>
  )
}

export default Footer