import express from "express";
import cors from "cors";

import "./Config/db.js";

import user from "./Routes/user.js";
import member from "./Routes/member.js";
import membership from "./Routes/membership.js";
import attendance from "./Routes/attendance.js";
import profile from "./Routes/profile.js";
import trainer from "./Routes/trainer.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Gym Management System Backend is Running");
});

app.use("/api/user", user);
app.use("/api/members",member);
app.use("/api/membership", membership);
app.use("/api/attendance", attendance);
app.use("/api/profile", profile);
app.use("/api/trainer", trainer);

export default app;