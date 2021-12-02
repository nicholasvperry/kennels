import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers} = useContext(CustomerContext)
  const navigate = useNavigate ()
 
 
  //useEffect - reach out to the world for something.
  //In this case it is reaching out to the api call for animals
  useEffect(() => {
    console.log("AnimalList: Initial render before data")
    getAnimals()
    .then(getCustomers)
    .then(getAnimals)
    //getAnimals populates animals state with animals from database
  }, [])


  return (
    <>
          <h2>Animals</h2>
      <button onClick={() => {navigate("create")}}>
              Add Animal
          </button>
          <div className="animals">
          {
            <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animalObj => {
          //map through and find matching ids
          const owner = customers.find(c => c.id === animalObj.customerId)
          const clinic = locations.find(l => l.id === animalObj.locationId)
          
          //return
          return <AnimalCard key={animalObj.id}
          location={clinic}
          customer={owner}
          animal={animalObj} />
        })
      }
    </div>
          }
          </div>
      </>
    
  )
}