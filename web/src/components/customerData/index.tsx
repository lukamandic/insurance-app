import { Layout } from "../../layout"
import { useCustomerCalculate, useGetCustomer } from "./hooks"
import { CustomerInput } from "../customerInput"
import { Header } from "../header"
import { useParams } from "react-router-dom"
import { Button } from "../button"
import { useState } from "react"

export const CustomerData = () => {
    const { id } = useParams()
    const { data } = useGetCustomer(id)
    const { price, calculate } = useCustomerCalculate(id)

    const handleCalculate = () => {

    }
    
    return (
        <>
            <h3>Name: </h3> {data?.name}
            <h3>Surname: </h3> {data?.surname}
            <h3>Email: </h3> {data?.email}
            <h3>City: </h3> {data?.city}
            <h3>Date of Birth: </h3> {data?.dateOfBirth}
            <h3>Calculate Insurance Price: </h3> 
            {
                price ? `${price}€` : <Button onClick={() => calculate()} text="Calculate" type="edit" />
            }
            
        </>
    )
}