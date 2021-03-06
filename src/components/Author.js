import React, {Component} from 'react';
import Avatar from './Avatar';
import PropTypes from 'prop-types';

class Author extends Component {
  render() {
    const author = this.props.author;

    return (
      <div className='author'>
        <Avatar url={author.avatar} alt={author.fullName} />
        <div className='row'>
          <span className='column'>Full name</span>:
          <span className='fullName'> {this.props.author.fullName}</span>
        </div>
        <div className='row'>
          <span className='column'>Email</span>:
          <span className='email'> {this.props.author.email}</span>
        </div>
        <div className='row'>
          <span className='column'>Biography</span>:<br />
          <span className='biography'>
            <pre>{this.props.author.biography}</pre>
          </span>
        </div>
      </div>
    );
  }
}

Author.propTypes = {
  author: PropTypes.shape(
      {
        fullName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        biography: PropTypes.string.isRequired,
      },
  ).isRequired,
};

export default Author;
