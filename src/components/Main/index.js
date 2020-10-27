import React from "react"
import UserTab from "../UserTab"
import ModalPic from "../ModalPic"
import "./Main.css"

const Main = () => {
    return (
        <main id="main">
            <div class="container">
                <UserTab />
                <ModalPic />
            </div>
        </main>
    )
}

export default Main

