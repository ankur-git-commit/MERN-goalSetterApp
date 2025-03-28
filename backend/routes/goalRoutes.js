import express from "express"
import {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
} from "../controller/goalController.js"
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

// router.get("/", getGoals)
// router.post("/", setGoal)
router.route('/').get(protect, getGoals).post(protect, setGoal)

// router.put("/:id", updateGoal)
// router.delete("/:id", deleteGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

export { router as goalRouter }
