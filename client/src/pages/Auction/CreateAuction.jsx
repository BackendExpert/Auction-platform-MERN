import React, { useState } from 'react'

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

        <div className="">
            <form onSubmit={headleSubmit} method="post"></form>
        </div>
    </div>

  )
}

export default CreateAuction