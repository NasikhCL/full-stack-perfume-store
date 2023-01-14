import React,{useState} from 'react'
import { useFormHook } from '../utils/customHooks'
import { onSignIn } from '../utils/apiUtils'
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const {formInputs,onInputChange} =useFormHook()
    const [formInputs, setFormInputs] = useState({
        email:'',
        password:''
    })
    const onInputChange=(event)=>{ 
        setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
    }
    const SignIn= async(e)=>{
        e.preventDefault();
        const apiResponse  = await onSignIn(formInputs); 

        console.log(apiResponse) 
        if(apiResponse.status === 200){
            localStorage.setItem("access-token", apiResponse.data.token)
            dispatch(authActions.login())
            navigate('/')
        }else{
      console.log(apiResponse.data.message);
    }

        setFormInputs({
            email:'',
            password:''
        })
    }

  return (
    <div>
        <form >
            <input type='text' name='email' value={formInputs.email}  onChange={(event)=>onInputChange(event)} placeholder='Email'/>
            <input type='text' name='password' value={formInputs.password} onChange={(event)=>onInputChange(event)} placeholder='Password'/>
            <button onClick={SignIn}>SignIn</button>
        </form>
    </div>
  )
}

export default SignIn