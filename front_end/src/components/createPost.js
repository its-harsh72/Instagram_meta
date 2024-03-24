import React from "react";
import "./createpost.css";
export default function Createpost(){
    const loadfile = (event)=>{
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
          URL.revokeObjectURL(output.src) // free memory
        }
    }
    return  <div className="createpost">
       <div className="post-header">
       <h4 style={{margin:"3px auto"}}>Create New Post</h4>
       <button id="post-btn">Share</button>
       </div>
<div className="main-div">
     <img id='output' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F510%2FPNG%2F512%2Fimage_icon-icons.com_50366.png&f=1&nofb=1&ipt=3e21a506d0fd98f7e8b051a466d0963e37b73a3d055f29aeeec5a0c2fc61c6b2&ipo=images"/>
    <input type="file" accept="image/*" onChange={(event)=>{loadfile(event)}}/>
</div>
<div className="details">
    <div className="card-header">
        <div className="card-pic">
        <img src="https://images.unsplash.com/photo-1589251204996-3367cc27f084?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3F1YXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
        
        </div>
        <h5>Krishna</h5>
    </div>
    <textarea type = "text" placeholder="Write a caption"></textarea>
</div>
       create</div>
     
}