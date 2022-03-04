import React, { useState } from 'react'
import { DogImage } from './DogImage.js'

export const Description = (props) =>{
    const[url, setDogUrl] = useState("https://images.dog.ceo/breeds/beagle/n02088364_129.jpg");
    
    function updateImage(){
       const randomUrl = "https://dog.ceo/api/breeds/image/random";
       fetch(randomUrl).then(function(response){
         return response.json();
       }).then(function(json){
         setDogUrl(json.message);
       });
   }
    return (
        <dev className="contents">
          <dev>
            <p>{props.description}</p>
          </dev>
          <div>
          </div>
          <div className="image">
              <DogImage dogUrl={url}/>
          </div>
          <button className="change-btn" onClick={() => updateImage()}>変更</button>
        </dev>
    )
 };
