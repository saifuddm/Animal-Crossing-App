import React from "react"
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import FetchData from './FetchData'
class SubItems extends React.Component {
    constructor(){
        super()
        
    }
    // For importing all image as require was not working for filnames being got from the data file
    importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    render() {

        const images = this.importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
        return (
            <div className="sub-item">                
                {/* Card Style */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={images[this.props.item.image]} height="180px" />
                <Card.Body>
                    <Card.Title>{this.props.item.title}</Card.Title>
                    <Card.Text>{this.props.item.text} </Card.Text>
                    <Link to={`/${this.props.item.type}/${this.props.item.title}`}>
                        <Button variant="outline-primary">{this.props.item.buttonName}</Button>
                    </Link>
                </Card.Body>
                </Card>
            </div>
                
        )
    }
    
}

export default SubItems