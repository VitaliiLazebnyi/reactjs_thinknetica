import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import Finance from './Finance';
import AuthorsList from './AuthorsList';
import ModalButton from './ModalButton';

class Title extends Component {
  render() {
    const {authors, book, finance} = this.props.title;

    return <div className='title'>
      <AuthorsList authors={authors}/>
      <Book book={book} />
      <Finance finance={finance} />
      <ModalButton button_text='subscribe' modal_text='Bay! Pay!' />
    </div>;
  }
}

Title.propTypes = {
  title: PropTypes.shape(
      {
        authors: PropTypes.arrayOf(
            PropTypes.shape(
                {
                  full_name: PropTypes.string.isRequired,
                  email: PropTypes.string.isRequired,
                  avatar: PropTypes.string.isRequired,
                  biography: PropTypes.string.isRequired,
                },
            ),
        ).isRequired,
        book: PropTypes.shape(
            {
              title: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              pages: PropTypes.number.isRequired,
              progress: PropTypes.number.isRequired,
              image: PropTypes.string.isRequired,
            },
        ).isRequired,
        finance: PropTypes.shape(
            {
              subscribers: PropTypes.number.isRequired,
              minPrice: PropTypes.number.isRequired,
              expectedPrice: PropTypes.number.isRequired,
              collectedAmount: PropTypes.number.isRequired,
              expectedAmount: PropTypes.number.isRequired,
            },
        ).isRequired,
      },
  ).isRequired,
};

export default Title;
