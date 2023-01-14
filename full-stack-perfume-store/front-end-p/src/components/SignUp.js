import React,{useState} from 'react'
// import { useFormHook } from '../utils/customHooks'
import { onSignUp } from '../utils/apiUtils'
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const {formInputs,onInputChange} =useFormHook()
    const [formInputs, setFormInputs] = useState({
        firstname: '',
        lastname: '',
        email:'',
        phone: '',
        password:'',

    })
    const onInputChange=(event)=>{ 
        setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
    }
    const SignUp= async(e)=>{
        e.preventDefault();
        const apiResponse  = await onSignUp(formInputs); 

        console.log(apiResponse) 
        if(apiResponse.status === 200){
            // dispatch(authActions.login())
            navigate('/signin-signup/signin')
        }else{
      console.log(apiResponse.data.message);
    }

        setFormInputs({
            firstname: '',
            lastname: '',
            email:'',
            phone: '',
            password:'',
        })
    }

  return (
    <div>
        <form >
            <input type='text' name='firstname' value={formInputs.firstname}  onChange={(event)=>onInputChange(event)} placeholder='First Name'/>
            <input type='text' name='lastname' value={formInputs.lastname} onChange={(event)=>onInputChange(event)} placeholder='Last Name'/>
            <input type='text' name='email' value={formInputs.email}  onChange={(event)=>onInputChange(event)} placeholder='Email'/>
            <input type='tel' name='phone' value={formInputs.phon}  onChange={(event)=>onInputChange(event)} placeholder='Phone Number'/>
            <input type='text' name='password' value={formInputs.password} onChange={(event)=>onInputChange(event)} placeholder='Password'/>

            <button onClick={SignUp}>SignIn</button>
        </form>
    </div>
  )
}

export default SignUp