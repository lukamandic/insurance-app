import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Customer } from "../screens/customer"
import { Customers } from "../screens/customers"
import { NotFound } from "../screens/notfound"
import { CreateCustomer } from "../screens/createCustomer"
import { CustomerEdit } from "../components/customerEdit"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={ <Customers /> }
                />
                <Route
                    path="customer/:id"
                    element={ <Customer /> }
                />
                <Route
                    path="customer/edit/:id"
                    element={ <CustomerEdit /> }
                />
                <Route
                    path="customer/create"
                    element={ <CreateCustomer /> }
                />
                <Route
                    path='*'
                    element={ <NotFound /> }
                />
            </Routes>
        </BrowserRouter>
    )
}