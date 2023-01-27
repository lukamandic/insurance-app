import { Button } from '../button'
import './index.css'
import { useCustomerInput, usePostCustomer, useUpdateCustomer } from './hooks'
import { useEffect } from 'react'
import { Customer } from '../../types'
import { useNavigate } from 'react-router-dom'

interface CustomerInputProps {
    type: 'edit' | 'create'
    customer?: Customer
}

export const CustomerInput = ({ type, customer }: CustomerInputProps) => {

    const { name, setName, surname, setSurname, email, setEmail, city, setCity, dateofbirth, setDateofbirth } = useCustomerInput()
    const { postCustomer } = usePostCustomer()
    const { updateCustomer } = useUpdateCustomer()
    const navigate = useNavigate()

    const handleSubmit = async (id?: string) => {
        
        if (type === 'edit') {
            const updated = await updateCustomer( id || '' ,
            {
                name: name.trim(),
                surname: surname.trim(),
                email: email.trim(),
                city: city.trim().charAt(0).toUpperCase() + city.slice(1),
                dateOfBirth: dateofbirth.trim()
            }
            )

            if (updated) navigate('/')
            return
        }
        const posted = await postCustomer({
            name: name.trim(),
            surname: surname.trim(),
            email: email.trim(),
            city: city.trim().charAt(0).toUpperCase() + city.slice(1),
            dateOfBirth: dateofbirth.trim()
        })

        if (posted) navigate('/')
    }

    useEffect(() => {
        if (type === 'edit') {
            console.log(customer)
            setName(customer?.name || '')
            setSurname(customer?.surname || '')
            setEmail(customer?.email || '')
            setCity(customer?.city || '')
            setDateofbirth(customer?.dateOfBirth || '')
        }
    }, [customer])

    const onEnter = (e: React.KeyboardEvent, id?: string) => {
        if (e.key === 'Enter') handleSubmit(id)
    }

    return (
        <>
            <div className="input__line">
                <p className="input__label">Name</p>
                <input value={name} onKeyDown={(e) => onEnter(e, customer?._id)} onChange={(e) => setName(e.target.value)} className="input__input" type="text"></input>
            </div>
            <div className="input__line">
                <p>Surname</p> 
                <input value={surname} onKeyDown={(e) => onEnter(e, customer?._id)} onChange={(e) => setSurname(e.target.value)} className="input__input" type="text"></input>
            </div>
            <div className="input__line">
                <p>Email</p> 
                <input value={email} onKeyDown={(e) => onEnter(e, customer?._id)} onChange={(e) => setEmail(e.target.value)} className="input__input" type="text"></input>
            </div>
            <div className="input__line">
                <p>City</p> 
                <input value={city} onKeyDown={(e) => onEnter(e, customer?._id)} onChange={(e) => setCity(e.target.value)} className="input__input" type="text"></input>
                </div>
            <div className="input__line">
                <p>Date of Birth</p>
                <input value={dateofbirth} onKeyDown={(e) => onEnter(e, customer?._id)} onChange={(e) => setDateofbirth(e.target.value)} className="input__input" type="text"></input>
            </div>

            <Button className="input__button" onClick={() => handleSubmit(customer?._id)} type="edit" text={ type == 'edit' ? 'Edit Customer' : 'Create Customer'} />

        </>
    )
}