import React, { useState } from 'react'
import axios from 'axios'
import InputDefult from '../../components/Forms/InputDefult';
import DefultBtn from '../../components/Buttons/DefultBtn';
import { Link, useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage'

const SignIn = () => {
    const navigate = useNavigate()
    const [signindata, setsignindata] = useState({
        email: '',
        password: '',
    })
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsignindata((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headlesignin = async (e) => {
        e.preventDefault()
        
        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/signin', signindata)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Login Success")
                    navigate('/Dashboard/Home')                    
                    localStorage.setItem("login", res.data.Token)
                    secureLocalStorage.setItem("loginE", res.data.Result.email)
                    secureLocalStorage.setItem("loginU", res.data.Result.username)
                    secureLocalStorage.setItem("loginR", res.data.Result.role)
                    window.location.reload()
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }



  return (
    <div className='px-32 py-24'>
        <div className="xl:grid grid-cols-3 gap-3 mt-16">
            <div className="w-full"></div>
            <div className="w-full">
                <div className="bg-gray-100/20 p-4 shadow-md rounded-md">
                    <h1 className="text-[#FF5722] font-semibold uppercase text-center">SignIn</h1>

                    <div className="py-4">
                        <form onSubmit={headlesignin} method="post">
                            <div className="my-4">
                                <p className="mb-2 text-gray-500">Email Address: </p>
                                <InputDefult 
                                    type={'email'}
                                    value={signindata.email}
                                    name={'email'}
                                    required={true}
                                    placeholder={'Enter Email Address'}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="my-4">
                                <p className="mb-2 text-gray-500">Password: </p>
                                <InputDefult 
                                    type={'password'}
                                    value={signindata.password}
                                    name={'password'}
                                    required={true}
                                    placeholder={'Enter Password'}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="">
                                <DefultBtn 
                                    type={'submit'}
                                    btnvalue={'SignIn'}
                                />
                            </div>
                        </form>

                        <div className="flex justify-between">
                            <Link to={'/ForgetPassword'}>
                                <h1 className="text-[#FF5722] font-semibold pt-4">Forget Password</h1>
                            </Link>
                            <Link to={'/register'}>
                                <h1 className="text-[#FF5722] font-semibold pt-4">Create New Account</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full"></div>
        </div>
    </div>
  )
}

export default SignIn