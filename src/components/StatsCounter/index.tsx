import React, { FC } from "react"

type Props = {
    value: number
    id: string
}

const StatsCounter: FC<Props> = (props) => {
    const handleFollowers = ({ value, id }:Props) => {
        if (id === "Followers") {
            return [value, id]
        }
    }
    const handleFollowing = ({ value, id }:Props) => {
        if (id === "Following") {
            return [value, id]
        }
    }

    let ArrFlwrs: any = handleFollowers(props)
    let ArrFlwng: any = handleFollowing(props)

    return (
        <div className="container">
            <p>{props.id === "Followers" ? ArrFlwrs[0] : ArrFlwng[0]}</p>
            <p>{props.id === "Followers" ? ArrFlwrs[1] : ArrFlwng[1]}</p>
        </div>
    )
}

export default StatsCounter
