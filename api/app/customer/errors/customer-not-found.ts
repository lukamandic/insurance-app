export class CustomerNotFoundError extends Error {
    public status = '404';
  
    constructor() {
      super("Customer not found");
    }
  }
  