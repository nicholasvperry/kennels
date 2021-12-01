import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animalName">{animal.name}</h3>
        <address className="locationAddress">{animal.location.name}</address>
    </section>
)