import { Header } from "../../components/header"
import './index.css'
import { Layout } from "../../layout"
import { CustomerData } from "../../components/customerData"

export const Customer = () => {

    document.title = 'Insurance App | Customer'
    return (
        <div className="customer__page">
            <Layout
                header={
                <Header text="Customers" />
                } 
                main={ 
                <>
                    <CustomerData />
                </> 
                }
            />
        </div>
    )
}