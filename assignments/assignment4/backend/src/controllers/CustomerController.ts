import { Request, Response } from "express";
import Customer from "../models/CustomerModel";

class CustomerController {
  async getAllCustomers(req: Request, res: Response) {
    try {
      const customers = await Customer.find();
      res.status(200).json({
        success: true,
        message: "Customers retrieved successfully",
        data: customers,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch customers",
        error: error.message,
      });
    }
  }

  async getCustomerById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const customer = await Customer.findOne({ customerId: id });
      if (!customer) {
        return res.status(404).json({
          success: false,
          message: "Customer not found",
          error: `No customer found with ID: ${id}`,
        });
      }
      res.status(200).json({
        success: true,
        message: "Customer retrieved successfully",
        data: customer,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch customer",
        error: error.message,
      });
    }
  }

  async createCustomer(req: Request, res: Response) {
    try {
      const { name, imageUrl, age, address } = req.body;
      if (!name || !imageUrl || !age || !address) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          error:
            "Missing required fields: name, imageUrl, age, and address are required",
        });
      }
      if (!address.city || !address.country) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          error: "Address must include both city and country",
        });
      }
      const newCustomer = new Customer({
        name,
        imageUrl,
        age,
        address: {
          city: address.city,
          country: address.country,
        },
      });
      await newCustomer.save();
      res.status(201).json({
        success: true,
        message: "Customer created successfully",
        data: newCustomer,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to create customer",
        error: error.message,
      });
    }
  }

  async updateCustomer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, imageUrl, age, address } = req.body;
      const customer = await Customer.findOne({ customerId: id });
      if (!customer) {
        return res.status(404).json({
          success: false,
          message: "Customer not found",
          error: `No customer found with ID: ${id}`,
        });
      }
      if (name) customer.name = name;
      if (imageUrl) customer.imageUrl = imageUrl;
      if (age) customer.age = age;
      if (address && customer.address) {
        if (address.city) customer.address.city = address.city;
        if (address.country) customer.address.country = address.country;
      }
      await customer.save();
      res.status(200).json({
        success: true,
        message: "Customer updated successfully",
        data: customer,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to update customer",
        error: error.message,
      });
    }
  }

  async deleteCustomer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const customer = await Customer.findOneAndDelete({ customerId: id });
      if (!customer) {
        return res.status(404).json({
          success: false,
          message: "Customer not found",
          error: `No customer found with ID: ${id}`,
        });
      }
      res.status(200).json({
        success: true,
        message: "Customer deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to delete customer",
        error: error.message,
      });
    }
  }
}

export default CustomerController;
