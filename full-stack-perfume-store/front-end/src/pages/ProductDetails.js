import React from 'react'

export default function ProductDetails() {
  return (
    <div className='flex flex-wrap h-full w-100'>
        <div className='w-6/12 h-96 p-5'>
            <img className='w-full h-full rounded-t-md object-cover' src='https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='product' />
        </div>
        <div className='w-6/12 p-12'>
            <div className='text-2xl'>Product Name</div>
            <div className='mt-4 '>Product Discription goessdc ds ds hereProduct Discription goes hereProduct Discription goes hereProduct Discription goes hereProduct Discription goes hereProduct Discription goes hereProduct Discription goes hereProduct Discription goes hereProduct Discription goes here</div> 
            <div className='mt-5 text-3xl'>Price: 1200.Rs</div>
            <div className='flex items-center w-3/4 mt-3 px-2 justify-between items-center font-bold'>
                <div className='w-14 flex justify-around items-center'>
                    <button className='text-xl'>-</button>
                    <span className='border py-1 px-3 rounded-xl'>1</span>
                    <button className='text-xl'>+</button>
                </div>
                <span className='border py-2 px-5 hover:bg-gray-300 hover:text-gray-600 '>Add To Cart</span>
            </div>
        </div>
    </div>
  )
}
