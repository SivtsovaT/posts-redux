import React from 'react';
import './App.css';
import image from './image.jpg';
import Likes from "./components/likes/Likes";
import store from "./redux/store";


const App = () => {
    return (
        <div className="App">
            <div className="wrap">
                <div className="card">
                    <div className="card-image">
                        <img src={image} alt="image"/>
                         <Likes store={store}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
