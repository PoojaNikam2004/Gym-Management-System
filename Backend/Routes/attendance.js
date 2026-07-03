import express from "express";
const router = express.Router();


router.get("/",(req,res)=>{
    res.json({
        massage:"attendance route is working"});
})

export default router;
