import React from 'react'

const Movie = ({movie}) => {
  return (
    <div 
        className='p-2
         relative
         cursor-pointer
         inline-block
         lg:w-[280px]
         md:w-[240px]
         sm:w-[200px]
         w-[160px]'
    >
        <img
            className='w-full h-auto block' 
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
            <p></p>
            <p></p>
        </div>
    </div>
  )
}

export default Movie