import React from "react"
import StatsCounter from "../StatsCounter/index"
import "./Stats.css"

const Stats = () => {
    return (
        <ul id="stats">
            <li>
                <StatsCounter value={4356} id="Followers" />
            </li>
            <li>
                <StatsCounter value={532} id="Following" />
            </li>
        </ul>
    )
}

export default Stats

