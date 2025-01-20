import React, { useState } from 'react'
import InputDefult from '../Forms/InputDefult';
import DefultBtn from '../Buttons/DefultBtn';
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";


const HomePageData = () => {
    // const [allactiveAuction, setallactiveAuction] = useState([])
    const [allactiveAuction, setallactiveAuction] = useState([
        {
            _id: 1,
            img: 'https://www.apple.com/v/iphone/home/ca/images/overview/select/iphone_16__c5bvots96jee_xlarge.png',
            name: 'Iphone x',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi natus veniam possimus optio molestiae aliquam rerum qui fugiat explicabo reprehenderit provident suscipit, omnis quibusdam quo hic, corrupti obcaecati. Ut, illo?',
            start_at: '$300',
            end_at: '$600',
            start_data: '02 FEB 2025',
            buyers: 2,
        },
        {
            _id: 2,
            img: 'https://wallpapercave.com/wp/wp10903806.jpg',
            name: 'Car',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi natus veniam possimus optio molestiae aliquam rerum qui fugiat explicabo reprehenderit provident suscipit, omnis quibusdam quo hic, corrupti obcaecati. Ut, illo?',
            start_at: '$3000',
            end_at: '$6000',
            start_data: '02 FEB 2025',
            buyers: 2,
        },
    ]);

    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = allactiveAuction.filter(
        (allactiveAuction) =>
            allactiveAuction.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  
    );

    const [visiblecontent, setvisiblecontent] = useState('')

    const clickvisible = ({value}) => {
        
    }



  return (
    <div>
        <div className="mb-4">
            <InputDefult 
                type={'text'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={'Search'}
            />
        </div>

        <div className="">
            <div className="flex justify-end">
                <div className="flex">
                    <div className="mr-2 cursor-pointer">
                        <FaListUl className='h-6 w-auto fill-gray-500' />
                    </div>
                    <div className="ml-2 cursor-pointer">
                        <IoGrid className='h-6 w-auto fill-gray-500' />
                    </div>
                </div>
            </div>
            <div className="md:grid grid-cols-4 gap-4">
                {
                    filteredData.map((data, index) => {
                        return (
                            <div className="bg-gray-100 p-4 rounded shadow-md border-b border-[#FF5722] md:my-0 my-4" key={index}>
                                <h1 className="text-lg font-semibold text-gray-400">{data.name}</h1>
                                <center>
                                    <img src={data.img} alt="" className='w-auto h-40'/>
                                </center>

                                <div className="my-4">
                                    <h1 className="text-gray-500 font-semibold pt-4">
                                        Bid Start At {data.start_at} - {data.end_at}
                                    </h1>

                                    <div className="py-4">
                                        {data.desc}
                                    </div>
                                </div>

                                <div className="">
                                    <h1 className="">Totel Buyers : <span className='font-semibold text-[#FF5722]'>{data.buyers}</span></h1>
                                </div>

                                <div className="pt-4">
                                    <DefultBtn 
                                        type={'button'}
                                        btnvalue={'Bid Now'}
                                    />
                                </div>

                            </div>
                        )
                    })
                }
                    {filteredData.length === 0 && (
                        <tr>
                            <td colSpan="5" className="text-center text-gray-500">
                                No Data found
                            </td>
                        </tr>
                    )}
            </div>
        </div>
        
    </div>
  )
}

export default HomePageData