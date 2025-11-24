

import MyNav from "./components/MyNav"
// import AllTheBooks from "./components/AllTheBooks"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
// import OneBook from "./components/OneBook"
import fantasy from "./data/fantasy.json"
import BookList from "./components/BookList"
import 'bootstrap/dist/css/bootstrap.min.css'
import CommentArea from "./components/CommentArea"
import { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap';



class App extends Component {

  state = {
    selectedBook: null

  }

  handleBookSelect = (book) => {
    this.setState({ selectedBook: book })
  }

  render() {

    return (
      <>

        <Welcome />
        <MyNav />
        {/* <OneBook book={fantasy[1]} /> */}

        <Container fluid className=" bg-dark">
          <Row >

            <Col xs={6} >
              <BookList books={fantasy}
                handleBookSelect={this.handleBookSelect}
                selectedBook={this.state.selectedBook} />
            </Col>
            <Col xs={6} >
              {this.state.selectedBook ? (
                <CommentArea
                  elementId={this.state.selectedBook.asin}
                  bookTitle={this.state.selectedBook.title} />
              ) : (
                <div className="d-flex flex-wrap align-content-center justify-content-center" style={{ height: "90px" }} >
                  <p className="text-info text-center my-2">Seleziona un libro per leggere i commenti.</p>
                </div>
              )
              }
            </Col>
          </Row>



        </Container>

        {/* <AllTheBooks /> */}

        <MyFooter />
      </>
    )
  }
}

export default App

