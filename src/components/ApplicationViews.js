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
import { LocationForm } from "./location/LocationForm"
import { AnimalSearch } from "./animal/AnimalSearch"


//ApplicationViews renders the function based on the web address
export const ApplicationViews = () => {
    return (
        
        <AnimalProvider>
        <CustomerProvider>
        <EmployeeProvider>
        <LocationProvider>
        <Routes>
            {/* Home render when http://localhost:3000/ */}
            <Route exact path="/" element={<Home />} />
            

            {/* Animal list and animal search */}
            <Route exact path="animals/*" element={<><AnimalSearch /><AnimalList /></>} />
            
            {/* new animal form */}
            <Route path="animals/create/*" element={<AnimalForm />} />

            {/* editAnimal form */}
            <Route path="animals/edit/:animalId/*" element={<AnimalForm />} />

           {/* animal details card */}
            <Route path="animals/detail/:animalId/*" element={<AnimalDetail />} />


                
            {/* Customerlist when http://localhost:3000/customers */}
            <Route path="customers/*" element={<CustomerList />} />



            {/* Employee list render when http://localhost:3000/employee */}
            <Route path="employees/*" element={<EmployeeList />} />

            {/* Employee form render when http://localhost:3000/employee/create */}
            <Route path="employees/create/*" element={<EmployeeForm />} />

            {/* editEmplyee form */}
            <Route path="employees/edit/:employeeId/*" element={<EmployeeForm />} />

            {/* employee details card */}
            <Route path="employees/detail/:employeeId/*" element={<EmployeeDetail />} />



            {/* Location list render when http://localhost:3000/locations */}
            <Route path="locations/*" element={<LocationList />} />

            {/* new location form */}
            <Route path="locations/create/*" element={<LocationForm />} />

            {/* editLocation form */}
            <Route path="locations/edit/:locationId/*" element={<LocationForm />} />

            {/* location details card */}
            <Route path="locations/detail/:locationId/*" element={<LocationDetail />} />




        </Routes>
        </LocationProvider>
        </EmployeeProvider>
        </CustomerProvider>
        </AnimalProvider>
        
    )
}
