import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animalName">{animal.name}</h3>
        <div className="animalBreed">{animal.breed}</div>
        <address className="locationAddress">Location: {animal.location.name}</address>
        <div className="customerName">Customer: {animal.customer.name}</div>
    </section>
)