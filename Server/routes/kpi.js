import express from "express";
import KPI from "../models/KPI.js"

const router = express.Router();

router.get('/kpis',async (req,res) => {
    try {
        const kpis = await KPI.find()
        
        if (kpis) {
            res.status(200).json(kpis)
        }else {
            res.status(200).json({ message:"Hello,Express,No KPI" })
        }
    }catch (error) {
        res.status(500).json({ message: error.messaage})
    }
});

export default router;