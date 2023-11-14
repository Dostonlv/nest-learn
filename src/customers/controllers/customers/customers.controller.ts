import { CreateCustomerDto } from './../../dtos/CreateCustomer.dto';
import {  Controller,Get, Param, Res,Req, ParseIntPipe, HttpException, Post, Body } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';
import {   Response } from 'express';

@Controller('customers')
export class CustomersController {
    constructor(private customerService:CustomersService) {}
  @Get(':id')
  getCustomer(
  @Param('id',ParseIntPipe) id:number,
  @Res() res:Response) {
    const customer =  this.customerService.findCustomerByID(id);

    if (customer){
        res.status(200).json (customer)
    }else{
        res.status(404).send({msg:'Customer not found'})
    }
  }

  @Get('/search/:id')
  searchCustomerByID(
    @Param('id',ParseIntPipe) id:number
  ){
    const customer = this.customerService.findCustomerByID(id);
    if (customer) return customer;
    else throw new HttpException('Customer not found',404)
  }

  @Get('')
  getAllCustomers(){
    return this.customerService.getCustomers()
  }

  @Post('create')
  createCustomer(@Body() createCustomerDto:CreateCustomerDto){
    return this.customerService.createCustomer(createCustomerDto)
   
  }
}
