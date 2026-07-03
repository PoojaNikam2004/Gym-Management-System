import express from "express";
const router = express.Router();

  router.get("/",(req,res)=>{
    res.json({massage:"membership route is working"});
  })

  export default router;