import React, { useState } from 'react'
import InputDefult from '../../components/Forms/InputDefult';
import InputTextArea from '../../components/Forms/InputTextArea';

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
                </form>
            </div>

        </div>
    </div>

  )
}

export default CreateAuction