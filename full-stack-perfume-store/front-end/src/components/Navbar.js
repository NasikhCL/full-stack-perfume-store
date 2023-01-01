import React,{useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.css'
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
// import {login, logout} from '../store/authActions'
const Navbar = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    console.log(isLoggedIn);
    const navigate = useNavigate()
    const onSignOut = () => {
        localStorage.clear();

        console.log('hello')
    };
    const logOut=()=>{
        dispatch(authActions.logout())
        onSignOut();
    }
    
        
    const [isHambergerListVisible, setIsHambergerListVisible] = useState(false)
    // onClick={()=> ( dispatch(login()))} 
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
                {isLoggedIn ? <>
                        <NavLink to="/cart">{({ isActive }) => <li className={ isActive ? 'select' : 'not-select' }>Cart <i className="fa-solid fa-cart-shopping"></i></li>}</NavLink> 
                        <NavLink to="/signin-signup/signin" onClick={logOut}>{({ isActive }) => <li className={ isActive ? 'select' : 'not-select' }>LogOut <i className="fa-solid fa-arrow-right-from-bracket"></i></li>}</NavLink> 
                    </>
                    :<> <NavLink to="/signin-signup/signin">{({ isActive }) => <li className={ isActive ? 'select' : 'not-select' } onClick={()=>{ dispatch(authActions.login())}}>LogIn </li>}</NavLink> 
                    <NavLink to="/signin-signup/signup" onClick={()=>{ dispatch(authActions.logout())}}>{({ isActive }) => <li className={ isActive ? 'select' : 'not-select' }>SignUp</li>}</NavLink>
                    </>
            } 
                <img className="user-profile" src="https://images.pexels.com/photos/14391922/pexels-photo-14391922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-profile"/>
            </ul>
            
        </div>
        <div className='hamberger'>
            <i className="fa-solid fa-bars" onClick={()=>{setIsHambergerListVisible(true)}}></i>
           {
            isHambergerListVisible && <ul className='hamberger-list'  >
                    <li style={{display:"flex"}} >
                        <i className="fa-solid fa-xmark hamberger-close" onClick={()=>{setIsHambergerListVisible(false)}}></i>
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
}

export default Navbar;