const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";
const dbFilePath = "./db.json";

app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);

app.use((req, res, next) => {
  fs.readFile(dbFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading db.json:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      req.db = jsonData;
      next();
    } catch (error) {
      console.error("Error parsing db.json:", error);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.get("/products", (req, res) => {
  res.json(req.db.products);
});

app.get("/products/:id", (req, res) => {
  const productId = req.params.id;

  const product = req.db.products.find(
    (product) => product.id === parseInt(productId)
  );

  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
});

app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = req.db.products.findIndex((product) => product.id === id);

  if (index !== -1) {
    req.db.products.splice(index, 1);
    saveDataToDb(req.db, res);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.get("/staffs", (req, res) => {
  res.json(req.db.staffs);
});

function saveDataToDb(data, res) {
  const jsonData = JSON.stringify(data, null, 2);

  fs.writeFile(dbFilePath, jsonData, (err) => {
    if (err) {
      console.error("Error writing to db.json:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(data.products);
    }
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
