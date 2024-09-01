import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo3} className='mb-5 w-32'/>
                <p className='w-full md:w-2/3 text-gray-600'>Discover a world of convenience with our eCommerce website, offering diverse products, seamless shopping, and exceptional service for a delightful experience.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-234-567-7890</li>
                    <li>contactus@foryou.gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Created with ❤️ by yogesh </p>
        </div>

    </div>
  )
}

export default Footer