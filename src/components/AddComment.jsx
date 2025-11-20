import { Component } from "react"
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


class addComment extends Component {
    state = {
        singleComment: {
            comment: "",
            rate: "",
            elementId: this.props.elementId
        }
    }
    submitComment = (e) => {
        e.preventDefault()
        const URL = "https://striveschool-api.herokuapp.com/api/comments/";

        fetch(URL + this.props.elementId, {
            method: "POST",
            body: JSON.stringify(this.state.singleComment),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkY2IxNmY0YmQ0NzAwMTU4NWIyMjciLCJpYXQiOjE3NjM2NDU3NDAsImV4cCI6MTc2NDg1NTM0MH0.ZctnvLx_XnYO0Ral46j5zSTTvxo95uelOccqymB3xlg",
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                if (res.ok) {
                    alert("Commento inviato con successo")
                    this.setState({
                        singleComment: {
                            comment: "",
                            rate: "",
                            elementId: this.props.elementId
                        }
                    })
                } else {
                    throw new Error("Errore nell'invio del commento", res.status)
                }
            })
            .catch((err) => {
                console.log("Errore:", err)
            })
    }



    render() {
        return (
            <Form onSubmit={this.submitComment}>
                {/* <p>{this.props.title}</p> */}
                <Form.Group className="mb-3" controlId="rate">
                    <Form.Label>Voto</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="da 1 a 5"
                        min={1}
                        max={5}
                        value={this.state.singleComment.rate}
                        onChange={(e) =>
                            this.setState({
                                singleComment: {
                                    ...this.state.singleComment,
                                    rate: e.target.value
                                }
                            })
                        } />
                </Form.Group>

                <Form.Group className="mb-3" controlId="comment">
                    <Form.Label></Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Scrivi qui la tua recensione"
                        rows={3}
                        value={this.state.singleComment.comment}
                        onChange={(e) =>
                            this.setState({
                                singleComment: {
                                    ...this.state.singleComment,
                                    comment: e.target.value
                                }
                            })
                        } />
                </Form.Group>

                <Button variant="primary" onClick={this.submitComment}>
                    Invia Commento
                </Button>
            </Form>
        )
    }
}



export default addComment