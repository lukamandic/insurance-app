import { useEffect, useState } from "react"
import { getCustomer } from "../../../services"
import { Customer } from "../../../types"

export const useGetCustomer = (id: string) => {
    const [ data, setData ] = useState<Customer | undefined>()
    const [ loading, setLoading ] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            getCustomer(id).then((customer) => {
                setData(customer)
                setLoading(false)
            })
        }, 1000)
    }, [ id ])

    return { data, loading }
}