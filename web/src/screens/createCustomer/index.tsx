import { Layout } from "../../layout"
import { Header } from "../../components/header"
import { CustomerInput } from "../../components/customerInput"

export const CreateCustomer = () => {

    document.title = 'Insurance App | Create Customer'
    return (
        <>
            <Layout
                header={
                    <Header text="Create Customer" />
                }
                main={
                    <>
                        <CustomerInput type="create" />
                    </>
                }
            />
        </>
    )
}