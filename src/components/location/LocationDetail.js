import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useNavigate } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();
	const navigate = useNavigate();



  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    }, [])

  return (
    <section className="location">
      <h3 className="locationName">{location.name}</h3>
      <div className="locationAddress">Address: { location.address }</div>
    <div className="locationEmployees">Employees: </div>
    <div className="locationEmployeeNames">
    {location.employees?.map(employeeObj => <p key={employeeObj.id}>{employeeObj.name}</p>)}
    </div>
    <div className="numberEmployees">Current Residents</div>
    <div className="locationEmployeeNames">
    {location.animals?.map(animalObj => <p key={animalObj.id}>{animalObj.name}</p>)}
    </div>
    </section>
    
  )
}
