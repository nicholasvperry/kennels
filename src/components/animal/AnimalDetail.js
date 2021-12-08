import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';

export const AnimalDetail = () => {
  const { getAnimalById, releaseAnimal } = useContext(AnimalContext)

	const [animal, setAnimal] = useState({})

	const {animalId} = useParams();
	const navigate = useNavigate();

    useEffect(() => {
    console.log("useEffect", animalId)
    getAnimalById(animalId)
    .then((response) => {
      setAnimal(response)
    })
    }, [])



  const handleRelease = () => {
    releaseAnimal(animal.id)
    .then(() => {
      navigate("/animals")
    })
  }


  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.firstName} {animal.customer?.lastName}</div>
      
      <button onClick={() => {navigate(`/animals/edit/${animal.id}`)}}>
          Edit
      </button>

      <button onClick={handleRelease}>Release Animal</button>
      

    </section>
  )
}
