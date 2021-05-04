import React from 'react';
import PropTypes from 'prop-types';

function Avatar(props) {
  return <img
    className='avatar'
    src={props.url}
    alt={props.alt}
    width='100'
    height='100'
  />;
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};


export default Avatar;
