import { Col, Row, Form } from 'react-bootstrap';
import OneBook from "./OneBook";
import { Component } from 'react'

class BookList extends Component {
    state = {
        searchQuery: "",
    }
    render() {

        return (
            <>

                <Col xs={12} >
                    <Form className="d-flex justify-content-center my-3 ">
                        <Form.Group className="mb-3  w-50 " controlId="formBasicEmail">
                            <Form.Label></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Cerca"
                                value={this.state.searchQuery}
                                onChange={(e) => {
                                    this.setState({ searchQuery: e.target.value })
                                }}
                                className="bg-secondary text-light " />

                        </Form.Group>
                    </Form>
                </Col>
                <Row xs={1} md={2} xl={3} className="g-3">
                    {this.props.books
                        .filter((book) =>
                            book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
                        )
                        .map((book) => (
                            <OneBook
                                key={book.asin}
                                book={book}
                                handleBookSelect={this.props.handleBookSelect}
                                selectedBook={this.props.selectedBook} />
                        ))}
                </Row>

            </>

        )
    }
}



export default BookList;