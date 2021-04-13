import React, { Component } from 'react'

class Author extends Component {
    render(){
        return (
            <div className='author'>
                Full name: {this.props.author.full_name}
                Email: {this.props.author.email}
                Avatar: {this.props.author.avatar}
                Biography: {this.props.author.biography}
            </div>
        )
    }
}

export default Author
