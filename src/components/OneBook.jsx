import { Col, Card } from 'react-bootstrap';
import { Component } from 'react'

class OneBook extends Component {

    state = {
        selected: false
    }

    render() {
        return (
            <Col sm={12} md={4} lg={3} className="mx-auto">
                <Card className={`h-100 ${this.state.selected ? "border border-3 border-danger" : ""}`}>
                    <Card.Img
                        variant="top"
                        src={this.props.book.img}
                        className="h-75 w-100"
                        onClick={() => this.setState({ selected: !this.state.selected })
                        }
                    />                 <Card.Body >
                        <Card.Title>{this.props.book.title}</Card.Title>

                    </Card.Body>
                </Card>
            </Col >
        )
    }




}

export default OneBook;