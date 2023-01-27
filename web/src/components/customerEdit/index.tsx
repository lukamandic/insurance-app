import { Layout } from "../../layout"
import { useGetCustomer } from "./hooks"
import { CustomerInput } from "../customerInput"
import { Header } from "../header"
import { useParams } from "react-router-dom"

export const CustomerEdit = () => {
    const { id } = useParams()
    const { data } = useGetCustomer(id)
    
    return (
        <>
            <Layout 
                header={<Header text="Edit Customer" />}
                main={
                    <CustomerInput type="edit" customer={data} />
                }
            />
        </>
    )
}