import axios from 'axios'
import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing"
import movieApi from "../../common/api/movieApi"
import { useDispatch } from 'react-redux'
import {  fetchAsyncMovies , fetchAsyncShows } from '../../redux/Movie/movieSlice'

const Home = () => {

   const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
  }, [])  


  return (
    <>
      {/* <div className='banner'>Banner</div> */}
      <MovieListing />
    </>
  )
}

export default Home