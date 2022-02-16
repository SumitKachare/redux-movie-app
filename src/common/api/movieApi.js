// console.log(process.env.REACT_APP_OMDB_APIKEY);
import axios from "axios"

console.log("process.env.REACT_APP_OMDB_APIKEY" , process.env.REACT_APP_OMDB_APIKEY);

export default axios.create({
    baseURL : `https://www.omdbapi.com/`
})