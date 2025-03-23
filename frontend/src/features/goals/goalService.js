import axios from 'axios'

const API_URL = '/api/goals/'

// Create new goal
const createGoal = async(goalData, token) => {
    // console.log(token)
    // console.log(goalData)
    const config = {
        header: {
            Authorization: `Bearer ${token}`,
        },
    }
    // console.log( API_URL, goalData)
    console.log(config)
    const response = await axios.post(API_URL, goalData, config)
    // console.log(response)

    return response.data
}

const goalService = {
    createGoal,
}

export default goalService