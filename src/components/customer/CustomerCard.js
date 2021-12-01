import React from "react"
import "./Customer.css"

export const CustomerCard = ({customer}) => (
    <section className="customer">
        <h3 className="customerName">{customer.name}</h3>
        <div className="customerAddress">{customer.address}</div>
    </section>
)