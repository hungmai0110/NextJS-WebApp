const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8000;

// Đường dẫn đến file db.json
const dbFilePath = "./db.json";

// Allow requests from http://localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // Enable credentials (e.g., cookies)
  })
);

// Middleware để đọc file db.json và trả về nó dưới dạng JSON
app.use((req, res, next) => {
  fs.readFile(dbFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading db.json:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      req.db = jsonData; // Lưu dữ liệu vào req để có thể sử dụng ở các route khác
      next();
    } catch (error) {
      console.error("Error parsing db.json:", error);
      res.status(500).send("Internal Server Error");
    }
  });
});

// Route để trả về dữ liệu từ db.json
app.get("/products", (req, res) => {
  res.json(req.db.products); // Trả về dữ liệu từ db.json
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
