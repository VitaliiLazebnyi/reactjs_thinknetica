import React, {Component} from 'react';
import Author from './Author';
import PropTypes from 'prop-types';

class AuthorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full: false,
    };

    this.authors = this.props.authors;
    this.switchView = this.switchView.bind(this);
  }

  switchView() {
    this.setState({full: !this.state.full});
  }

  showMoreItem() {
    const text = this.state.full ? 'Show less' : 'Show more';
    return <div className='showMore' onClick={this.switchView}>{text}</div>;
  }

  authorsList() {
    const size = this.state.full ? this.authors.length : 3;
    const authorsList = this.authors.slice(0, size).map(
        (author) => <Author key={author.email} author={author} />,
    );
    return authorsList;
  }

  render() {
    return (
      <div>
        <div className="authors">
          {this.authorsList()}
          {this.showMoreItem()}
        </div>
      </div>
    );
  }
}

AuthorsList.propTypes = {
  authors: PropTypes.arrayOf(
      PropTypes.shape(
          {
            fullName: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            biography: PropTypes.string.isRequired,
          },
      ),
  ).isRequired,
};

export default AuthorsList;
