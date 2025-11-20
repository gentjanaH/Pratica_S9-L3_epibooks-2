import { Col, Card, Button } from 'react-bootstrap';
import { Component } from 'react'
import CommentArea from "./CommentArea";
import AddComment from './AddComment';


class OneBook extends Component {

    state = {
        selected: false,
        showForm: false,
        refreshKey: 0
    }


    render() {
        return (
            <Col sm={6} md={4} lg={3} className="mx-auto">
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

                            <Button variant="info"
                                className="rounded-pill"
                                onClick={() => this.setState({ showForm: !this.state.showForm })}>addComment</Button>
                        </div>
                    </Card.Body>
                    {/* attivo l'area commenti se la card è selezionata e do una proprietà in base elementId all'id del libro */}
                    {this.state.selected && (
                        <CommentArea key={this.state.refreshKey} elementId={this.props.book.asin} />
                    )}

                    {this.state.showForm && (
                        <AddComment elementId={this.props.book.asin}
                            title={this.props.book.title}
                            onAddComment={() => this.setState({ refreshKey: this.state.refreshKey + 1 })} />
                    )}

                </Card>
            </Col >
        )
    }




}

export default OneBook;