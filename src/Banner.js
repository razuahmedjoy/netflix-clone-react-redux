import React, { useEffect, useState } from 'react'
import axiosInstance from './axios';
import "./Banner.css";
import requests from './Requests';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const res = await axiosInstance(requests.fetchTopRated);
            console.log(Math.floor(Math.random() * res.data.results.length - 1))
            setMovie(res.data.results[
                Math.floor(Math.random() * res.data.results.length - 1)
            ])
          
        }

        fetchData();
    },[])

    console.log(movie);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

  return (
    <header className="banner" style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }}>

        <div className="banner_contents">
            <h1 className="banner_title">
                Movie Name
            </h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">
                {
                    truncate("Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur exercitationem quidem vel, debitis qui doloribus a vitae excepturi at soluta quo quaerat similique quis perspiciatis? Minus sunt iusto vitae", 150)
                }
                
            </h1>
        </div>
        <div className="banner--fadeBottom"></div>
    </header>
  )
}

export default Banner