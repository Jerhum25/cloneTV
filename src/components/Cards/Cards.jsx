import React, { useEffect, useState } from 'react';
import s from "./style.module.scss"
import Card from '../Card/Card';
import axios from 'axios';

function Cards() {
    const [data, setData] = useState([])
useEffect(() => {
    const fetchData= async ()=> {
        const result = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c0f21614128ac7dd2afc7f1883d35748')
        // console.log(result.data.results)
        setData(result.data.results)
    }
    fetchData()
}, [])
console.log(data);

    return (
        // <div className={s.container}>
        //     {data.map((index, item)=> (
        //     <Card key={item.vote_count} affiche={"https://image.tmdb.org/t/p/w500"+ item.poster_path} titre={item.title} description={item.overview} />
        //         ))}
        // </div>
        <div className="container">
            {data.map((index, item) =>(
                <h2 key={index}>{item.title}</h2>
            ))}
        </div>
    );
}

export default Cards;