import React, { Component } from 'react'
import Book from "./Book";
import Finance from "./Finance";
import AuthorsList from "./AuthorsList";
import Modal from "./Modal";

class Title extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal = () => {
        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    render(){
        return <div>
            <AuthorsList authors={this.props.title.authors}/>
            <Book book={this.props.title.book} />
            <Finance finance={this.props.title.finance} />'
            <button type="button" onClick={this.showModal}>Subscribe</button>
            <Modal show={this.state.show} handleClose={this.hideModal}>
                <p>Bay! Pay!</p>
            </Modal>
        </div>
    }
}

export default Title
