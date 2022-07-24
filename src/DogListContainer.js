import React, { useState } from 'react'
import { useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = (props) =>{
  // 犬種のリストを保持する
  const[breeds, setBreeds] = useState([]);
  const listUrl = "https://dog.ceo/api/breeds/list/all";
  
  // dogAPIにアクセスして、犬種一覧を取得する
  useEffect(() => {
    fetch(listUrl)
    .then(res => res.json()).then(data => {
      if(data.status == "success") {
        setBreeds(Object.keys(data.message));
      }
    });
  } , []);
  
  // ドロップダウンリストで選択された犬種を保持する
  const[selectBreed, setSelectedBreed] = useState("");

  return (
      <dev className="doglist-area">
        <div className='select-breed-area'>
          <span>Breeds List</span>
          <BreedsSelect 
            breeds = {breeds}
            change = {e => setSelectedBreed(e.target.value)}
            selectBreed = {selectBreed}
          />
          <button className='change-btn'>表示</button>
        </div>
        <div className='dog-list-image-area'>
          <img className="dog-image" src="https://images.dog.ceo/breeds/beagle/n02088364_129.jpg"></img>
          <img className="dog-image" src="https://images.dog.ceo/breeds/beagle/n02088364_129.jpg"></img>
          <img className="dog-image" src="https://images.dog.ceo/breeds/beagle/n02088364_129.jpg"></img>
          <img className="dog-image" src="https://images.dog.ceo/breeds/beagle/n02088364_129.jpg"></img>
          <img className="dog-image" src="https://images.dog.ceo/breeds/beagle/n02088364_129.jpg"></img>
          <img className="dog-image" src="https://images.dog.ceo/breeds/beagle/n02088364_129.jpg"></img>
          <img className="dog-image" src="https://images.dog.ceo/breeds/beagle/n02088364_129.jpg"></img>
          <img className="dog-image" src="https://images.dog.ceo/breeds/beagle/n02088364_129.jpg"></img>
          <img className="dog-image" src="https://images.dog.ceo/breeds/beagle/n02088364_129.jpg"></img>
        </div>
      </dev>
  )
 };
