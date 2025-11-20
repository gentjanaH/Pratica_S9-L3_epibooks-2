import { Container, Row, Form } from 'react-bootstrap';
import OneBook from "./OneBook";
import { Component } from 'react'

class BookList extends Component {
    state = {
        searchQuery: "",
    }
    render() {

        return (
            <Container fluid className="bg-dark px-5">
                <Form className="d-flex justify-content-center">
                    <Form.Group className="mb-3 w-50 " controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Cerca"
                            value={this.state.searchQuery}
                            onChange={(e) => {
                                this.setState({ searchQuery: e.target.value })
                            }}
                            className="bg-secondary text-light" />

                    </Form.Group>
                </Form>
                <Row className="g-3">
                    {this.props.books
                        .filter((book) =>
                            book.title.toLowerCase().includes(this.state.searchQuery.toLocaleLowerCase())
                        )
                        .map((book) => (
                            <OneBook key={book.asin} book={book} />
                        ))}
                </Row>
            </Container>
        )
    }
}



export default BookList;