import { Customer } from "./types"
import { CustomerModel } from "../entities"
import { CustomerNotFoundError } from "./errors/customer-not-found"
import { Pricing } from "../common/pricing"

export class CustomerService {

    constructor() {}

    public async create(data: Customer): Promise<Customer> {

        const created = await CustomerModel.create(data)

        return created

    }

    public async deleteOne(id: string): Promise<boolean> {

        const deleted = await CustomerModel.deleteOne({ _id: id })
        
        if (deleted.deletedCount == 0) throw new CustomerNotFoundError()

        return true
    }

    public async updateOne(id: string, updatedData): Promise<boolean> {
        const updated = await CustomerModel.updateOne({ _id: id }, updatedData)

        if (updated == null) throw new CustomerNotFoundError()

        return true
    }

    public async find(): Promise<Array<Customer>> {

        const found = await CustomerModel.find({})

        if (found == null) throw new CustomerNotFoundError()

        return found
    }

    public async findOne(id: string): Promise<Customer> {

        const found = await CustomerModel.findOne({ _id: id })

        if (found == null) throw new CustomerNotFoundError()

        return found
    }

    public async calculatePrice(id: string): Promise<object> {
        try {
            const found  = await this.findOne(id)
            const basePrice = new Pricing().fetchBasePrice(found.city)[0].amount
            const discount = new Pricing().calculateAgeRange(found.dateOfBirth).discount
            
            return {
                price: basePrice - (basePrice * (discount / 100))
            }

        } catch(e) {
            throw e
        }
    }
}