import React from "react"
import HeaderElement from "./HeaderElement"
import SubItems from "./SubItems"
import cardItemsData from "./cardItemsData"

class SubMenu extends React.Component {
    constructor(){
        super()
    }
    render() {
        const itemArray = cardItemsData.map(itemObject => {
            if(itemObject.type == this.props.type){
                
                return (
                    <SubItems key={itemObject.id} item={itemObject}/>
                )
            }
        })
        return (
            <div>            
                <HeaderElement mainlogo={this.props.mainlogo} feature={this.props.type}/>
                <div className="sub-menu">
                    {itemArray}
                </div>
            </div>
        )
    }
    
}

export default SubMenu