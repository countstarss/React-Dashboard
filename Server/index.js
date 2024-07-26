// MARK: - Import
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// MARK: - Files
import KpiRoutes from "./routes/kpi.js"
import ProductRoutes from "./routes/product.js"
import TransactionRoutes from "./routes/transaction.js"

import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";

import { kpis,products,transactions } from "./data/data.js";


//TODO: Configurations
//MARK: - Configurations

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

//TODO: Routes
//MARK: - Routes


app.use("/",KpiRoutes)
app.use("/",ProductRoutes)
app.use("/",TransactionRoutes)


/*
TODO: Mongoose
MARK: - Mongoose
*/

const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    app.listen(PORT, () => console.log(`Database connect success, Server is runing on port:${PORT}`));

    // Add data once
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);
  })
  .catch((error) => console.log(`Failed to connect to database\n-> error:${error}`));
