import express from "express";
import Transaction from "../models/Transaction.js"

const router = express.Router();

router.get('/transactions',async (req,res) => {
    try {
        const transactions = await Transaction.find()
        .limit(100)
        .sort({ createdAt: -1 })
        
        if (transactions) {
            res.status(200).json(transactions)
        }else {
            res.status(200).json({ message:"Hello,Express,No PORODUCTS" })
        }
    }catch (error) {
        res.status(500).json({ message: error.messaage})
    }
});

export default router;