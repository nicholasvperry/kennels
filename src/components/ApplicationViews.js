import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeForm } from "./employee/EmployeeForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"


//ApplicationViews renders the function based on the web address
export const ApplicationViews = () => {
    return (
        
        <AnimalProvider>
        <CustomerProvider>
        <EmployeeProvider>
        <LocationProvider>
        <Routes>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/" element={<Home />} />

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="animals/*" element={ <AnimalList />} />

            <Route path="animals/create/*" element={<AnimalForm />} />
                
            {/* Render the customer list when http://localhost:3000/customers */}
            <Route path="customers/*" element={<CustomerList />} />  

            {/* Render the employee list when http://localhost:3000/employee */}
            <Route path="employees/*" element={<EmployeeList />} />

            {/* Render the employee form when http://localhost:3000/employee/create */}
            <Route path="employees/create/*" element={<EmployeeForm />} />

            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="locations/*" element={<LocationList />} />

            <Route path="animals/detail/:animalId/*" element={<AnimalDetail />} />

            <Route path="employees/detail/:employeeId/*" element={<EmployeeDetail />} />

            <Route path="locations/detail/:locationId/*" element={<LocationDetail />} />




        </Routes>
        </LocationProvider>
        </EmployeeProvider>
        </CustomerProvider>
        </AnimalProvider>
        
    )
}
