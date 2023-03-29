import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const {setIsLogin} = useContext(LoginContext);
   

    const submit = async (evt) => {
        evt.preventDefault();

        try {

            const res = await fetch('https://reqres.in/api/login', {
                method: "post",
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (res.status === 400) {
                throw new Error("Login yoki parol xato")
            }
            const data = await res.json();
            localStorage.setItem('token',data.token);
            setIsLogin(true)
            navigate('/')

        } catch (error) {
            alert(error)
        }




    }
    return (
        <div className='container'>
            <div className='w-[450px] ml-auto mr-auto mt-[60px]'>
                <img className='w-[50px] h-[41px]' src="./images/twitter-logo.svg" alt="" />
                <h1 className='font-black mt-[36px] text-[42px] leading-[49px]'>
                    Log in to Twitter
                </h1>
                <form onSubmit={submit}>
                    <input
                        value={email} onChange={(evt) => {
                            setEmail(evt.target.value)
                        }}
                        className=' login__input  text-[18px] leading-[24px] font-normal  w-[100%] mt-[36px] px-[23px] py-[20px]' type="text" placeholder='Phone number, email address' />
                    <input
                        value={password} onChange={(evt) => {
                            setPassword(evt.target.value)
                        }}

                        className=' login__input  text-[18px] leading-[24px] font-normal  w-[100%] mt-[25px] px-[23px] py-[20px]' type="text" placeholder='Password' />
                    <button className='mt-[25px] bg-[#1DA1F2;] w-[100%] py-[18px] text-[18px] leading-[24px] font-bold text-white rounded-[76px]'  >Log in</button>
                </form>
                <div className='mt-[40px] flex justify-between'>
                    <a className=' text-[18px] leading-[24px] font-normal text-[#1DA1F2]' href="">Forgot password?</a>
                    <a className=' text-[18px] leading-[24px] font-normal text-[#1DA1F2]' href="">Sign up to Twitter</a>
                </div>

            </div>
        </div>
    )
}

export default Login