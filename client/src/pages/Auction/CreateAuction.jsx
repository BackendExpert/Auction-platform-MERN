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
  return (
    <div>CreateAuction</div>
  )
}

export default CreateAuction