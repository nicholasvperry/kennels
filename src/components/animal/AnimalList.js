import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useNavigate } from "react-router-dom"

export const AnimalList = () => {
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)

  // Since you are no longer ALWAYS displaying all of the animals
  const [ filteredAnimals, setFiltered ] = useState([])
  const navigate = useNavigate()

  // Empty dependency array - useEffect only runs after first render
  useEffect(() => {
      getAnimals()
  }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])

  return (
    <>
      <h1>Animals</h1>

      <button onClick={() => navigate("/animals/create")}>
          Make Reservation
      </button>
      <div className="animals">
      {
        filteredAnimals.map(animal => {
          return <AnimalCard key={animal.id} animal={animal} />
        })
      }
      </div>
    </>
  )
}



// import React, { useContext, useEffect } from "react"
// import { useNavigate } from "react-router"
// import { AnimalContext } from "./AnimalProvider"
// import { AnimalCard } from "./AnimalCard"
// import { LocationContext } from "../location/LocationProvider"
// import { CustomerContext } from "../customer/CustomerProvider"
// import "./Animal.css"

// export const AnimalList = () => {
//   // This state changes when `getAnimals()` is invoked below
//   const { animals, getAnimals } = useContext(AnimalContext)
//   const { locations, getLocations } = useContext(LocationContext)
//   const { customers, getCustomers} = useContext(CustomerContext)
//   const navigate = useNavigate ()
 
 
//   //useEffect - reach out to the world for something.
//   //In this case it is reaching out to the api call for animals
//   useEffect(() => {
//     console.log("AnimalList: Initial render before data")
//     getAnimals()
//     .then(getCustomers)
//     .then(getAnimals)
//     //getAnimals populates animals state with animals from database
//   }, [])


//   return (
//     (
//       <>
//           <h1>Animals</h1>

//           <button onClick={() => navigate("/animals/create")}>
//               Make Reservation
//           </button>
//           <div className="animals">
//               {
//                   animals.map(animal => {
//                       return <Animal key={animal.id} animal={animal} />
//                   })
//               }
//           </div>
//       </>
//     )
//   )
// }