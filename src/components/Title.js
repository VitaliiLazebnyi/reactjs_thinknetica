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
        const { authors, book, finance } = this.props.title;

        return <div className='title'>
            <AuthorsList authors={authors}/>
            <Book book={book} />
            <Finance finance={finance} />
            <button type="button" onClick={this.showModal}>Subscribe</button>
            <Modal show={this.state.show} handleClose={this.hideModal}>
                <p>Bay! Pay!</p>
            </Modal>
        </div>
    }
}

export default Title
