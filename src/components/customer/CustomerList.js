import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";
import { CustomerCard } from "./CustomerCard";
import "./Customer.css"

export const CustomerList = () => {
    //This state changes when `getCustomers()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)

    //useEffect - gets customers from the api call
    useEffect(() => {
        console.log("CustomerList: useEffect - getCustomers")
        getCustomers()
    }, [])

    return (
        <div className="customers">
            {console.log("CustomerList: Render", customers)}
            {
                customers.map(customerObj => {
                    return <CustomerCard key={customerObj.id} customer={customerObj} />
                })
            }
        </div>
    )
}