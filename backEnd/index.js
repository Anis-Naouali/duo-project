const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();
const database = require("./mongoDb/index");
const db = require("./mongoDb");

app.use(cors());
app.use(express.json())

app.get("/api/products", (req, res) => {
  database
    .getAllProducts()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(function (error) {
      res.status(500).send(error);
    });
});

app.post("/api/products/add", (req, res) => {
  database
    .addProduct(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.put("/api/products/update/:id", (req, res) => {
  database
    .uppProduct(req.params.id, req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(function (error) {
      res.status(500).send(error);
    });
});
app.delete("/api/products/delete/:id", (req, res) => {
  database
    .deleteProduct(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(function (error) {
      res.status(500).send(error);
    });
});

//user
app.get("/api/users", (req, res) => {
  database
    .getAllusers()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(function (error) {
      res.status(500).send(error);
    });
});
app.get("api/users/:email", (req, res) => {
  database
    .getUser(req.params.email)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(function (error) {
      res.status(500).send(error);
    });
});
app.post("/api/users/add", (req, res) => {
  database
    .addadmin(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
