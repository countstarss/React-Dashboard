import express from "express";
import Product from "../models/Product.js"

const router = express.Router();

router.get('/products',async (req,res) => {
    try {
        const products = await Product.find().limit(50)
        
        if (products) {
            res.status(200).json(products)
        }else {
            res.status(200).json({ message:"Hello,Express,No PORODUCTS" })
        }
    }catch (error) {
        res.status(500).json({ message: error.messaage})
    }
});

export default router;