import React from "react"

class CustomMap extends React.Component {


    render() {
        return(
            <div>
                <h1>{this.props.feature}</h1>
            </div>
        )
    }
}

export default CustomMap