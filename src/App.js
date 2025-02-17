import * as React from 'react'
import './App.css'
import { Header } from './Header.js'
import { Description } from './Description.js'
import { DogListContainer } from './DogListContainer.js'


/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  return (
    <div className="app">
      <Header title="Dogアプリ"/>
      <Description description="犬の画像を表示するサイトです"/>
      <DogListContainer/>
    </div>
  )
}
