import React, { Component } from 'react'

class Finance extends Component {
    render(){
        return (
            <div className='finance'>
                Min price: {this.props.finance.min_price}
                Expected price: {this.props.finance.expected_price}
                Collected amount: {this.props.finance.collected_amount}
                Expected amount: {this.props.finance.expected_amount}
            </div>
        )
    }
}

export default Finance
