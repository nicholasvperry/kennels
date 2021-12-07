import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animalName">
          <Link to={`/animals/detail/${animal.id}`}>
            { animal.name }
          </Link>
        </h3>
        <div className="animalBreed">{ animal.breed }</div>
        
        
        
    </section>
)