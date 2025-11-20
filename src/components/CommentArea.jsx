import { Component } from "react";

import CommentList from "./CommentList";



class CommentArea extends Component {
    state = {
        comments: []

    }

    getComments = function () {
        const URL = "https://striveschool-api.herokuapp.com/api/comments/" + this.props.elementId;

        fetch(URL, {
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
                    comments: arrayOfComment
                })
            })
            .catch((err) => {
                console.log("Errore:", err)
            })


    }
    componentDidMount() {
        this.getComments()
    }

    render() {

        return (
            <CommentList comments={this.state.comments} />
        );
    }

}

export default CommentArea