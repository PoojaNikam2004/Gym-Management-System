import express from "express";
import {
  addMember,
  getAllMembers,
 // getMemberById,
 // updateMember,
 // deleteMember,
} from "../Controllers/memberController.js";

import verifyToken from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, addMember);
router.get("/", verifyToken, getAllMembers);
 // router.get("/:id", verifyToken, getMemberById);
 // router.put("/:id", verifyToken, updateMember);
 // router.delete("/:id", verifyToken, deleteMember);

export default router;