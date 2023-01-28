import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
// import { Link,  } from 'react-router-dom';
// import {db} from '../config/firebase'
// import userDatas from '../userDatas'
// import { 
//     collection,
//     addDoc
// } from 'firebase/firestore'

export const Navbar = () => {
    const navigate = useNavigate()
    // const addDatas = async()=>{

        // userDatas.forEach( async(user) => {
        
        //     try {
        //         const docRef = await addDoc(collection(db, "users"), {...user});
        //         console.log("Document written with ID: ", docRef.id);
        //     } catch (e) {
        //         console.error("Error adding document: ", e);
        //     }
    
          
        // })

    // }
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchQuery = (e)=>{
        const{value} = e.target
        setSearchQuery(value)
        // console.log(searchQuery)
    }
    console.log(searchQuery);

    const handleSearch = ()=>{
        console.log(searchQuery)
        navigate(`/searchResults/${searchQuery}`)
    }
    const[isHambListVisible,setIsHambListVisbile] =useState(false)

    const[currentCategory, setCurrentCategory] = useState('')
    const [open, setOpen] = useState(false);
   

    const onOpenModal = (cat) => {
        setCurrentCategory(cat)
        setIsHambListVisbile(false)
        setOpen(true);
    }

    
    const onCloseModal = () =>{
        setOpen(false);
        setCurrentCategory('')
    } 
  

    const handleHamb =()=>{
       setIsHambListVisbile(prevState=> !prevState)
    }
  return (
    <div className=' sticky top-0 bg-white text-black font-medium' style={{zIndex:'100'}}>

        <nav className=' w-100 h-14 mb-2 px-4 lg:shadow-xl border-b-2 border-gay-400 text-black flex items-center justify-between'>
            <div className='flex items-center '>
                <img className="w-14 h-10  mr-2 object-cover"  src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="logo"/>             
                <h4 className="font-bold">Lets Get Dressed</h4> 
            </div>
            <ul className='flex '>
                <li className='hidden lg:block mx-5 hover:text-cyan-700 hover:scale-105 cursor-pointer' onClick={()=> navigate('/')}><a href='#home'>Home</a></li>
                <li className='hidden lg:block mx-5 cursor-pointer hover:text-cyan-700 hover:scale-105 relative group ' onClick={handleHamb}> 
                   <a href='/#category'>Category</a>
                    <ul className='hidden z-90 group-hover:block absolute top-4 pt-5 w-[180px] left-0 group-hover:transition-all group-hover:duration-300 '>
                        <li className='bg-black text-white  hover:bg-gray-500 p-2' onClick={()=> onOpenModal('marrige-dress')}>Marrige Dress</li>
                        <li className='bg-black text-white  hover:bg-gray-500 p-2' onClick={()=> onOpenModal('anniversary-outfits')}>Anniversary Dress</li>
                        <li className='bg-black text-white  hover:bg-gray-500 p-2' onClick={()=> onOpenModal('birthday-dress')}>Birthday Dress</li>
                        <li className='bg-black text-white  hover:bg-gray-500 p-2' onClick={()=> onOpenModal('college-fest-dress')}>College Fest Dress</li>
                    </ul>
                </li>

                <li className='hidden lg:block mx-5 cursor-pointer hover:text-cyan-700 hover:scale-105'><a href='/#about-us'>About Us</a></li>
                <li className='hidden lg:block mx-5 cursor-pointer hover:text-cyan-700 hover:scale-105'><a href='/#contact-us'>Contact Us</a></li>
            </ul>
            
            
            
            <div className='hidden lg:visible lg:flex items-center relative  px-2'>
                <div className='mr-5 text-2xl ' onClick={()=> navigate('/favourites')} >
                    <i className="fa-regular cursor-pointer fa-heart"></i>
                </div>
                <input onKeyDown={(e) => e.key === 'Enter' && handleSearch()} placeholder='Search...' className='pl-2 rounded-xl border border-black outline-none w-72 px-2 py-1' value={searchQuery} onChange={handleSearchQuery}/>
                {/* <Link  className='absolute right-4 cursor-pointer'  to={`/searchResults/${searchQuery}`}> */}
                    <div className='absolute right-4 cursor-pointer' onClick={handleSearch} >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                {/* </Link> */} 
                {/* <div className='mx-5'>Register</div>
                <div className='mx-5'>Login</div>
                <div className='relative mx-5'>
                    <i class="fa-solid fa-cart-shopping text-xl"></i>
                    <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2.5 -right-2">10</div>
                </div>
                <img className="w-10 h-10 rounded-full mx-2" src="https://images.pexels.com/photos/14391922/pexels-photo-14391922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-profile"/> */}
            </div>
            <div onClick={handleHamb} className='lg:hidden flex items-center'>
                <i className="fa-solid fa-bars"></i>
            </div>
        </nav>
        
    
        <ul className={isHambListVisible ? 'text-white pb-3 bg-black lg:hidden' : 'text-white bg-black pb-3 hidden'} onClick={handleHamb}>
            <li className='block px-3 my-3 pt-3  hover:bg-gray-200 ' onClick={()=> navigate('/')}>Home</li>
            <li className='block px-3 my-3 hover:bg-gray-200 ' onClick={()=> navigate('/favourites')}>Favourites</li>
            {/* <li className='block px-3 my-3 hover:bg-gray-200 '>Category</li> */}
            <li className='block px-3 hover:bg-gray-200 relative group ' > 
                   <a href='/#category' >Category</a>
            </li>
            <li className='block px-3 my-3 hover:bg-gray-200 ' >
                <a href='/#about-us' >About Us</a>
            </li>
            <li className='block px-3 my-3 hover:bg-gray-200 ' >
                <a href='/#contact-us' >Contact Us</a>
            </li>
            <div className=' lg:hidden lg:flex w-fit items-center text-black relative mx-auto py-2 ' onClick={handleHamb}>
                    <input onKeyDown={(e) => e.key === 'Enter' && handleSearch()} placeholder='Search...' className='pl-2 rounded-xl border' value={searchQuery} onChange={handleSearchQuery} />
                    <div onClick={handleSearch} className='absolute right-4 top-2 text-black cursor-pointer'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    
            </div>
        </ul>
    </div>
  )
}




// import React from 'react'

// export const Navbar = () => {
//   return (
//     <div className='w-100 h-14 mb-4 bg-gray-200 text-gray-900 color flex items-center justify-between'>
//         <div className='flex items-center border'>
//             <img className="w-10 h-10 rounded-full mx-2"  src="https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo"/>             
//             <h4 className="font-bold">Perfume Store</h4>
//         </div>
//         <div className='flex border'>
//             <h1 className='mx-5'>Home</h1>
//             <h1>Products</h1>
//         </div>
//         <div className='flex items-center border px-2'>
//             <div className='mx-5'>Register</div>
//             <div className='mx-5'>Login</div>
//             <div className='relative mx-5'>
//                 <i class="fa-solid fa-cart-shopping text-xl"></i>
//                 <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2.5 -right-2">10</div>
//             </div>
//             <img className="w-10 h-10 rounded-full mx-2" src="https://images.pexels.com/photos/14391922/pexels-photo-14391922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-profile"/>
//         </div>
//     </div>
//   )
// }
