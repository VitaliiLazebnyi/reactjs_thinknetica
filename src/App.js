import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';

function App(props) {
  return (
    <React.Fragment>
      <Header />
      <Title title={props.title} />
      <Footer />
    </React.Fragment>
  );
}

App.propTypes = {
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

export default App;
