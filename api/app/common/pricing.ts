//ignore typescript error
// @ts-ignore
import { readFile, readFileSync } from "fs"
import path from "path"

export class Pricing {

    constructor() {}

    private calculateAge(dateOfBirth: string): number {
        let today = new Date();
        let birthdate = new Date(dateOfBirth.split('/').reverse().join('-'));
        let age = today.getFullYear() - birthdate.getFullYear();
        let m = today.getMonth() - birthdate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        
        return age;
    }

    public calculateAgeRange(dateOfBirth: string) {
        const age = this.calculateAge(dateOfBirth)
        const disconts = this.fetchDiscountData()

        switch(true) {
            case age < 21:
                return disconts[0]
            case age >= 21 && age < 31:
                return disconts[1]
            case age >= 31 && age < 41:
                return disconts[2]
            case age >= 41 && age < 61:
                return disconts[3]
            case age >= 61:
                return disconts[4]
        }
    }

    public fetchBasePrice(city: string): number {
        const priceData = this.fetchPriceData()
        
        return priceData.filter((price) => price.city === city.charAt(0).toUpperCase() + city.slice(1))
    }

    private fetchDiscountData() {
        const discountData = readFileSync(path.resolve(__dirname, './discount.json'), "utf8")

        return JSON.parse(discountData)
    }

    private fetchPriceData() {
        const priceData = readFileSync(path.resolve(__dirname, './price.json'), "utf8")

        return JSON.parse(priceData)
    }
}