import db from "../Config/db.js";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

// ================= REGISTER =================

export const register = (req, res) => {
  const { username, email, password } = req.body;

  // Check email already exists
  const checkSql = "SELECT * FROM users WHERE email = ?";

  db.query(checkSql, [email], async (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    try {
      // Hash Password
      const hashedPassword = await bcrypt.hash(password, 10);

      const insertSql =
        "INSERT INTO users(username, email, password) VALUES (?, ?, ?)";

      db.query(
        insertSql,
        [username, email, hashedPassword],
        (err, result) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: err.message,
            });
          }

          res.status(201).json({
            success: true,
            message: "User Registered Successfully",
          });
        }
      );
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });
};

// ================= LOGIN =================

export const login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(password, user.password);

   const token = jwt.sign(
  {
    user_id: user.user_id,
    email: user.email,
    role: user.role,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1d",
  }
);
    res.status(200).json({
      success: true,
      message: "Login Successful",
      token: token,
      user: {
        user_id: user.user_id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  });
};