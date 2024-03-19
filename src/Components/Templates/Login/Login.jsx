import { React, useReducer, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { HomePath, LoginEP } from '../../../constants.js';
import Buttons from '../../Atoms/Button/Buttons';
import InputBox from '../../Atoms/Input/InputBox';
import Label from '../../Atoms/Label/Label';
import { SetToken } from '../../Utils/Utils.jsx';

const initialValue = {
  email: '',
  password: '',
  error: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'error':
      return { ...state, error: action.payload };  
    default:
      return state;
  }
};


function Login() {
  const [state, dispatch] = useReducer(reducer, initialValue)
  const [loaded, setLoaded] = useState(false)

  const handleLogin = async (event) => {
    event.preventDefault();

    try {                                
      const token = await login(state.username, state.password);
      if (token) {
        SetToken('token', token);
        setLoaded(true);
      } else {
        dispatch({ type: 'error', payload: 'Invalid email or password' }); 
      }
    } catch (error) {
      dispatch({ type: 'error', payload: 'An error occurred while logging in' }); 
    }
  };
  
    const login = async (email, password) => {
      try {
        const response = await fetch(LoginEP , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          alert('Login failed');
        }
        else{
          const data = await response.json();
          const token = data.token;
          console.log('Token:', token);
          return token;
        } 
      } catch (error) {
        console.error('Error:', error.message);
        return null;
      }
    };  

  return (
      <div className='relative flex bg-cover bg-center justify-center items-center bg-no-repeat overflow-hidden h-screen bg-login-Cover'>
        <div className='flex flex-col pl-7 bg-[#1f1f1fcc] rounded-md w-[300px] h-[300px]'>
        <h2 className='text-4xl mb-5 text-white text-center'>LOGIN</h2>
        { loaded ? (
          <Navigate to={HomePath} />
        ) :
        (  <form onSubmit={handleLogin}> 
              <div className='mb-2 text-left'>
                <Label lableName={"Email"}/>
                <InputBox 
                  type="email"
                  id="email"
                  placeHolder="Enter your Email"
                  value={state.email}
                  onChnage={(e) => {dispatch({type: 'email', payload: e.target.value})}}
                  required={true}
                />
              </div>

              <div className='mb-2 text-left'>
                <Label lableName={"Password"}/>
                <InputBox 
                  type="password"
                  id="password"
                  placeHolder="Enter your Password"
                  value={state.password}
                  onChnage={(e) => {dispatch({type: 'password', payload: e.target.value})}}
                  required={true}
                />
              </div>

              <Buttons type={"submit"} disabled={state.email==="" || state.password===""} name={"Login"}/>
          </form>
        )}
        </div>
      </div>
    )
}

export default Login