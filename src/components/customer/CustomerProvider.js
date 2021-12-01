import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
//CustomerContext stores date used in application
export const CustomerContext = createContext()

// This component allows other components to use the context data
export const CustomerProvider = (props) => {
    //useState hook defines a variable that holds the state of the compnent and a function to update it
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
        .then(res => res.json())
        .then(setCustomers)
    }

    const addCustomer = customerObj => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerObj)
        })
        .then(getCustomers)
    }

    /*
        You return a context provider which has the
        `customers` state, `getCustomerss` function,
        and the `addCustomer` function as keys. This
        allows any child elements to access them.
    */
    return (
        <CustomerContext.Provider value={{
            customers, getCustomers, addCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}