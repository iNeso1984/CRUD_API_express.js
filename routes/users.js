import express from "express";
import { createUser, getUsers, getId, updateUser, deleteUser } from "../controllers/users.js";


const router = express.Router(); //initialize router




//all routers in here are starting with /users from app.use in index.js


router.post("/", createUser); 
router.get("/", getUsers);
router.get("/:id", getId);

router.patch("/:id", updateUser);

//delete

router.delete("/:id", deleteUser);

export default router;
