import React, { Component } from 'react'
import Book from "./Book";
import Finance from "./Finance";
// import Author from "./Author";
import AuthorsList from "./AuthorsList";

class Title extends Component {
    render(){
        return <div>
            <AuthorsList authors={this.props.title.authors}/>
            {/*<Author author={this.props.title.author}/>*/}
            <Book book={this.props.title.book} />
            <Finance finance={this.props.title.finance} />
        </div>
    }
}

export default Title
