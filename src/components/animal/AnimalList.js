
import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import {AnimalCard} from "./AnimalCard"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { useNavigate } from "react-router"
import "./Animal.css"




export const AnimalList = ({ history }) => {
    const { getAnimals, animals } = useContext(AnimalContext)

    const navigate = useNavigate()

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => navigate("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    animals.map(animal => {
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