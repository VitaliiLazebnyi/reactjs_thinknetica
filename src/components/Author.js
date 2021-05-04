import React, { Component } from 'react'
import Avatar from "./Avatar";

class Author extends Component {
    render(){
        const author = this.props.author

        return (
            <div className='author'>
                <Avatar url={author.avatar} alt={author.full_name} />
                <div className='row'>
                    <span className='column'>Full name</span>:
                    <span className='full_name'> {this.props.author.full_name}</span>
                </div>
                <div className='row'>
                    <span className='column'>Email</span>:
                    <span className='email'> {this.props.author.email}</span>
                </div>
                <div className='row'>
                    <span className='column'>Biography</span>:<br />
                    <span className='biography'><pre>{this.props.author.biography}</pre></span>
                </div>
            </div>
        )
    }
}

export default Author
