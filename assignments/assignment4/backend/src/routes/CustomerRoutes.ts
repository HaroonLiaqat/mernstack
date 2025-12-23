import { Router } from "express";
import CustomerController from "../controllers/CustomerController";

const router = Router();

const customerController = new CustomerController();

router.get("/", customerController.getAllCustomers);
router.get("/:id", customerController.getCustomerById);
router.post("/", customerController.createCustomer);
router.patch("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

export default router;
