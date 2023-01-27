import { useEffect, useState } from "react"
import { calculateCustomer, getCustomer } from "../../../services"
import { Customer } from "../../../types"

export const useGetCustomer = (id: string | undefined) => {
    const [ data, setData ] = useState<Customer>()

    useEffect(() => {
        getCustomer(id || '').then((response) => {
            setData(response)
        })
    }, [])

    return { data }
}

export const useCustomerCalculate = (id: string | undefined) => {
    const [ price, setPrice ] = useState<number>(0)

    const calculate = () => {
        calculateCustomer(id || '').then((response) => {
            setPrice(response || 0)
        })
    }

    return { price, calculate }
}