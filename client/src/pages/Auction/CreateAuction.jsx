import React, { useEffect, useState } from 'react'
import InputDefult from '../../components/Forms/InputDefult';
import InputTextArea from '../../components/Forms/InputTextArea';
import InputDate from '../../components/Forms/InputDate';
import InputImage from '../../components/Forms/InputImage';
import DefultBtn from '../../components/Buttons/DefultBtn';
import secureLocalStorage from 'react-secure-storage'

const CreateAuction = () => {
    const EmailUser = secureLocalStorage.getItem('loginE')
    const RoleUser = secureLocalStorage.getItem('loginR')
    const UserName = secureLocalStorage.getItem('loginU')

    const token = localStorage.getItem('login')   

    const [AuctionData, SetAuctionData] = useState({
        image: '',
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        startingPrice: ''
    })

    const [imagePreview, setImagePreview] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        SetAuctionData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          SetAuctionData((prevData) => ({
            ...prevData,
            image: file
          }));
          setImagePreview(URL.createObjectURL(file));
        }
    };
    const headleSubmit = (e) => {
        e.preventDefault()

        try{
            const formData = new FormData();
            formData.append('image', AuctionData.image);
            formData.append('title', AuctionData.title);
            formData.append('description', AuctionData.description);
            formData.append('startDate', AuctionData.startDate);
            formData.append('endDate', AuctionData.endDate);
            formData.append('startingPrice', AuctionData.startingPrice);


        }
        catch(err){
            console.log(err)
        }
    }

    if(RoleUser === "seller" || RoleUser === "admin"){
        return (
            <div>
                <h1 className="font-semibold text-xl text-[#FF5722] uppercase">Create Auction</h1>
                <hr className="my-4" />
        
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <form onSubmit={headleSubmit} method="post">
                            <div className="">
                                <p className="text-[#FF5722]">Auction Title : </p>
        
                                <div className="p-4">
                                    <InputDefult 
                                        type={'text'}
                                        name={'title'}
                                        value={AuctionData.title}
                                        required={true}
                                        placeholder={"Auction Title"}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
        
                            <div className="my-4">
                                <p className="text-[#FF5722]">Auction Description : </p>
        
                                <div className="p-4">
                                    <InputTextArea 
                                        name={'description'}
                                        value={AuctionData.description}
                                        required={true}
                                        placeholder={'Auction Description'}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
        
                            <div className="my-4">
                                <p className="text-[#FF5722]">Auction Start Date : </p>
        
                                <div className="p-4">
                                    <InputDate 
                                        name={'startDate'}
                                        value={AuctionData.startDate}
                                        required={true}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
        
                            <div className="my-4">
                                <p className="text-[#FF5722]">Auction End Date : </p>
        
                                <div className="p-4">
                                    <InputDate 
                                        name={'startDate'}
                                        value={AuctionData.endDate}
                                        required={true}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
        
                            <div className="">
                                <p className="text-[#FF5722]">Auction Starting Price : </p>
        
                                <div className="p-4">
                                    <InputDefult 
                                        type={'number'}
                                        name={'startingPrice'}
                                        value={AuctionData.startingPrice}
                                        required={true}
                                        placeholder={"Auction Starting Price"}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
        
                            <div className="">
                                <p className="text-[#FF5722]">Auction Starting Price : </p>
        
                                <div className="p-4">
                                    <InputImage 
                                        name={'image'}
                                        accept={'image/*'}
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>
        
                            <div className="my-4">
                                <button type='submit' className='text-white font-semibold w-full py-4 rounded bg-[#FF5722]'>Create Auction</button>
                            </div>
        
                        </form>
                    </div>
        
                    <div className="">
                        {imagePreview && (
                            <div>
                                <h3>Image Preview:</h3>
                                <img src={imagePreview} alt="Preview" style={{ width: '200px' }} />
                            </div>
                        )}
                    </div>
        
                </div>
            </div>
        
          )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            window.location.reload()
        }, [])
    }
}

export default CreateAuction