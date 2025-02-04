import React, { useState } from 'react'
import axios from 'axios'
import InputDefult from '../../components/Forms/InputDefult';
import DefultBtn from '../../components/Buttons/DefultBtn';
import { Link, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const navigate = useNavigate()
    const [forgetpassdata, setforgetpassdata] = useState({
        email: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setforgetpassdata((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headlesforgetpass = async (e) => {
        e.preventDefault()
        // console.log(forgetpassdata)

        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/forgetpass', forgetpassdata)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("The Password Reset Link send to email Successful, please check emails")
                    navigate('/signin')
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
                    <h1 className="text-[#FF5722] font-semibold uppercase text-center">Forget Password</h1>

                    <div className="py-4">
                        <form onSubmit={headlesforgetpass} method="post">
                            <div className="my-4">
                                <p className="mb-2 text-gray-500">Email Address: </p>
                                <InputDefult 
                                    type={'email'}
                                    value={forgetpassdata.email}
                                    name={'email'}
                                    required={true}
                                    placeholder={'Enter Email Address'}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <p className="py-4">The Password Reset Link will send to this email Address</p>

                            <div className="">
                                <DefultBtn 
                                    type={'submit'}
                                    btnvalue={'Request Reset Link'}
                                />
                            </div>
                        </form>

                        <div className="">
                            <Link to={'/signin'}>
                                <h1 className="text-[#FF5722] font-semibold pt-4">Back</h1>
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

export default ForgetPassword