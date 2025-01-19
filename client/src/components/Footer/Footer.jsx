import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#212121] mt-16 py-8 md:px-32 px-4 text-white'>
        <div className="md:grid grid-cols-4 gap-4">
            <div className="">
                <h1 className=" logo-title text-white text-3xl">GoBidly</h1>
                <p className="pt-4 font-semibold">Auction Platform</p>

                <p className="py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam pariatur dicta libero quam eaque minima cupiditate quos alias ratione consectetur, molestias vitae aspernatur! Alias similique dicta, blanditiis vitae fuga assumenda.
                </p>
            </div>

            <div className="md:pl-8">
                <h1 className="text-xl font-semibold">About Us</h1>
                <div className='my-4'>
                    <a href="">About Us</a>
                </div>
                <div className='my-4'>
                    <a href="">Careers</a>
                </div>
            </div>

            <div className="">
                <h1 className="text-xl font-semibold">Guides</h1>
                <div className='my-4'>
                    <a href="">How to Buy</a>
                </div>
                <div className='my-4'>
                    <a href="">How to Sell</a>
                </div>
                <div className='my-4'>
                    <a href="">Buying Guide</a>
                </div>
                <div className='my-4'>
                    <a href="">Price Guide</a>
                </div>
            </div>

            <div className="">
                <h1 className="text-xl font-semibold">Contact Us</h1>
                <p className="my-4">exmple@123.com</p>
                <p className="my-4">88, Cross Street, ABC</p>
                <p className="my-4">071 XXXXXXX</p>
            </div>
        </div>


        <div className="pt-12">
            &copy; All rights Reserved | Developed by <a href="">JehanKandy</a>
        </div>
    </div>
  )
}

export default Footer