import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {

    const [isHambergerListVisible, setIsHambergerListVisible] = useState(false)

return (
    <nav className="navbar">
        <div className='left'>
            <img className="logo-img"  src="https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo"/>             
            <h4 className="app-title">Perfume Store</h4>
        </div>
        <div className='right'>
            <ul className='r1'>
                <NavLink to="/">{({ isActive }) => <li className={ isActive ? 'select' : 'not-select' }>Home</li>}</NavLink>
                <NavLink to="/">{({ isActive }) => <li className={ isActive ? 'select' : 'not-select' }>Products</li>}</NavLink>    
                {/* <NavLink to="/cart">{({ isActive }) => <li className={ isActive ? 'select' : 'not-select' }>Cart</li>}</NavLink>  */}
            </ul>
            <ul className='r2'>
                <NavLink to="/cart">{({ isActive }) => <li className={ isActive ? 'select' : 'not-select' }>Cart <i className="fa-solid fa-cart-shopping"></i></li>}</NavLink> 
                <NavLink to="/logout">{({ isActive }) => <li className={ isActive ? 'select' : 'not-select' }>LogOut <i className="fa-solid fa-arrow-right-from-bracket"></i></li>}</NavLink> 
                <img className="user-profile" src="https://images.pexels.com/photos/14391922/pexels-photo-14391922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-profile"/>
            </ul>
            
        </div>
        <div className='hamberger'>
            <i className="fa-solid fa-bars" onClick={()=>{setIsHambergerListVisible(true)}}></i>
           {
            isHambergerListVisible && <ul className='hamberger-list'  onClick={()=>{setIsHambergerListVisible(false)}}>
                    <li style={{display:"flex"}}>
                        <i className="fa-solid fa-xmark hamberger-close"></i>
                        <img className="user-profile" src="https://images.pexels.com/photos/14391922/pexels-photo-14391922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-profile"/>
                    </li>
                    <li>Home</li>
                    <li>LogIn</li>
                    <li>SignUp</li>
                
            </ul>
            }
        </div>
</nav>
);
};

export default Navbar;