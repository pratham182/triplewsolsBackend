const express=require("express");


const app=express();
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");
const adminRoutes=require("./routes/adminRoutes");
require("dotenv").config();


const connectDB=require("./db");
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


app.use("/api", userRoutes);
app.use("/api",adminRoutes)

const port=process.env.PORT || 2000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
});