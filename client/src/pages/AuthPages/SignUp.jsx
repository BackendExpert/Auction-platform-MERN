import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import InputDefult from '../../components/Forms/InputDefult';
import DefultBtn from '../../components/Buttons/DefultBtn';

const SignUp = () => {
    const navigate = useNavigate()
    const [signupdata, setsignupdata] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsignupdata((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headlesignup = async (e) => {
        e.preventDefault()

        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/signup', signupdata)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Registation Success")
                    navigate('/signin')
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
    <div className='xl:px-32 px-4 py-24'>
        <div className="xl:grid grid-cols-3 gap-3 mt-16">
            <div className="w-full"></div>
            <div className="w-full">
                <div className="bg-gray-100/20 p-4 shadow-md rounded-md">
                    <h1 className="text-[#FF5722] font-semibold uppercase text-center">Create New Account</h1>

                    <div className="py-4">
                        <form onSubmit={headlesignup} method="post">
                            <div className="my-4">
                                <p className="mb-2 text-gray-500">Username: </p>
                                <InputDefult 
                                    type={'text'}
                                    value={signupdata.username}
                                    name={'username'}
                                    required={true}
                                    placeholder={'Enter Username'}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="my-4">
                                <p className="mb-2 text-gray-500">Email Address: </p>
                                <InputDefult 
                                    type={'email'}
                                    value={signupdata.email}
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
                                    value={signupdata.password}
                                    name={'password'}
                                    required={true}
                                    placeholder={'Enter Password'}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="">
                                <DefultBtn 
                                    type={'submit'}
                                    btnvalue={'Create Account'}
                                />
                            </div>                            
                        </form>
                        <div className="">
                            <Link to={'/signin'}>
                                <h1 className="text-[#FF5722] font-semibold pt-4">SignIn</h1>
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

export default SignUp