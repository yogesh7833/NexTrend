import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t '>
          <Title text1={'ABOUT'} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>We are a customer-focused eCommerce platform dedicated to offering a wide range of high-quality products. Our mission is to provide a seamless shopping experience, combining convenience, variety, and affordability. </p>
           <p>We promise a curated selection of top-tier products, ensuring quality and reliability with every purchase. Our platform is designed for ease and convenience, backed by outstanding customer service. </p>
           <b className='text-gray-800'>Our Mission</b>
           <p>
           Our mission is to deliver an exceptional online shopping experience by offering high-quality products, seamless convenience, and outstanding customer service, ensuring every interaction is positive and rewarding.</p>
          </div>
        </div>
        <div className='text-xl py-4 '>
           <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance</b>
            <p className='text-gray-700'>At our eCommerce platform, quality assurance is paramount. We meticulously vet every product, ensuring it meets our high standards for durability, safety, and performance.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-700'>We believe in the power of choice, and that's why our platform is designed to offer an extensive selection of products across various categories. </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-700'>Our eCommerce platform prides itself on exceptional customer service. Our dedicated support team is always available to assist you with any inquiries, ensuring prompt and helpful responses. </p>
          </div>
        </div>
        <NewsletterBox/>
    </div>
  )
}

export default About