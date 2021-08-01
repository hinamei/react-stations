// DO NOT DELETE

import * as React from 'react'
import './App.css'
import react, { useState } from 'react'

/**
 * 
 * @type {React.FC}
 */

export const App = () => {
    const[dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/beagle/n02088364_129.jpg");
    function updateImage(){
      const randomUrl = "https://dog.ceo/api/breeds/image/random";
    
      fetch(randomUrl).then(function(response){
        return response.json();
      }).then(function(json){
        setDogUrl(json.message);
      });
    }

  return (
    <div>
      <header className="app-header">Dogアプリ</header>
      <main>
      <dev className="contents">
        <p className="description">犬の画像を表示するサイトです</p>
        <div className="image"><img className="dog-image" src={dogUrl}></img></div>
      </dev>
      </main>
      <button className="change-btn" onClick={() => updateImage()}>変更</button>
      <hr></hr>
      
    </div>
  )
}
