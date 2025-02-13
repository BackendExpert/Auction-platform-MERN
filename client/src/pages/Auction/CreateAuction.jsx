import React, { useState } from 'react'
import InputDefult from '../../components/Forms/InputDefult';
import InputTextArea from '../../components/Forms/InputTextArea';
import InputDate from '../../components/Forms/InputDate';
import InputImage from '../../components/Forms/InputImage';

const CreateAuction = () => {
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
        
        }
        catch(err){
            console.log(err)
        }
    }
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
                                value={AuctionData.image}
                                accept={'image/*'}
                            />
                        </div>
                    </div>

                </form>
            </div>

        </div>
    </div>

  )
}

export default CreateAuction