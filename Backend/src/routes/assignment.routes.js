import { Router } from "express";
import { getAssignments, giveAssignment, submitAssignments } from "../controllers/assignment.controller.js";
 const router = Router();
 router.route("/assignments").post(giveAssignment)
 router.route("/getAssignments").get(getAssignments)
 router.route("/")
 export default router;