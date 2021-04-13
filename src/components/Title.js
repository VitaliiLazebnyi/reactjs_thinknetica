import React, { Component } from 'react'
import Book from "./Book";
import Finance from "./Finance";
import Author from "./Author";

class Title extends Component {
    render(){
        return <div>
            <Author author={this.props.title.author}/>
            <Book book={this.props.title.book} />
            <Finance finance={this.props.title.finance} />
        </div>
    }
}

export default Title
