require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

connectDB();

app.get("/", (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
  res.json({ message: "Welcome to the API", database: dbStatus });
});

app.get("/salons",async (req,res)=>{
  const salons = await Salon.find();
  res.json(salons);
});

app.post("/api/addSalon", async (req, res) => {
  try {
      const { name, description, location } = req.body;
      if (!name || !description || !location) {
          return res.status(400).json({ error: "All fields are required" });
      }

      const newSalon = new Salons({ name, description, location });
      await newAttraction.save();
      res.status(201).json(newSalon); 
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log(`🚀 Server running on port ${PORT}`));
