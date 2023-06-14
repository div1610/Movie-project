import React,{useState, useEffect} from 'react';
import '../assest/css/movie.css';
import {useNavigate} from 'react-router-dom';

function Movie()
{
    let [item, setItem] = useState(null)
    let navigate = useNavigate()


    useEffect(()=>{
        fetch('http://localhost:3001/movie',{
        }).then(res=>{
            res.json().then(record=>{
                setItem(record);

            })
        }).catch(err=>{console.log(err)})
    })

    return(
        <div>
            <h1>Select Movie</h1>
            <div className='container'>
                <div className='movie-box'>
                    <h2>Recommended Movies</h2>

                    <div className='d-flex'>
                        {item != null ? item.map((v,i)=>{
                            return(
                                <div className='w-20'>
                                    <div className='movie-types'>
                                        <div className='movie-banner'>
                                            <div className='movie-img'>
                                                <a onClick={(e)=>navigate('/movie_details/'+v.id)}><img src={v.image}></img></a>
                                                <div className='rating'>
                                                    <p>{v.rating} <spna>{v.vote}</spna></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='movie-details'>
                                            <h4>{v.title}</h4>
                                            <p>{v.genre}</p>
                                        </div>
                                    </div> 
                                </div>
                            )
                        }):"NOT FOUND"}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Movie

 {/* {item != null ? item.map((v,i)=>{
                return(
                    <div>
                        <p>{v.title}</p>
                    </div>
                )
            }):"NOT FOUND"} */}