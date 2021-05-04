import React, { Component } from 'react'

class Finance extends Component {
    constructor(props) {
        super(props);
        Object.assign(this, this.props.finance);
    }

    popular(){
        if (this.subscribers > 1000) {
            return <div>popular!</div>
        }
    }

    render(){
        return (
            <div className='finance'>
                <div className='row'>
                    <span className='column'>Subscribers number</span>:
                    <span className='subscribers'> {this.subscribers}</span>
                    <span className='popular'>{this.popular()}</span>
                </div>
                <div className='row'>
                    <span className='column'>Min price</span>:
                    <span className='min_price'> {this.min_price}</span>
                </div>
                <div className='row'>
                    <span className='column'>Expected price</span>:
                    <span className='expected_price'> {this.expected_price}</span>
                </div>
                <div className='row'>
                    <span className='column'>Collected amount</span>:
                    <span className='collected_amount'> {this.collected_amount}</span>
                </div>
                <div className='row'>
                    <span className='column'>Expected amount</span>:
                    <span className='expected_amount'> {this.expected_amount}</span>
                </div>
            </div>
        )
    }
}

export default Finance
