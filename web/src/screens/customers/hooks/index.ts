import { useEffect, useState } from "react"
import { getCustomers } from "../../../services"
import { Customer } from "../../../types"

export const useGetCustomers = () => {
    const [ data, setData ] = useState<Array<Customer> | undefined>([])
    const [ loading, setLoading ] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            getCustomers().then((customer) => {
                setData(customer)
                setLoading(false)
            })
        }, 1000)
    }, [])

    return { data, loading }
}