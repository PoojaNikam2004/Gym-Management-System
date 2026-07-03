import express from "express";
const router = express.Router();
import { getMembers, getMemberById, addMembers,updateMembers,deleteMembers} from "../controllers/memberController.js";
   

router.get("/",getMembers);