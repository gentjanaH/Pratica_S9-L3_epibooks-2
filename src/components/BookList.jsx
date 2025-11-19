import { Container, Row, Form } from 'react-bootstrap';
import OneBook from "./OneBook";

const BookList = function (props) {
    return (
        <Container fluid className="bg-dark px-5">
            <Form className="d-flex justify-content-center">
                <Form.Group className="mb-3 w-50 " controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="Text" placeholder="Cerca" className="bg-dark text-light" />

                </Form.Group>
            </Form>
            <Row className="g-3">
                {props.books.map((book) => (
                    <OneBook key={book.asin} book={book} />
                ))}
            </Row>
        </Container>
    )
}

export default BookList;