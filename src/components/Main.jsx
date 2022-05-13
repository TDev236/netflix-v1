import React, { useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../Requests'

const Main = () => {
    const [movies, setMovies] = useState([])

    {/** With this function we set the random movie picture in the background*/}
    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular).then(res => setMovies(res.data.results))
    }, [])

    const ashortDescription = (str, num) => {
        if(str?.length > num){
            return str.slice(0, num) + '...';
        } else {
            return str
        }
    }
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img 
                className='w-full h-full object-cover'
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} 
            />
            <div className='absolute w-full top-[30%] p-4 md:p-8'>
                <h1 className='font-bold text-4xl'>{movie?.title}</h1>
                <div className='my-5'>
                    <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                    <button className='border text-white ml-4 border-gray-300 py-2 px-5'>Watch Later</button>
                </div>
                <p className='text-gray-400 font-bold '>Realesed:{movie?.realese_date}</p>
                <p className='py-4 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[30%] text-gray-400'>{ashortDescription(movie?.overview, 150)}</p>

            </div>
        </div>
    </div>
  )
}

export default Main