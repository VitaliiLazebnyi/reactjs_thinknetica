import React, { Component } from 'react'

class Author extends Component {
    render(){
        return (
            <div className='author'>
                <div className='row'>
                    <span className='column'>Full name</span>:
                    <span className='full_name'> {this.props.author.full_name}</span>
                </div>
                <div className='row'>
                    <span className='column'>Email</span>:
                    <span className='email'> {this.props.author.email}</span>
                </div>
                <div className='row'>
                    <span className='column'>Avatar</span>:
                    <span className='avatar'> {this.props.author.avatar}</span>
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
