import React, { useState } from 'react'

export const BreedsSelect = (props) =>{
  const breeds = props.breeds;
  const selectList = breeds.map((breed) => {
      return(
        <option key={breed} value={breed}>{breed}</option>
      )
  });

  return (
      <dev>
        <form>
            <select value={props.selectBreed} onChange={props.change}>
                {selectList}
            </select>
        </form>
      </dev>
  )
 };
