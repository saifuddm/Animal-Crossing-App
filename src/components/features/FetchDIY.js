import React from "react"
import ACItemCard from "./ACItemCard"
import HeaderElement from "../HeaderElement"
import Spinner from 'react-bootstrap/Spinner'
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
class FetchDIY extends React.Component {

    constructor() {
        super()
        this.state = {
            loading: true,
            data: [],
            searchTerm: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    async componentDidMount() {
        let featureVAR = this.props.feature
        const url="https://ac-python-api.herokuapp.com/"+ featureVAR
        console.log(url)
        const response = await fetch(url)
        const dataJSON = await response.json()
        this.setState({
            loading: false, 
            data: dataJSON[featureVAR]
        })
    }

    handleChange(event) {
        const {id, value} = event.target
        this.setState({ [id] : value})
    }

    render() {
        const acItemArray = this.state.data.filter(item => (item["Name"].toLowerCase()).includes(this.state.searchTerm.toLowerCase())).map(acItemObject => {
            return <ACItemCard key={acItemObject.id} item={acItemObject}/>
        })
        
        
        return(
            <div>
                <HeaderElement mainlogo={this.props.mainlogo} feature={this.props.feature} />
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        value={this.state.searchTerm}
                        id="searchTerm"
                        onChange={this.handleChange}
                        placeholder="Item Name"/>
                </InputGroup>
                {this.state.loading || !this.state.data ? (
                    <Spinner style={{display:'flex',margin:'auto'}} animation="grow" variant="info"/>
                ):(
                    <div className="ac-item-container">
                       {acItemArray}
                    </div>  
                )}
            </div>
        )
    }
}

export default FetchDIY