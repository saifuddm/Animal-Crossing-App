import React from "react"
import Card from 'react-bootstrap/Card'

function ACItemCard(props){
    // const materialItems = props.item["Materials Needed"].map()
    
    // for (let key in props.item["Materials Needed"]) {
    //     console.log(key)
    // }
    
    //Mapping Object 
    // console.log(
    //     Object.entries(props.item["Materials Needed"])
    //     .map( ([key, value]) => `My key is ${key} and my value is ${value}` )
    //   )

    // Mapping Object to create element
    // Object.entries(buttonCaptions)
    // .map( ([key, value]) => <button key={key}>{value}</button> )
    return(
        <div className="ac-item">                
            {/* Item Card Style */}
            <Card style={{ width: '12rem' }}>
                <Card.Header>{props.item.Name}</Card.Header>
                <Card.Img variant="top" src={props.item.Image} height="80px" width="80px"/>
                <Card.Body>
                    <Card.Title>Sell Price: {props.item["Sell Price"]}</Card.Title>
                    <Card.Text><b>Obtained From:</b> {props.item["Obtained From"]}</Card.Text>
                </Card.Body>
                {console.log(props.item["Materials Needed"])}
                {/* <Card.Body>
                    <Card.Text><b>Materials Needed:</b> {props.item["Materials Needed"]}</Card.Text>
                </Card.Body> */}
            </Card>
        </div> 
    )
}



export default ACItemCard