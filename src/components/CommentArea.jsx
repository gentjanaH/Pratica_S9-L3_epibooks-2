import { Component } from "react";

import CommentList from "./CommentList";
import { Container, Row, Col } from "react-bootstrap";



class CommentArea extends Component {

    state = {
        comments: [],
        loading: true
    }

    getComments = function () {
        const URL = "https://striveschool-api.herokuapp.com/api/comments/";

        fetch(URL + this.props.elementId, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkY2IxNmY0YmQ0NzAwMTU4NWIyMjciLCJpYXQiOjE3NjM2NDU3NDAsImV4cCI6MTc2NDg1NTM0MH0.ZctnvLx_XnYO0Ral46j5zSTTvxo95uelOccqymB3xlg",
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()

                } else throw new Error("Errore nel recupero commenti", res.status)

            })
            .then((arrayOfComment) => {
                console.log(arrayOfComment)
                this.setState({
                    comments: arrayOfComment,
                    loading: false
                })
            })
            .catch((err) => {
                console.log("Errore:", err)
            })


    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.elementId !== this.props.elementId) {
            this.getComments()
        }

    }

    render() {

        return (
            <>

                <Row >
                    <Col xs={12} className="d-flex flex-wrap align-content-center justify-content-center" style={{ height: "90px" }}>
                        <h5 className="text-info">Recensioni</h5>
                    </Col>
                    <Col>

                        <CommentList
                            comments={this.state.comments}
                            title={this.props.bookTitle} />
                    </Col>
                </Row>




            </>

        );
    }

}

export default CommentArea