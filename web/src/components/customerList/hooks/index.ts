import { deleteCustomer } from "../../../services"

export const useDeleteCustomer = () => {
    
    const removeCustomer = async (id: string): Promise<object | undefined> => {
        try {
            const deleted: object | undefined = await deleteCustomer(id)
            
            return deleted
        } catch(e) {
            console.log(e)
        }
    }

    return { removeCustomer }
}