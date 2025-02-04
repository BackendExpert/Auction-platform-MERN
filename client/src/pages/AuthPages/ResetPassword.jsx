import React, { useState } from 'react'
import axios from 'axios'
import InputDefult from '../../components/Forms/InputDefult';
import DefultBtn from '../../components/Buttons/DefultBtn';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate()
    const { token } = useParams()
    const [resetpassdata, setresetpassdata] = useState({
        newpass: '',
        confirmpass: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setresetpassdata((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const headlepassreset = async (e) => {
        e.preventDefault()
        // console.log(resetpassdata)
        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/resetpass/' + token, resetpassdata)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Password Reset Successful")
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
                    <h1 className="text-[#FF5722] font-semibold uppercase text-center">Reset Password</h1>

                    <div className="py-4">
                        <form onSubmit={headlepassreset} method="post">
                            <div className="my-4">
                                <p className="mb-2 text-gray-500">New Password: </p>
                                <InputDefult 
                                    type={'password'}
                                    value={resetpassdata.newpass}
                                    name={'newpass'}
                                    required={true}
                                    placeholder={'Enter New Password'}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="my-4">
                                <p className="mb-2 text-gray-500">Confirm Password: </p>
                                <InputDefult 
                                    type={'password'}
                                    value={resetpassdata.confirmpass}
                                    name={'confirmpass'}
                                    required={true}
                                    placeholder={'Confirm Password'}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="">
                                <DefultBtn 
                                    type={'submit'}
                                    btnvalue={'Passwrod Reset'}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-full"></div>
        </div>
    </div>
  )
}

export default ResetPassword