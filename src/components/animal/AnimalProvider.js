import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
//AnimalContext stores date used in application
export const AnimalContext = createContext()

// This component allows other components to use the context data
export const AnimalProvider = (props) => {
    //useState hook defines a variable that holds the state of the compnent and a function to update it
    const [animals, setAnimals] = useState([])

    //?_expand=location adds location so we can pull location for the call
    //?_expand=location&_expand=customer
    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=location&_expand=customer")
        .then(res => res.json())
        .then(setAnimals)
    }
    //setAnimals puts the data from the api into the array of animals

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}

