import express from "express";
import { authorization } from "../middleware/middleware.js";
import {
  certificate_Create,
  certificate_GetAll,
  certificate_GetOne,
  certificate_Delete,
} from "../controller/certificate.controllers.js";

const certificate = express.Router();

certificate.post("/certificate", certificate_Create);          // Submit form → save to DB
certificate.get("/certificate", authorization, certificate_GetAll);   // Admin: see all entries
certificate.get("/certificate/:id", authorization, certificate_GetOne);
certificate.delete("/certificate/:id", authorization, certificate_Delete);

export default certificate;