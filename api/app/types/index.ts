export interface Customer {
    name: string;
    surname: string;
    email: string;
    city: string;
    dateOfBirth: string;
}

export interface DiscountData {
    discount: number;
    age: string;
}

export interface PriceData {
    price: number;
    city: string;
}
