import React, {useState, useEffect} from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import {UserAuth} from '../context/AuthContext'
import { db } from '../firebase'
import {updateDoc, doc, onSnapshot} from 'firebase/firestore'
import {AiOutlineClose} from 'react-icons/ai'

const SavedShows = () => {
    const [movies, setMovies] = useState([])
    const {user} = UserAuth()

    {/**Get Data from Firestore :D */}
    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedMovies);
        })
    }, [user?.email])

    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    
    const slideRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedId) => {
        try{
            let result = movies.filter(movie => movie.id !== passedId)
            await updateDoc(movieRef, {
                savedMovies: result,
            })
        }catch(e){
            console.log(e)
        }
    }

  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>My Movies</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} size={40} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies?.map((movie, id) => (
                    <div 
                    key={id}
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
                        src={`https://image.tmdb.org/t/p/w500/${movie?.img}`} alt={movie?.title} />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{movie?.title}</p>
                        <p 
                            onClick={() => deleteShow(movie.id)}
                            className='absolute text-gray-300 top-4 right-4'><AiOutlineClose/></p>
                    </div>
                </div>
                ))}
            </div>
            <MdChevronRight onClick={slideRight} id='slider' size={40} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"/>
        </div>
    </div>
  )
}

export default SavedShows