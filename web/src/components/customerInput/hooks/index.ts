import { useState, useEffect } from "react";
import { Customer } from "../../../types";
import instance from "../../../axios";
import { getCustomers, putCustomer } from "../../../services";

const validateDate = (date: string) => {
    const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;

    if (date === '') return alert("You have to fill the Date of Birth field")

    if (!dateFormat.test(date)) return alert("Invalid date format, please use DD/MM/YYYY")

    return true
}

const validateCity = (city: string) => {
    if (city === '') return alert("You have to fill the City input field")

    return true
}

export const useCustomerInput = () => {
    const [ name, setName ] = useState<string>('');
    const [ surname, setSurname ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ city, setCity ] = useState<string>('');
    const [ dateofbirth, setDateofbirth ] = useState<string>('');
    
    return { name, setName, surname, setSurname, email, setEmail, city, setCity, dateofbirth, setDateofbirth }
}

export const usePostCustomer = () => {

    const postCustomer = async (customer: Customer) => {
        if (validateDate(customer.dateOfBirth) && validateCity(customer.city)) {
            try {
                const response = await instance.post('/customer', customer);
                return true
            } catch (error) {
                return false
            }
        }
        return false
    }

    return { postCustomer }
}

export const useUpdateCustomer = () => {
    const updateCustomer = async (id: string, customer: Customer) => {
        if (validateDate(customer.dateOfBirth) && validateCity(customer.city)) {
            
            try {
                const response = await putCustomer(id, customer);
                return true
            } catch (error) {
                console.log(error);
            }
        }
        return
    }

    return { updateCustomer }
}

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