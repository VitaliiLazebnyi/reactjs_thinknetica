import Author from "./Author";

function AuthorsList(props) {
    const authors = props.authors;
    const listItems = authors.map((author) => <Author author={author}/>);
    return (
        <ul>{listItems}</ul>
    );
}

export default AuthorsList
