import React from "react"
import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import data from "./data.js"


/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)
  they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
    const dataElements = data.map( object => {
        return (<Card 
            {...object}
        />)
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card--list">
                {dataElements}
            </div>
            
        </div>
    )
}