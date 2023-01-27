import { useGetCustomers } from "./hooks"
import { Loader } from "../../components/loader"
import { Header } from "../../components/header"
import { CustomerList } from "../../components/customerList"
import './index.css'
import { Layout } from "../../layout"

export const Customers = () => {
    const { data, loading } = useGetCustomers()

    document.title = 'Insurance App | Customers'
    return (
        <div className="customers__page">
            {
                loading ? <Loader /> 

                :
                
                <Layout
                    header={
                    <Header text="Customers" />
                    } 
                    main={ 
                    <>
                        <CustomerList customers={data} />
                    </> 
                    }
                />
            }
        </div>
    )
}