import React, { useState, useEffect} from 'react'

const AddRecord = () => {

    let[add, setAdd]= useState(null)
    let[title,setTitle]=useState('');
    let[img,setImg]=useState('');
    let[type,setType]=useState([]);
    let[lahguage, setLahguage]= useState([]);
    let[genre, setGenre]=useState([]);
    let[duration, setDuration] = useState('');
    let[certificate, setCertificate] = useState('');
    let[release, setRelease]= useState('');
    let[rating, setRating] = useState('');
    let[schedule, setSchedule] = useState('');
    let[about, setAbout] = useState('');
    let[role, setRole]= useState({});
    let[director, setDirector] = useState('')

    const submitData=(event)=>{
        event.preventDefault();
        let Record={
            title:title,
            img:img,
            type:type,
            genre:genre,
            duration,duration,
            certificate:certificate,
            release:release,
            rating:rating,
            schedule:schedule,
            role:role,
            director:director
        }
        fetch("http://localhost:3001/movie/",{
                method :"POST",
                body: JSON.stringify(Record),
                headers: {
                        "Content-Type": "application/json"
                    }
            }).then(res=>{console.log("Record Added")}).catch(err=>{console.log(err)})
    }


    useEffect(()=>{
        fetch('http://localhost:3001/movie/',{
        }).then(res=>{
            res.json().then(record=>{
                // setAdd(record);
                console.log(record)
            })
        }).catch(err=>{console.log(err)})
    },[add])

    return (
        <div align="center">
            <h1>Add Movie Details</h1>
            <form method='post' onSubmit={(e)=>submitData(e)}>
                <table border={1}>
                    <tr>
                        <td>Title</td>
                        <td><input type='text' name="title" placeholder='Movie Title' onChange={(e)=>setTitle(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td><input type='file' name="img"/></td>
                    </tr>
                    <tr>
                        <td>Movie Type</td>
                        <td>
                            <input type='checkbox' name="type" value="2D" onChange={(e)=>setType(e.target.value)}/>2D
                            <input type='checkbox' name="type" value="3D" onChange={(e)=>setType(e.target.value)}/>3D
                            <input type='checkbox' name="type" value="4D" onChange={(e)=>setType(e.target.value)}/>4D
                            <input type='checkbox' name="type" value="4DX" onChange={(e)=>setType(e.target.value)}/>4DX
                            <input type='checkbox' name="type" value="IMAX" onChange={(e)=>setType(e.target.value)}/>IMAX
                            <input type='checkbox' name="type" value="ICE" onChange={(e)=>setType(e.target.value)}/>ICE
                        </td>
                    </tr>
                    <tr>
                        <td>Language</td>
                        <td>
                            <input type='checkbox' name="lahguage" value="Gujrati" onChange={(e)=>setLahguage(e.target.value)}/>Gujarati
                            <input type='checkbox' name="lahguage" value="Hindi" onChange={(e)=>setLahguage(e.target.value)}/>Hindi
                            <input type='checkbox' name="lahguage" value="English" onChange={(e)=>setLahguage(e.target.value)}/>English
                            <input type='checkbox' name="lahguage" value="Tamil" onChange={(e)=>setLahguage(e.target.value)}/>Tamil
                            <input type='checkbox' name="lahguage" value="Telugu" onChange={(e)=>setLahguage(e.target.value)}/>Telugu
                        </td>
                    </tr>
                    <tr>
                        <td>Genre</td>
                        <td>
                            <input type='checkbox' name="genre" value="Action" onChange={(e)=>setGenre(e.target.value)}/>Action
                            <input type='checkbox' name="genre" value="Horror" onChange={(e)=>setGenre(e.target.value)}/>Horror
                            <input type='checkbox' name="genre" value="Thriller" onChange={(e)=>setGenre(e.target.value)}/>Thriller
                            <input type='checkbox' name="genre" value="Drama" onChange={(e)=>setGenre(e.target.value)}/>Drama
                            <input type='checkbox' name="genre" value="Western" onChange={(e)=>setGenre(e.target.value)}/>Western
                            <input type='checkbox' name="genre" value="Romance" onChange={(e)=>setGenre(e.target.value)}/>Romance
                            <input type='checkbox' name="genre" value="Fantasy" onChange={(e)=>setGenre(e.target.value)}/>Fantasy
                            <input type='checkbox' name="genre" value="Animation" onChange={(e)=>setGenre(e.target.value)}/>Animation
                            <input type='checkbox' name="genre" value="Noir" onChange={(e)=>setGenre(e.target.value)}/>Noir<br/><br/>
                            <input type='checkbox' name="genre" value="History" onChange={(e)=>setGenre(e.target.value)}/>History
                            <input type='checkbox' name="genre" value="Documentry" onChange={(e)=>setGenre(e.target.value)}/>Documentry
                            <input type='checkbox' name="genre" value="Action Comedy" onChange={(e)=>setGenre(e.target.value)}/>Action Comedy
                            <input type='checkbox' name="genre" value="Science Flction Western" onChange={(e)=>setGenre(e.target.value)}/>Science Flction Western
                            <input type='checkbox' name="genre" value="Crime" onChange={(e)=>setGenre(e.target.value)}/>Crime
                            <input type='checkbox' name="genre" value="Mystery" onChange={(e)=>setGenre(e.target.value)}/>Mystery    
                            <input type='checkbox' name="genre" value="War" onChange={(e)=>setGenre(e.target.value)}/>War
                        
                        </td>
                    </tr>
                    <tr>
                        <td>Duration</td>
                        <td><input type='text' name="duration" placeholder='0h 0min formate' onChange={(e)=>setDuration(e)}/></td>
                    </tr>
                    <tr>
                        <td>Certificate</td>
                        <td><input type='text' name="certificate" onChange={(e)=>setCertificate(e)}/></td>
                    </tr>
                    <tr>
                        <td>Release Date</td>
                        <td><input type='text' name="release" placeholder='0-0-0000 formate' onChange={(e)=>setRelease(e)}/></td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td><input type='text' name="rating" onChange={(e)=>setRating(e)}/></td>
                    </tr>
                    <tr>
                        <td>Schedule</td>
                        <td><input type='text' name="schedule" onChange={(e)=>setSchedule(e)}/></td>
                    </tr>
                    <tr>
                        <td>About Movie</td>
                        <td><textarea name="about" onChange={(e)=>setAbout(e)}></textarea></td>
                    </tr>
                    <tr>
                        <td>Role</td>
                        <td><input type='text' name="role" placeholder='Hero Name' onChange={(e)=>setRole(e)}/>
                            <input type='text' name="role" placeholder='Heroine Name' onChange={(e)=>setRole(e)}/>
                            <input type='text' name="role" placeholder='Villain Name' onChange={(e)=>setRole(e)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Director</td>
                        <td><input type='text' name="director" onChange={(e)=>setDirector(e)}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type='submit' name="submit" value="submit"/></td>
                    </tr>
                </table>
            </form>
            <br/><br/>
            <table border={1}>
                <tr>
                    <td>Title</td>
                    <td>Image</td>
                    <td>Type</td>
                    <td>Language</td>
                    <td>Genre</td>
                    <td>Duration</td>
                    <td>Certificate</td>
                    <td>Release Date</td>
                    <td>Rating</td>
                    <td>Schedule</td>
                    <td>About Movie</td>
                    <td>Role</td>
                    <td>Director</td>
                </tr>
                {add != null?add.map((v,i)=>{
                    let{title, img, type, language, genre, duration, cartificate, release, rating, schedule, about, role, director} = v;
                    return(
                        <tr>
                            <td>{title}</td>
                            <td>{img}</td>
                            <td>{type}</td>
                            <td>{language}</td>
                            <td>{genre}</td>
                            <td>{duration}</td>
                            <td>{certificate}</td>
                            <td>{release}</td>
                            <td>{rating}</td>
                            <td>{schedule}</td>
                            <td>{about}</td>
                            {/* <td>{role}</td> */}
                            <td>{director}</td>
                        </tr>
                    )
                }):"NOT FOUND"}
            </table>
        </div>
    )
}

export default AddRecord
