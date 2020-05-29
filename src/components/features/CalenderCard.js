import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
function CalenderCard(props){
    return(
        <div className="ac-item">                
            {/* Item Card Style */}
            <Card style={{ width: '12rem' }} >
                <Card.Header>
                    {props.item.eventName}
                </Card.Header>
                <Card.Body>
                    <Card.Title>{props.item.eventType}</Card.Title>
                    <Card.Text><b>Date:</b> {props.item.eventDate}</Card.Text>
                    <Card.Text className="text-muted">Event Id: {props.item.eventId}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-danger" size="sm" onClick={() => props.handleDelete(props.item)}>Delete Item</Button> 
                </Card.Footer>
            </Card>
        </div> 
    )
}



export default CalenderCard

