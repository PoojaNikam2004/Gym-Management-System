import mysql from "mysql2";


  const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql123",
  database: "gym_management_system",
});


db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed");
    console.log(err);
  } else {
    console.log("✅ MySQL Connected Successfully");
  }
});

export default db;