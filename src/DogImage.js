import * as React from 'react'

export const DogImage = (props) =>{
  return(
      <img className="dog-image" src={props.dogUrl}></img>
  );
}
