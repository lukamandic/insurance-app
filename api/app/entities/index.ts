import * as mongoose from 'mongoose'
import { Schema } from 'mongoose'

interface Customer {
    name: string;
    surname: string;
    email: string;
    city: string;
    dateOfBirth: string;
}

const CustomerSchema = new Schema<Customer>({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    dateOfBirth: { type: String, required: true }
})

export const CustomerModel = mongoose.model<Customer>('Customer', CustomerSchema)
