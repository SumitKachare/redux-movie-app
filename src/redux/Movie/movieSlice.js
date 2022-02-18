import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import movieApi from "../../common/api/movieApi"

// fetch movies async thunk
export const fetchAsyncMovies = createAsyncThunk("movieList/fetchAsyncMovies" , async()=>{
    const res = await movieApi.get(`?apikey=${process.env.REACT_APP_OMDB_APIKEY}&s=Harry&type=movie`)
    return res.data
})

// fetch shows async thunk
export const fetchAsyncShows = createAsyncThunk("showList/fetchAsyncShows" , async()=>{
    const res = await movieApi.get(`?apikey=${process.env.REACT_APP_OMDB_APIKEY}&s=Friends&type=series`)
    return res.data
})

// fetch detail async thunk
export const fetchAsyncDetail = createAsyncThunk("detail/fetchAsyncDetail" , async(id)=>{
    console.log("id" , id);
    const res = await movieApi.get(`?apikey=${process.env.REACT_APP_OMDB_APIKEY}&i=${id}&plot=short`)
    return res.data
})


// initial state for movies
const initialState = {
    movieList : {},
    showList : {},
    detail :{}
}

// slice for movies reducer
const movieSlice = createSlice({
    name : "movies",
    initialState ,
    reducers:{
        addMovies : (state  , {payload}) => {
            state.movieList =  payload
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state , {payload})=>{
            console.log("Fulfilled Action");
            return {...state , movieList : payload}
        },
        [fetchAsyncMovies.rejected]: (state , action)=>{
            console.log("Rejected Action" , action);
        },
        [fetchAsyncShows.fulfilled]: (state , {payload}) => {
            return {...state , showList :  payload}
        },
        [fetchAsyncDetail.fulfilled]: (state , {payload}) => {
            return {...state , detail :  payload}
        }
    }
})

// export actions
export const { addMovies } = movieSlice.actions

// get all movies selector
export const getAllMovies = (state) => state.movies.movieList

// get all shows selector
export const getAllShows = (state) => state.movies.showList

// get detail shows selector
export const getDetail = (state) => state.movies.detail

// export reducer
export default movieSlice.reducer