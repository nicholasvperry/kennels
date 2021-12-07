import React from "react"
import { Link } from "react-router-dom"
import "./Location.css"

export const LocationCard = ({location, employeeCount, animalCount}) => {
  
  


  return (    
    <section className="location">
    <h3 className="locationName">
      <Link to={`/locations/detail/${location.id}`}>
        { location.name }
      </Link>
    </h3>
    <div className="locationAddress">Address: { location.address }</div>
    <div className="employees">{employeeCount} Employees</div>
    <div className="animals">{animalCount} Animals</div>
</section>

)}