import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img 
        className=' w-full h-[400px] object-cover'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/fee3f628-0ad2-4580-bbb8-3c0abfb69cd7/CO-es-20220509-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
    
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
    <div className='absolute top-[20%] p-4 md:p-8'>
      <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
    </div>
    </div>
    <SavedShows/>
    </>
  )
}

export default Account