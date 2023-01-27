import instance from "../axios"
import { Customer } from "../types"

export const getCustomers = async (): Promise<Array<Customer> | undefined> => {
    try {
        const response = await instance.get("/customers")
        return response.data
    } catch (e) {
        alert('Mind trying that again? Thank you! :)')
    }
}

export const getCustomer = async (id: string): Promise<Customer | undefined> => {
    try {
        const response = await instance.get(`/customer/${id}`)
        return response.data
    } catch (e) {
        alert('Mind trying that again? Thank you! :)')
    }
}

export const createCustomer = async (customer: Customer): Promise<Customer | undefined> => {
    try {
        const response = await instance.post("/customer", customer)
        return response.data
    } catch (e) {
        alert('Mind trying that again? Thank you! :)')
    }
}

export const putCustomer = async (id: string, customer: Customer): Promise<object | undefined> => {
    try {
        const response = await instance.put(`/customer/${id}`, customer)
        return response.data
    } catch (e) {
        alert('Mind trying that again? Thank you! :)')
    }
}

export const deleteCustomer = async (id: string): Promise<object | undefined> => {
    try {
        const response = await instance.delete(`/customer/${id}`)
        return response.data
    } catch (e) {
        alert('Mind trying that again? Thank you! :)')
    }
}

export const calculateCustomer = async (id: string): Promise<number | undefined> => {
    try {
        const response = await instance.get(`/customer/price/${id}`)
        return response.data.price
    } catch (e) {
        alert('Mind trying that again? Thank you! :)')
    }
}