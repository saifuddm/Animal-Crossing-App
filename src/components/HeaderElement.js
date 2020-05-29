import React from "react"
import {withRouter} from "react-router-dom"

class HeaderElement extends React.Component {

    render(){
        return(
            <header>
                <img style={{display:'inline-block', height:'10vh',cursor:'pointer'}} src={this.props.mainlogo} onClick={() => this.props.history.goBack()}/>
                <h1 style={{
                    display:'inline-block',fontSize: '2.5vh',
                    verticalAlign: 'sub',paddingLeft: '20px'}}>
                        {this.props.feature}
                </h1>
            </header>
        )
    }
    
}

export default withRouter(HeaderElement)