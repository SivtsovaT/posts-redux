import React from 'react';
import './App.css';
import image from './image.jpg';
import Likes from "./components/likes/Likes";



const App = () => {
    return (
        <div className="App">
            <div className="wrap">
                <div className="card">
                    <div className="card-image">
                        <img src={image} alt="image"/>
                         <Likes/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
