import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler=(event)=>{
     event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now and get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis commodi deleniti dolor distinctio, doloremque, quod assumenda quas iure, odio deserunt! Odit omnis venia</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex sm:flex-row items-center gap-3 mx-auto my-6 border pl-3'>
            <input required className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email'/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox