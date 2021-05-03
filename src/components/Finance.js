import React, { Component } from 'react'

class Finance extends Component {
    popular(){
        if (this.props.finance.subscribers > 1000) {
            return <div>popular!</div>
        }
    }

    render(){
        return (
            <div className='finance'>
                <div className='row'>
                    <span className='column'>Subscribers number</span>:
                    <span className='subscribers'>{this.props.finance.subscribers}</span>
                    <span className='popular'>{this.popular()}</span>
                </div>
                <div className='row'>
                    <span className='column'>Min price</span>:
                    <span className='min_price'>{this.props.finance.min_price}</span>
                </div>
                <div className='row'>
                    <span className='column'>Expected price</span>:
                    <span className='expected_price'>{this.props.finance.expected_price}</span>
                </div>
                <div className='row'>
                    <span className='column'>Collected amount</span>:
                    <span className='collected_amount'>{this.props.finance.collected_amount}</span>
                </div>
                <div className='row'>
                    <span className='column'>Expected amount</span>:
                    <span className='expected_amount'>{this.props.finance.expected_amount}</span>
                </div>
            </div>
        )
    }
}

export default Finance
