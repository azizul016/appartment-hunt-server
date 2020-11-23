import express from "express";
import serviceModel from "../models/serviceModel.js";

const router = express.Router();

// Get all services
router.get("/", (req, res) => {
  serviceModel.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Get service by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  serviceModel.findById(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Add a service
router.post("/", (req, res) => {
  const service = req.body;

  serviceModel.create(service, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send("Service created successfully");
    }
  });
});

export default router;
