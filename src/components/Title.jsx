import React from 'react'

const Title = ({text1,text2}) => {
  return (
          // className inline-flex->w-full flex justify-center
    <div className='inline-flex gap-2  items-center mb-3 '>
        <p className='text-gray-500 flex flex-col sm:flex-row text-2xl sm:text-3xl md:text-4xl'>{text1}<span className='text-gray-700 font-medium'>{text2}</span></p>
        <p className='w-4 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title