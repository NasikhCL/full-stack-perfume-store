import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-100 h-14 bg-gray-200 text-gray-900 color flex items-center justify-between'>
        <div className='flex items-center border'>
            <img className="w-10 h-10 rounded-full mx-2"  src="https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo"/>             
            <h4 className="font-bold">Perfume Store</h4>
        </div>
        <div className='flex border'>
            <h1 className='mx-5'>Home</h1>
            <h1>Products</h1>
        </div>
        <div className='flex items-center border px-2'>
            <div className='mx-5'>Register</div>
            <div className='mx-5'>Login</div>
            <div className='relative mx-5'>
                <i class="fa-solid fa-cart-shopping text-xl"></i>
                <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2.5 -right-2">10</div>
            </div>
            <img className="w-10 h-10 rounded-full mx-2" src="https://images.pexels.com/photos/14391922/pexels-photo-14391922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-profile"/>
        </div>
    </div>
  )
}
