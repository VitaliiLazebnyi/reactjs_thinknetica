import React, { Component } from 'react'
import Modal from "./Modal";

class Button extends Component {c
    constructor(props) {
        super(props)
        this.state = {
            show: false
        };

        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)

        this.button_text = this.props.button_text
        this.modal_text = this.props.modal_text
    }

    showModal = () => {
        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    render() {
        return ( <div className='modalControllerButton'>
                <button type="button" onClick={this.showModal}>{this.button_text}</button>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>{this.modal_text}</p>
                </Modal>
            </div>
        )
    }
}

export default Button
