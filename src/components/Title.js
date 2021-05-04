import React, { Component } from 'react'
import Book from "./Book";
import Finance from "./Finance";
import AuthorsList from "./AuthorsList";
import Button from "./Button";

class Title extends Component {
    render(){
        const { authors, book, finance } = this.props.title;

        return <div className='title'>
            <AuthorsList authors={authors}/>
            <Book book={book} />
            <Finance finance={finance} />
            <Button button_text='subscribe' modal_text='Bay! Pay!' />
        </div>
    }
}

export default Title
