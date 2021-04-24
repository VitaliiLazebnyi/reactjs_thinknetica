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
                Subscribers number: {this.props.finance.subscribers}
                {this.popular()}
                Min price: {this.props.finance.min_price}
                Expected price: {this.props.finance.expected_price}
                Collected amount: {this.props.finance.collected_amount}
                Expected amount: {this.props.finance.expected_amount}
            </div>
        )
    }
}

export default Finance
