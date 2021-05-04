import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

class ModalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }

  render() {
    return ( <div className='modalControllerButton'>
      <button type="button" onClick={this.showModal}>
        {this.props.button_text}
      </button>
      <Modal show={this.state.show} handleClose={this.hideModal}>
        <p>{this.props.modal_text}</p>
      </Modal>
    </div>
    );
  }
}

ModalButton.propTypes = {
  button_text: PropTypes.string.isRequired,
  modal_text: PropTypes.string.isRequired,
};

export default ModalButton;
