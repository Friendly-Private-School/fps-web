import React from 'react';
import { auth, provider } from "../../firebase/config";
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


const Login = ({setIsAuth}) => {

    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/")

        })
    }


    return (
        <div className='w-full h-96 bg-slate-500 py-10'>
            <div className='mx-auto flex flex-col items-center justify-center gap-5  bg-white md:w-[500px] sm:w-[400px] w-[315px] h-48 rounded-md shadow-md'>
                <p className='text-4xl text-[#072033]'>Login to Continue</p>
                <button
                className='border-2 border-gray-300 hover:border-gray-600 bg-white hover:bg-slate-200 transition ease-in-out duration-500 flex gap-5 items-center px-4 py-3 rounded-md text-white font-bold' 
                onClick={signInWithGoogle}>
                    <span className='text-black '>Sign in with Google</span>
                    <span><FcGoogle className=' transform scale-150'/></span>
                </button>
            </div>
            
        </div>
    )
}

export default Login