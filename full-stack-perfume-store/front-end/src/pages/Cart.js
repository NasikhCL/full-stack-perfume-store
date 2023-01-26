import React from 'react'

export default function Cart() {
  return (
    <div className=' w-full h-auto p-6'>
        <h2 className='mx-auto h-fit w-fit text-2xl md:text-3xl'>Your Bag</h2>
        <div className='flex text-sm md:text-lg justify-between items-center'>
            <div className=' md:px-3  py-1 border-2 cursor-pointer'>Continue Shopping</div>
            <div className=' md:px-3 py-1 border-2 bg-black text-white cursor-pointer'>Continue to Checkout</div>   
        </div>
        <div className='flex flex-wrap justify-between items-center text-sm mt-3'>
            <div className='flex justify-between items-center w-full md:w-7/12 mx-auto border py-2 pl-4 pr-2 lg:pr-20'>
                <div className='flex '>
                    <img className='w-20 h-20 md:w-40 md:h-40 mr-2 md:mr-7' src='https://images.pexels.com/photos/136651/pexels-photo-136651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='perfume' />
                    <div className='md:flex flex-col items-center justify-evenly'>
                        <div className=' lg:text-xl'>product name</div>
                        <div>id:21903213</div>
                        <div>other details</div>
                    </div>
                </div>
                <div className='h-full flex flex-col  md:text-2xl justify-center md:justify-evenly items-center'>
                    <div className='w-2/5 flex justify-around  items-center'>
                        <button className='mr-1'>-</button>
                        <span className='border px-1  md:px-3 rounded-xl'>1</span>
                        <button className='ml-1'>+</button>
                    </div>
                    <div>1200.Rs</div>
                </div>
            </div>
            <div className='border rounded-xl  mt-4 w-full  md:w-3/12 px-4 md:mx-5'>
                <div className='text-3xl '>Order Summary</div>
                <div className='mt-3 flex justify-between'>
                    <div>Sub Total:</div>
                    <div>1200.Rs</div>
                </div>
                <div className='mt-3 flex justify-between'>
                    <div>Estimated Shipping:</div>
                    <div>200.Rs</div>
                </div>
                <div className='mt-3 flex justify-between text-xl font-bold mt-4'>
                    <div>Total</div>
                    <div>1400.Rs</div>
                </div>
            </div>
        </div>

    </div>
  )
}
