import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "../Schema/admin.js";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected successfully");

    // Initialize default admin
    const defaultEmail = "icabmetconf@gmail.com";
    const defaultPassword = "Icabmet@2027*";
    
    const adminExists = await Admin.findOne({ email: defaultEmail });
    if (!adminExists) {
      await Admin.create({ email: defaultEmail, password: defaultPassword });
      console.log("✅ Default admin created successfully");
    } else {
      // Update password if it doesn't match
      if (adminExists.password !== defaultPassword) {
        adminExists.password = defaultPassword;
        await adminExists.save();
        console.log("✅ Default admin password updated successfully");
      }
    }
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

export default connectDB;