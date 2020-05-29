import React from "react"
import HeaderElement from "../HeaderElement"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import CalenderCard from "./CalenderCard"
import ls from "local-storage"
class Calender extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false,
            eventName: "",
            eventType: "",
            eventDate: "",
            savedStatus: false,
            savedDate: []
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete =this.handleDelete.bind(this)
    }
    componentDidMount(){
        const prevSavedData = ls.get('animalCrossingCalenderDate')
        if(prevSavedData !== null){
            this.setState({
                savedDate: [...ls.get('animalCrossingCalenderDate')]
            })
        }
        
    }
    componentWillUnmount(){
        ls.set('animalCrossingCalenderDate',this.state.savedDate)
    }
    componentDidUpdate(){
        ls.set('animalCrossingCalenderDate',this.state.savedDate)
    }

    handleClose(){
        this.setState({ show: false, 
                        savedStatus: false,
                        eventName: "",
                        eventType: "",
                        eventDate: ""})
    }
    handleOpen(){
        this.setState({ show: true})
    }
    handleSave(){
        let arrayIndex = this.state.savedDate.length
        this.setState(prevState => {
            return {
                savedStatus: true,
                savedDate: [...prevState.savedDate,
                            {eventId: arrayIndex,
                            eventName: prevState.eventName,
                            eventType: prevState.eventType,
                            eventDate: prevState.eventDate}]
            }
        })
    }
    handleChange(event) {
        const {id, value} = event.target
        this.setState({ [id] : value})
    }
    handleDelete(event){
        console.log("Wants to delete:",event.eventId)
        this.setState(prevState => {
            const updatedState = [...prevState.savedDate]
            let index = updatedState.indexOf(event)
            updatedState.splice(index,1)
            console.log(prevState.savedDate)
            console.log(updatedState)
            return {
                savedDate: updatedState
            }
        })
    }
    render() {
        const itemArray = this.state.savedDate.map((item,index) => {
            return (
                <CalenderCard key={index} item={item} handleDelete={this.handleDelete}/>
            )
        })
        let itemSavedText = this.state.savedStatus? "Saved":"Not Saved"
        return(
            <div>
                <HeaderElement mainlogo={this.props.mainlogo} feature={this.props.feature}/>
                <Button variant="primary" onClick={this.handleOpen} style={{display: 'block',margin: 'auto'}}> Add Entry</Button>
                <div className="ac-item-container">{itemArray}</div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Calender Entry</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="eventName">
                                <Form.Label>Event Name</Form.Label>
                                <Form.Control onChange={this.handleChange} type="text" placeholder="Event Name" value={this.state.eventName}/>
                            </Form.Group>

                            <Form.Group controlId="eventType">
                                <Form.Label>Event Type</Form.Label>
                                <Form.Control as="select" onChange={this.handleChange} value={this.state.eventType}>
                                    <option value=""></option>
                                    <option value="Money Tree">Money Tree</option>
                                    <option value="Meteor Shower">Meteor Shower</option>
                                    <option value="Custom Event">Custom Event</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="eventDate">
                                <Form.Label>Event Date</Form.Label>
                                <Form.Control onChange={this.handleChange} type="text" placeholder="Event Date" value={this.state.eventDate}/>
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Text className="text-muted">
                                    <b>Item</b> {itemSavedText}
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Calender