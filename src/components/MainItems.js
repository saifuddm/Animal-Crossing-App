import React from "react"
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";

class MainItems extends React.Component {
    constructor(){
        super()
        this.state = {
            fontSize: 30
        }
    }

    render() {
        return(
            <div className="menu-item">
                <Link to={this.props.itemName} >
                <Button 
                variant="info" 
                size="lg">
                    {this.props.itemName}
                </Button>
                </Link>
            </div>
        )
    }
    
}


export default MainItems