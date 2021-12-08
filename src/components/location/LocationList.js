import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"
import { useNavigate } from "react-router"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"


export const LocationList = () => {
    // This state changes when `getLocations()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)
    const { employees, getEmployees} = useContext(EmployeeContext)
    const { animals, getAnimals} = useContext(AnimalContext)
    const navigate = useNavigate()


    //useEffect - reach out to the world for something.
    //In this case it is reaching out to the api call for locations
    useEffect(() => {
      console.log("LocationList: useEffect - getLocations")
      getLocations()
      .then(getEmployees)
      .then(getAnimals)
  
    }, [])
  
     
    return (
      <>
         <h1>Locations</h1>

         <button onClick={() => navigate("/locations/create")}>
                New Location
            </button>


          <div className="locations">
            {locations.map(location => {
      const employeeByLocation = location.employees.filter(e => e.locationId === location.id)
      const employeeCount = employeeByLocation.length
      const animalByLocation = location.animals.filter(a => a.locationId === location.id)
      const animalCount = animalByLocation.length
            

      return <LocationCard 
                key={location.id} 
                location={location}
                employeeCount={employeeCount}
                animalCount={animalCount} />
             })
            }
          </div>
      </>
    )
  }