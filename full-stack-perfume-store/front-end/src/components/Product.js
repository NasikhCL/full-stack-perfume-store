import React from 'react'

export default function () {
  return (
    <div className='w-72 h-auto pb-5 my-3 flex flex-col items-center border rounded-md '>
        <img className='w-full h-64 rounded-t-md object-cover' src='https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='product' />
        <div className='text-xl'>Perfume Name</div>
        <div className='flex items-center w-full mt-3 px-2 justify-between font-bold'>
            <span>Price: 1200.Rs</span>
            <span className='border py-2 px-5 hover:bg-gray-300 hover:text-gray-600 '>Add To Cart</span>
        </div>
    </div>
  )
}
