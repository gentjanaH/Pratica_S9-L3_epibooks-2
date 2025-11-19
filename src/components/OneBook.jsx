import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const OneBook = function ({ book }) {
    return (
        <Container>
            <Row className="justify-content-center my-5" >
                <Col sm={12} md={6} lg={4}>
                    <Card key={book.asin} >
                        <Card.Img variant="top" src={book.img} className="h-25" />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>

                            <Button variant="primary">Apri</Button>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </Container>
    )
}

export default OneBook;