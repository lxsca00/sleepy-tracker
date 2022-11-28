import React from "react"
import { useNavigate } from "react-router-dom"

const Welcome = () => {

    const navigate = useNavigate()

    return(
        <section>
            <h1>Sleepy tracker</h1>
            <p>To sleep well is to look and feel better</p>
            <p>Let's go!</p>
            <button onClick={() => navigate("/register")}>Get started</button>
        </section>
    )
}

export {Welcome}