import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Movie from './Container/Movie';
import Movie_detail from './Container/Movie-detail';
import Booking_page from './Container/Booking_page';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Movie/>}></Route>
                <Route path='/movie_details/:id' element={<Movie_detail/>}></Route>
                <Route path='/Booking_page' element={<Booking_page/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
