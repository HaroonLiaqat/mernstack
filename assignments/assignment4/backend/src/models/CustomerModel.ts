import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const customerSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
    unique: true,
    default: () => uuidv4(),
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters long"],
    maxlength: [25, "Name cannot exceed 25 characters"],
  },
  imageUrl: {
    type: String,
    required: [true, "Image URL is required"],
    trim: true,
    validate: {
      validator: function (v: string) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)$/i.test(v);
      },
      message: "Image URL must be a valid URL pointing to an image",
    },
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [1, "Age must be at least 1"],
    max: [99, "Age cannot exceed 99"],
    validate: {
      validator: Number.isInteger,
      message: "Age must be an integer",
    },
  },
  address: {
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
      minlength: [2, "City name must be at least 2 characters long"],
      maxlength: [50, "City name cannot exceed 50 characters"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
      minlength: [2, "Country name must be at least 2 characters long"],
      maxlength: [50, "Country name cannot exceed 50 characters"],
    },
  },
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
