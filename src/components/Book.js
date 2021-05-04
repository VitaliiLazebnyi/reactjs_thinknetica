import React, { Component } from 'react'

class Book extends Component {
    render(){
        return (
            <div className='book'>
                <div className='row'>
                    <span className='column'>Title</span>:
                    <span className='title'> {this.props.book.title}</span>
                </div>
                <div className='row'>
                    <span className='column'>Description</span>:
                    <span className='description'> {this.props.book.description}</span>
                </div>
                <div className='row'>
                    <span className='column'>Pages</span>:
                    <span className='pages'> {this.props.book.pages}</span>
                </div>
                <div className='row'>
                    <span className='column'>Progress</span>:
                    <span className='progress'> {this.props.book.progress}</span>
                </div>
                <div className='row'>
                    <span className='column'>Image</span>:
                    <span className='image'> {this.props.book.image}</span>
                </div>
            </div>
        )
    }
}

export default Book
