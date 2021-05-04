import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Finance extends Component {
  popular() {
    if (this.subscribers > 1000) {
      return <div>popular!</div>;
    }
  }

  render() {
    const {
      subscribers,
      minPrice,
      expectedPrice,
      collectedAmount,
      expectedAmount} = this.props.finance;

    return (
      <div className='finance'>
        <div className='row'>
          <span className='column'>Subscribers number</span>:
          <span className='subscribers'> {subscribers}</span>
          <span className='popular'>{this.popular()}</span>
        </div>
        <div className='row'>
          <span className='column'>Min price</span>:
          <span className='minPrice'> {minPrice}</span>
        </div>
        <div className='row'>
          <span className='column'>Expected price</span>:
          <span className='expectedPrice'> {expectedPrice}</span>
        </div>
        <div className='row'>
          <span className='column'>Collected amount</span>:
          <span className='collectedAmount'> {collectedAmount}</span>
        </div>
        <div className='row'>
          <span className='column'>Expected amount</span>:
          <span className='expectedAmount'> {expectedAmount}</span>
        </div>
      </div>
    );
  }
}

Finance.propTypes = {
  finance: PropTypes.shape(
      {
        subscribers: PropTypes.number.isRequired,
        minPrice: PropTypes.number.isRequired,
        expectedPrice: PropTypes.number.isRequired,
        collectedAmount: PropTypes.number.isRequired,
        expectedAmount: PropTypes.number.isRequired,
      },
  ).isRequired,
};

export default Finance;
