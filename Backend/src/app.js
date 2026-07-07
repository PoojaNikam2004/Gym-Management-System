import express from "express";
import cors from "cors";

import membership from "./Routes/membership.js";
import attendance from "./Routes/attendance.js";
import profile from "./Routes/profile.js";
import trainer from "./Routes/trainer.js";



 const app =express();

 app.use(cors());
 app.use(express.json());

 

 app.get("/",(req,res)=>{
    res.send("gym management system backend is running");
 });

 //app.use("/api/member",member);
 app.use("/api/membership",membership);

 app.use("/api/attendance",attendance);

 app.use("/api/profile",profile);
 app.use("/api/trainer",trainer);


 export default app;
 

  