import { Col, Card, Button } from 'react-bootstrap';
import { Component } from 'react'

class OneBook extends Component {

    state = {
        selected: false
    }

    render() {
        return (
            <Col sm={12} md={4} lg={3} className="mx-auto">
                <Card className={`h-100 ${this.state.selected ? "border border-3 border-danger" : "border-info"}`}>
                    <Card.Img
                        variant="top"
                        src={this.props.book.img}
                        className="h-75 w-100"
                        onClick={() => this.setState({ selected: !this.state.selected })
                        }
                    />
                    <Card.Body className="d-flex flex-column justify-content-around ">
                        <Card.Title>{this.props.book.title}</Card.Title>
                        <Card.Text>
                            {this.props.book.category}

                        </Card.Text>
                        <div className="d-flex justify-content-between flex-wrap align-baseline">
                            <strong className="text-success">€ {this.props.book.price}</strong>
                            <Button variant="info" className="rounded-pill">Buy</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col >
        )
    }




}

export default OneBook;