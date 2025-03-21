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
router.route('/').get(getGoals).post(setGoal)

// router.put("/:id", updateGoal)
// router.delete("/:id", deleteGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

export { router as goalRouter }
