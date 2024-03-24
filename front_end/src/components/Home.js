import React from "react";
import './Home.css'
export default function Home(){
    return <div className="home">
       <div className="card">
        <div className="card-header">
            <div className="card-pic">
                <img src="https://images.unsplash.com/photo-1589251204996-3367cc27f084?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3F1YXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="Krishna"/>
            </div>
            <h5>Try</h5>
        </div>
        <div className="card-image">
            <img src="https://c4.wallpaperflare.com/wallpaper/562/460/955/god-lord-krishna-wallpaper-preview.jpg" alt="Kanha" />
        </div>
        <div className="card-content">
        <span className="material-symbols-outlined">favorite</span>
        <p>Like</p>
        <p>Comment</p>
        </div>
        <div className="add-comment">
        <span className="material-symbols-outlined">
mood
</span>
<input type="text" placeholder="Add-comment" />
<button className="comment">Post</button>
        </div>
       </div>


    </div>
        
}