import { nextTick } from 'process'
import { server } from '../server'
import { CustomerService } from './customer.service'

server.post('/customer', async (req, res, next) => {
    try {
        const created = await new CustomerService().create(req.body)

        res.json(created)

    } catch (e) {
        next(e)
    }
})

server.get('/customers', async (req, res, next) => {
    const { id } = req.params
    try {
        const found = await new CustomerService().find()

        res.json(found)
    } catch (e) {
        next(e)
    }
})

server.get('/customer/:id', async (req, res, next) => {
    const { id } = req.params

    try {
        const found = await new CustomerService().findOne(id)

        res.json(found)
    } catch (e) {
        next(e)
    }
})

server.delete('/customer/:id', async (req, res, next) => {
    const { id } = req.params

    try {
        const deleted = await new CustomerService().deleteOne(id)

        res.json({
            deleted
        })
        
    } catch (e) {
        next(e)
    }
})

server.put('/customer/:id', async (req, res, next) => {
    const { id } = req.params
    const data = req.body

    try {
        const updated = await new CustomerService().updateOne(id, data)

        res.json({
            updated: true
        })
    } catch (e) {
        next(e)
    }
})

server.get('/customer/price/:id', async (req, res, next) => {
    const { id } = req.params

    try {
        const found = await new CustomerService().calculatePrice(id)

        res.json(found)
    } catch (e) {
        next(e)
    }
})