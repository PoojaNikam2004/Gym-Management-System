
import db from "../Config/db.js";

export const addMember = (req, res) => {

    const {
        full_name,
        email,
        phone,
        gender,
        age,
        address,
        membership_plan,
        join_date,
        expiry_date,
        status,
    } = req.body;

    const sql = `
    INSERT INTO members
    (
      full_name,
      email,
      phone,
      gender,
      age,
      address,
      membership_plan,
      join_date,
      expiry_date,
      status
    )
    VALUES (?,?,?,?,?,?,?,?,?,?)
    `;

    db.query(
        sql,
        [
            full_name,
            email,
            phone,
            gender,
            age,
            address,
            membership_plan,
            join_date,
            expiry_date,
            status,
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message,
                });
            }

            res.status(201).json({
                success: true,
                message: "Member Added Successfully",
            });

        }
    );

};

export const getAllMembers = (req, res) => {

    const sql = "SELECT * FROM members ORDER BY member_id DESC";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.status(200).json({
            success: true,
            totalMembers: result.length,
            members: result
        });

    });

};