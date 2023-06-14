import React, { useState, useEffect} from 'react';
import '../assest/css/movie-detail.css';
import {i} from '@fortawesome/fontawesome-svg-core';
import {useParams, NavLink} from 'react-router-dom';



const Movie_detail = () => {

    let [item, setItem] = useState([]);
    let [active, setActive] = useState(true);
    let par = useParams();
    

    useEffect(()=>{
        if(active){

        
            function getRecord()
            {
                fetch('http://localhost:3001/movie/'+par.id,{
                }).then(res=>{
                    res.json().then(record=>{
                       
                        setItem(record);
                        // console.log(record.bg_image)
                        setActive(false)

                    })
                }).catch(err=>{console.log(err)})
            }
            getRecord();
        }
    },[])



    return (
        <div>
            <header >         
                <div className='container'>
                    <div className='d-flex justify-content-space-between align-item-center'>
                        <div className='logo'>
                            <a href="#"><img src={require('../assest/images/logo.webp') } alt="img"/></a>
                        </div>
                        <div className='signin'>
                            <select className='city'>
                                <option>Surat</option>
                                <option>Ahemdabad</option>
                                <option>Vadodara</option>
                                <option>Navsari</option>
                                <option>Anand</option>
                            </select>
                            <button className='btns'>Sign In</button>
                            <NavLink to='/'><button className='btns'>Back Home</button></NavLink>
                            <NavLink to="/Booking_page"><button className='btns'>Book Ticket</button></NavLink>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOVIE PART--------------- */}

            <section className='movie-content' style={{backgroundImage: `url(https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-36802/list/1170x658withlogo772fb1f5872c4b468536684b529779e4.jpg)`,height: "900px", backgroundRepeat: "no-repeat"}}>
                <div className='container'>               
                    <div className='movie-content-inner'>
                        <div className='movie-img'>
                            <img src={item.image} alt="img" id="img"/> 
                            <div className='schedule'>
                                <p>{item.schedule}</p>
                            </div>
                        </div>
                        <div className='movie-details'>
                            <h2>{item.title}</h2>
                            <h3>{item.rating} <span className='votes'>{item.vote}</span></h3>
                            <h5>{item.type}</h5>
                            <span className='language'>{item.language}</span>
                            <p>{item .release}</p>
                            <p>{item.genre}</p>
                            <p>{item.duration}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Movie_detail


