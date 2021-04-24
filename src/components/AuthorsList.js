import Author from "./Author";

function AuthorsList(props) {
    const authors = props.authors;
    const authorsList = authors.map(
        (author) => <Author key={author.email} author={author}/>
    );
    return (
        <div className="authors">{authorsList}</div>
    );
}

export default AuthorsList
