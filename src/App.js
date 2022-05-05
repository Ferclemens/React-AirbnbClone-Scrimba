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
            title={object.title} 
            price={object.price}
            img={object.coverImg}
            rating={object.stats.rating}
            reviewCount={object.stats.reviewCount}
            location={object.location}
        />)
    })
    return (
        <div>
            <Navbar />
            <Hero />
            {dataElements}
        </div>
    )
}