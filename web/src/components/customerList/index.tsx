import { Customer } from "../../types"
import './index.css'
import { Button } from "../button"
import { useNavigate } from "react-router-dom"
import { useDeleteCustomer } from "./hooks"

interface CustomerListProps {
    customers: Array<Customer> | undefined
}

export const CustomerList = ({ customers }: CustomerListProps) => {
    const navigate = useNavigate()
    const { removeCustomer } = useDeleteCustomer()

    const handleDeleteCustomer = (id: string) => {
        removeCustomer(id)

        navigate(0)
    }

    return (
        <>
            <Button onClick={() => navigate('/customer/create')} text="Create Customer" type="edit" />
            <table>
                <thead>
                    <tr>
                        <th>Name and Surname</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Birthdate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    customers?.map((customer) => {
                        return (
                            <tr className="customer__list__line" key={customer._id}>
                                <td onClick={() => navigate(`/customer/${customer._id}`)}>{ `${customer.name} ${customer.surname}` }</td>
                                <td onClick={() => navigate(`/customer/${customer._id}`)}>{ customer.email }</td>
                                <td onClick={() => navigate(`/customer/${customer._id}`)}>{ customer.city.charAt(0).toUpperCase() + customer.city.slice(1) }</td>
                                <td onClick={() => navigate(`/customer/${customer._id}`)}>{ customer.dateOfBirth }</td>
                                <td>
                                    <Button style={{ textAlign: 'center' }} text="Edit"
                                    onClick={() => navigate(`/customer/edit/${customer._id}`)}
                                    type="edit"
                                    />
                                    <Button style={{ textAlign: 'center' }} text="Delete"
                                        onClick={() => handleDeleteCustomer(customer._id)} type="delete"
                                    />
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}