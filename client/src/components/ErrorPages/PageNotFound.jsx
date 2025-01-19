import React from 'react'
import PageNotFoundImg from '../../assets/PageNotFound.png'
import DefultBtn from '../Buttons/DefultBtn'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='my-32 md:px-32 px-4'>
        <center>
            <img src={PageNotFoundImg} alt="" className='h-64 w-auto'/>

            <h1 className="mt-4 text-2xl">Error: </h1>
            <p className="text-xl mt-4"><span className='text-[#FF5722]'>404</span> : Page Not Found</p>

            <div className="my-4">
              <Link to={'/'}>
                <DefultBtn 
                  type={'button'}
                  btnvalue={'Back to HomePage'}
                />
              </Link>
            </div>
        </center>
    </div>
  )
}

export default PageNotFound