import React, { useState } from 'react'
import { useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = (props) =>{
  // 犬種のリストを保持する
  const[breeds, setBreeds] = useState([]);
  // ドロップダウンリストで選択された犬種を保持する
  const[selectBreed, setSelectedBreed] = useState("akita");
  // APIから取得した犬の画像リストを保持する
  const[dogList, setDogList] = useState([]);
  
  // dogAPIにアクセスして、犬種一覧を取得する
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json()).then(data => {
      if(data.status == "success") {
        setBreeds(Object.keys(data.message));
      }
    });
  } , []);

  function reloadImages(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`)
    .then(res => res.json())
    .then(data => {setDogList(data.message)});
  }

  const breedImages = dogList.map((image) => {
    return(
      <img src={image} key={image} />
    )
  })

  return (
      <dev className="doglist-area">
        <div className='select-breed-area'>
          <span>Breeds List</span>
          <BreedsSelect 
            breeds = {breeds}
            change = {e => setSelectedBreed(e.target.value)}
            selectBreed = {selectBreed}
          />
          <button className='change-btn' onClick={() => reloadImages(selectBreed)}>表示</button>
        </div>
        <div className='dog-list-image-area'>
          {breedImages}
        </div>
      </dev>
  )
 };
