import React from 'react';
import PropTypes from 'prop-types';
import user from './../data/user.json';

const AuthContext = React.createContext(user);
export default AuthContext;

export function AuthProvider(props) {
  return (
    <AuthContext.Provider>
      {props.children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
