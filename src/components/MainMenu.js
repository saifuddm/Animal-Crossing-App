import React from "react"
import MainItems from "./MainItems"


function MainMenu(props) {
    return (
        <div className="Menu">
            <img style={{margin:'auto'}} src={props.mainlogo} width="90%" height="90%"/>
            <MainItems itemName="Map"/>
            <MainItems itemName="Inventory" />
            <MainItems itemName="Calender" />
            <MainItems itemName="Items" />
        </div>
    )
}

export default MainMenu