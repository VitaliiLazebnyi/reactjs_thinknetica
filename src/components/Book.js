import React, { Component } from 'react'

class Book extends Component {
    render(){
        return (
            <div className='book'>
                Title: {this.props.book.title}
                Description: {this.props.book.description}
                Pages: {this.props.book.pages}
                Progress: {this.props.book.progress}
                Image: {this.props.book.image}
            </div>
        )
    }
}

export default Book
