import * as React from 'react'
import './App.css'

export const Header = (props) =>{
  return (
    <header className="app-header">{props.title}</header>
  );
}