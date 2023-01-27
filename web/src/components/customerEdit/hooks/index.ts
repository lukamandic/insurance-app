import { useEffect, useState } from "react"
import { getCustomer } from "../../../services"
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