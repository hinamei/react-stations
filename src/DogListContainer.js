import React, { useState } from 'react'
import { useEffect } from 'react'

export const DogListContainer = (props) =>{
    const[breeds, setBreeds] = useState("shiba");
    const listUrl = "https://dog.ceo/api/breeds/list/all";
    
    useEffect(() => {
      fetch(listUrl)
        .then(res => res.json()).then(result => {
          if(result.status == "success") {
            setBreeds(result.message);
          }
        });
    } , []);

  return (
      <dev></dev>
  )
 };
