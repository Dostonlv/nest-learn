import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {

    private customers:Customer[] = [
        {
            id: 1,
            email: 'radnnd@gmail.com',
            name: 'radwan',

        },
        {
            id: 2,
            email: 'djdjjd@gmail.com',
            name: 'radwan',

        },
        {
            id: 3,
            email: 'ssss@gmail.com',
            name: 'radwan',

        }
    ]

    findCustomerByID(id:number) {
        return this.customers.find(user => user.id === id)
    }
    createCustomer(CustomerDto:CreateCustomerDto){
         this.customers.push(CustomerDto)
    }
    getCustomers(){
        return this.customers
    }
}
