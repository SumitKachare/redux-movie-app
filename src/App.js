import React from "react"
import Header from  "./components/Header/Header"
import Footer from  "./components/Footer/Footer"
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import './App.scss'
import { BrowserRouter , Route , Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />  
        <div className="container">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/detail/:imdbID" element={<MovieDetail />}/>
              <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
