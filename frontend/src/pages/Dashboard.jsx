import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import GoalForm from "../components/goalForm"

export default function Dashboard() {
    const navigate = useNavigate()
    const { user } = useSelector((state) => {
        return state.auth
    })

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user, navigate])

    return (
        <>
            <section className="heading">
                <h1>Welcom {user && user.name}</h1>
                <p>Goal Dashboard</p>
            </section>
            <GoalForm />
        </>
    )
}
